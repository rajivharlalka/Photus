const app = require("express")();
const fileUpload = require('express-fileupload');
const morgan = require("morgan");
const cors = require("cors");
const {
  createClient
} = require("@supabase/supabase-js");
require('dotenv').config();
const path = require("path");

app.use(cors());
app.use(fileUpload());
app.use(morgan('dev'));

const supabase = createClient(process.env.SUPABASE_URL, process.env.PUBLIC_ANON_KEY);

app.post("/upload", async (req, res) => {
  const data = req.files.file;
  const fileName = path.parse(data.name).name;
  const ext = path.parse(data.name).ext;
  data.name = fileName + "_" + new Date().getTime() + ext;
  console.log(data);
  const {
    da,
    err2
  } = await supabase.storage.getBucket('photos');
  if (!err2) {
    console.log("hello");
    console.log(da);
    res.send();
  } else {
    console.log("hello1");
    res.send(err2);
  }
  const {
    response,
    err
  } = await supabase.storage.from("photos").upload('/public/index.html', data.data);
  if (!err) {
    console.log("hello");
    res.send(response);
  } else {
    "hello1"
    res.send(err);
  }
});


app.listen(process.env.PORT || 4000, () => {
  console.log("Server started on Port");
})