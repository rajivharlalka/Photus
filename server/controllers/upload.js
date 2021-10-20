const router = require("express").Router();
const { createFileName } = require("../helper/fileName");
const { storageUpload, getUrl } = require("../helper/uploads");

router.post("/", async (req, res) => {
  try {
    const file = req.files.file;
    const path = "public/" + file.name;

    file.name = createFileName(file.name);

    storageUpload(file.data, file.mimetype, path);
    const publicURL = getUrl(path);
    res.send({ url: publicURL });
  } 
  catch (err) {
    console.log(err);
    res.statusCode(400).json({ error: err });
  }
});

module.exports = router;
