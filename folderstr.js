const fs = require('fs');
const path = require('path');

function logFolderStructure(dir, prefix = '') {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.next') {
      continue;
    }
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    if (stats.isDirectory()) {
      console.log(`${prefix}${file}/`);
      logFolderStructure(filePath, `${prefix}  `);
    } else {
      console.log(`${prefix}${file}`);
    }
  }
}

logFolderStructure('./');
