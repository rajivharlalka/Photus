const { supabase } = require("../utils/supabase");

function storageUpload(buffer, mimetype, path) {
  const { data, error } = supabase.storage.from("photos").upload(path, buffer, {
    cacheControl:0,
    contentType: mimetype,
  });
  return { data, error };
}

function getUrl(path) {
  const { publicURL } = supabase.storage.from("photos").getPublicUrl(path);
  return publicURL;
}

module.exports = { storageUpload, getUrl };
