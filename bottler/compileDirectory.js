const { lstatSync, readFileSync, existsSync } = require('fs');
const { parse } = require('path');
const YAML = require('yamljs');
const findAllHeaders = require('./findAllHeaders');
const getDirectories = require('./getDirectories');

const isDirectory = source => lstatSync(source).isDirectory();
const matchName = nameToMatch => (name) => {
  if (typeof name === 'string') {
    return name === nameToMatch;
  }
  return Object.keys(name)[0] === nameToMatch;
};

const compileDirectory = (contents, pathname, githubUrl, path = '') => {
  const orderPath = `${pathname}/_order.yml`;
  const order = existsSync(orderPath) ? YAML.load(orderPath) : null;

  return contents
    .map(item => parse(item))
    .sort((a, b) => {
      const aOrder = order ? order.findIndex(matchName(a.name)) : a.name;
      const bOrder = order ? order.findIndex(matchName(b.name)) : b.name;

      if (aOrder < bOrder) return -1;
      if (aOrder > bOrder) return 1;
      return 0;
    })
    .reduce((acc, item) => {
      const {
        base,
        name,
        ext,
        dir,
      } = item;
      const newPathname = `${dir}/${base}`;

      if (!isDirectory(newPathname)) {
        if (ext !== '.md') return acc;
        if (!order.includes(name) && name !== 'README') return acc;

        // if it's markdown, write contents to the object
        const content = readFileSync(newPathname, 'utf8');
        const headers = findAllHeaders(content);

        return [...acc, {
          name,
          title: headers['#'] ? headers['#'][0] : name,
          content,
          url: `${githubUrl}${path}/${base}`,
          headers,
        }];
      }

      // if directory, run through the subdirectory
      const content = compileDirectory(getDirectories(newPathname), newPathname, githubUrl, `${path}/${base}`);
      const title = order.find(matchName(name));

      return [
        ...acc,
        {
          name,
          title: typeof title === 'string' ? title : title[Object.keys(title)[0]],
          content,
          url: `${githubUrl}${path}/${base}`,
        },
      ];
    }, []);
};

module.exports = compileDirectory;
