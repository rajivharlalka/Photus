const { createClient } = require("@supabase/supabase-js");
const config = require("../utils/config");

const supabase = createClient(config.SUPABASE_URL, config.ANON_KEY);

function storageUpload(buffer, mimetype, path) {
  const { data } = supabase.storage.from("photos").upload(path, buffer, {
    contentType: mimetype,
  });
  return data;
}

function getUrl(path) {
  const { publicURL } = supabase.storage.from("photos").getPublicUrl(path);
  return publicURL;
}

module.exports = { storageUpload, getUrl };
