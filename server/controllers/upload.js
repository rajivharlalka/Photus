const router = require("express").Router();
const { updateTable } = require("../helper/db");
const { createFileName } = require("../helper/fileName");
const { storageUpload } = require("../helper/supabase");

router.post("/", async (req, res) => {
  try {
    const file = req.files.file;
    file.name = createFileName(file.name);
    const path = "public/" + file.name;
    storageUpload(file.data, file.mimetype, path);

    const code = await updateTable(path);
    console.log(code, 123);
    res.send({ code: code });
  } catch (err) {
    console.log(err);
    res.statusCode(400).json({ error: err });
  }
});

module.exports = router;
