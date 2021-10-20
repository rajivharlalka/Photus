const app = require("express")();
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");
require("dotenv").config();
const path = require("path");
const { format } = require("path");

app.use(cors());
app.use(fileUpload());
app.use(morgan("dev"));

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.PUBLIC_ANON_KEY
);

app.post("/upload", async (req, res) => {
  const file = req.files.file;
  const fileName = path.parse(file.name).name;
  const ext = path.parse(file.name).ext;
  file.name = fileName + "_" + new Date().getTime() + ext;
  
  const pt = "public/" + file.name;
  // console.log(file);
  const { data, error } = await supabase.storage
    .from("photos")
    .upload(pt, file.data, {
      cacheControl: 100,
      contentType: file.mimetype,
    });
  console.log(data.Key);
  const { signedURL, err } = await supabase.storage
    .from("photos")
    .createSignedUrl(pt, 86400);
  if (!err) {
    console.log(signedURL);
  } else {
    console.log(err);
  }
  res.send();

  // const response = await supabase.storage.getBucket('photos');
  // if (!err2) {
  //   console.log(da);
  //   res.send();
  // } else {
  //   console.log("hello1");
  //   res.send(err2);
  // }
});

app.listen(process.env.PORT || 4000, () => {
  console.log("Server started on Port");
});
