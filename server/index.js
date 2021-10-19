const app = require("express")();


app.listen(process.env.PORT || 4000, () => {
  console.log("Server started on Port");
})