const router = require("express").Router();
const config = require("../utils/config");
const { createClient } = require("@supabase/supabase-js");
const { createFileName } = require("../helper/fileName");

const supabase = createClient(config.SUPABASE_URL, config.ANON_KEY);

router.post("/", async (req, res) => {
  try {
    const file = req.files.file;
    file.name = createFileName(file.name);
    console.log(file.name);
    const pt = "public/" + file.name;
    const { data } = await supabase.storage
      .from("photos")
      .upload(pt, file.data, {
        cacheControl: 100,
        contentType: file.mimetype,
      });
    const { signedURL } = await supabase.storage
      .from("photos")
      .createSignedUrl(pt, 86400);
    res.send({ url: signedURL });
  } catch (err) {
    console.log(err);
    res.statusCode(400).json({ error: err });
  }
});

module.exports = router;
