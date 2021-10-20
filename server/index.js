const app = require("express")();
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const cors = require("cors");
const config = require("./utils/config");
const Upload = require("./controllers/upload");

app.use(cors());
app.use(fileUpload());
app.use(morgan("dev"));

app.use("/upload", Upload);

app.listen(config.PORT, () => {
  console.log(`Server started on Port ${config.PORT}`);
});
