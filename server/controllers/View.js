const { downloadImage } = require("../helper/supabase");

const router = require("express").Router();

router.get("/:code", (req, res) => {
  const code = req.params.code;
  const image = downloadImage(code);
  res.send();
});

module.exports = router;
