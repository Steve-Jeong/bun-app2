// require('dotenv').config()
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("HOST_PORT : ", process.env.HOST_PORT);
  console.log("req.ip : ", req.ip);
  console.log("hello world");
  res.send("Hello World 1234 abcd ");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
