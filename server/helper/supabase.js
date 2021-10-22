const { supabase } = require("../utils/supabase");
const { getPath } = require("./db");

function storageUpload(buffer, mimetype, path) {
  const { data, error } = supabase.storage.from("photos").upload(path, buffer, {
    cacheControl: 0,
    contentType: mimetype,
  });
  return { data, error };
}

module.exports = { storageUpload };
