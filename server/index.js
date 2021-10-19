const router = require("express").Router();
const {
  createClient
} = require("@supabase/supabase-js");
require('dotenv').config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.PUBLIC_ANON_KEY);

router.post("/upload", (req, res) => {})


app.listen(process.env.PORT || 4000, () => {
  console.log("Server started on Port");
})