const express = require("express");
const router = require("./routes");
const cors = require("cors");

require("dotenv").config();

const app = express();

const port = process.env.PORT || 3306;

app.use("/api/v1/", cors(), router);

app.use("*", (req, res) => {
  res.send("Nhập Sai Đường Dẫn! Vui Lòng Nhập Lại >.<");
});

app.listen(port, () => {
  console.log("App running on port " + port);
});
