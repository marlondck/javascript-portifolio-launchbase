const express = require("express");
const nunjuks = require("nunjucks");

const server = express();

server.use(express.static("public"));

server.set("view engine", "html");
nunjuks.configure("views", {
  express: server,
});

server.get("/", (req, res) => res.render("about"));
server.get("/portifolio", (req, res) => res.render("portifolio"));

server.listen(3000);
