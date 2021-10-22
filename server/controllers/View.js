const config = require("../utils/config");
const { getPath } = require("../helper/db");

const router = require("express").Router();

router.get("/:code", async (req, res) => {
  const code = req.params.code;
  const file_path = await getPath(code);
  const link =
    config.SUPABASE_URL +
    "/storage/v1/object/public/" +
    config.BUCKET +
    "/" +
    file_path;
  res.send({ path: file_path, url: link });
});

module.exports = router;
