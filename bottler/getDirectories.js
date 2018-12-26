const { readdirSync } = require('fs');
const { join } = require('path');

const getDirectories = source => readdirSync(source).map(name => join(source, name));

module.exports = getDirectories;
