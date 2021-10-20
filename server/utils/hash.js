const crypto = require("crypto");

function hash(l_url) {
  return crypto.createHash("sha256").update(l_url).digest("hex").slice(0, 6);
}

module.exports = { hash };
