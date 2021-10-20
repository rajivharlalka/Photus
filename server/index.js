const express = require("express");
const fileUpload = require('express-fileupload');
const app = express();
const morgan = require("morgan");
const cors = require("cors");
const {
  createClient
} = require("@supabase/supabase-js");
require('dotenv').config();

app.use(cors());
app.use(fileUpload());
app.use(morgan('dev'));

const supabase = createClient(process.env.SUPABASE_URL, process.env.PUBLIC_ANON_KEY);

app.post("/upload", function (req, res) {
  const data = req.files.file;
  console.log(data);
  res.send();

});


app.listen(process.env.PORT || 4000, () => {
  console.log("Server started on Port");
})