const FS = require('fs');
const Path = require('path');

module.exports = startingDirectory => {
  if (typeof startingDirectory === 'undefined') startingDirectory = process.cwd();

  let currentDirectory = startingDirectory;
  let projectDirectory = null;

  let levels = 50;
  while (currentDirectory.length > 0 && !projectDirectory && levels-- > 0) {
    if (
      FS.readdirSync(currentDirectory).includes('node_modules') ||
      FS.readdirSync(currentDirectory).includes('package.json')
    ) {
      projectDirectory = currentDirectory;
    } else {
      currentDirectory = Path.dirname(currentDirectory);
    }
  }

  return projectDirectory;
};
