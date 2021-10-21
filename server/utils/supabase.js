const { createClient } = require("@supabase/supabase-js");
const config = require("./config");

const supabase = createClient(config.SUPABASE_URL, config.ANON_KEY);

module.exports = { supabase };
