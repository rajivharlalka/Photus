const { hash } = require("../utils/hash");
const { supabase } = require("../utils/supabase");

async function updateTable(long_url) {
  const code = hash(long_url);
  const { data, error } = await supabase
    .from("links")
    .insert([{ code: code, url: long_url }], { upsert: true });
  return code;
}

module.exports = { updateTable };
