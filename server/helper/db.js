const { hash } = require("../utils/hash");
const { supabase } = require("../utils/supabase");

async function updateTable(path) {
  const code = hash(path);
  const { data, error } = await supabase
    .from("links")
    .insert([{ code: code, path: path }], { upsert: true });
  return code;
}

async function getPath(code) {
  const { data, error } = await supabase
    .from("links")
    .select("path")
    .eq("code", code);
  return data[0].path;
}

module.exports = { updateTable, getPath };
