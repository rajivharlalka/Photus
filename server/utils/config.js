require("dotenv").config();

const SUPABASE_URL = process.env.SUPABASE_URL;
const ANON_KEY = process.env.PUBLIC_ANON_KEY;
const PORT = process.env.PORT || 4000;

module.exports = { SUPABASE_URL, ANON_KEY, PORT };
