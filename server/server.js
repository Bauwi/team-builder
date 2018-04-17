const path = require("path");
const express = require("express");
const compression = require("compression");
const minify = require("express-minify");
const app = express();
const publicPath = path.join(__dirname, "..", "build");
const port = process.env.PORT || 3001;

app.use(function(req, res, next) {
  res.setHeader("Content-Security-Policy", "script-src 'self'");
  return next();
});

app.use(compression());
app.use(minify());
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
  console.log("servingindex.html");
});

app.listen(port, () => {
  console.log("Server is up");
});
