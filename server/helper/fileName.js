const path = require("path");

function createFileName(filePath) {
  const fileName = path.parse(filePath).name;
  const ext = path.parse(filePath).ext;
  return fileName + "_" + new Date().getTime() + ext;
}

module.exports = { createFileName };
