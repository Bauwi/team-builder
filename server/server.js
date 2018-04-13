const path = require("path");
const express = require("express");
const compression = require("compression");
const app = express();
const publicPath = path.join(__dirname, "..", "build");
const port = process.env.PORT || 3001;

app.use(compression());
app.use(express.static(publicPath));

console.log("helloworld");
app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
  console.log("servingindex.html");
});

app.listen(port, () => {
  console.log("Server is up");
});
