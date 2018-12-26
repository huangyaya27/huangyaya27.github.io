const { writeFile } = require('fs');
const compileDirectory = require('./compileDirectory');
const getDirectories = require('./getDirectories');

module.exports = (fileName, githubUrl, docRoot) => {
  const rootContents = getDirectories(docRoot);
  writeFile(
    fileName,
    JSON.stringify(compileDirectory(rootContents, docRoot, githubUrl)),
    'utf8',
    (err) => {
      if (err) return console.log(err);

      console.log(`${fileName} successfully written to s3.`);
      return process.exit();
    },
  );
};
