const router = require("express").Router();
const { updateTable } = require("../helper/db");
const { createFileName } = require("../helper/fileName");
const { storageUpload, getUrl } = require("../helper/uploads");

router.post("/", async (req, res) => {
  try {
    const file = req.files.file;
    file.name = createFileName(file.name);
    const path = "public/" + file.name;
    storageUpload(file.data, file.mimetype, path);
    const publicURL = getUrl(path);
    
    const code = updateTable(publicURL);
    res.send({ url: publicURL });
  } catch (err) {
    console.log(err);
    res.statusCode(400).json({ error: err });
  }
});

module.exports = router;
