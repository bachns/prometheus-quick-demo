var express = require("express");
var app = express();

app.get("/", (req, res) => {
  console.log(new Date().toLocaleString(), "GET /");
  res.send("Welcome to bachns api");
});

app.get("/service1/status", (req, res) => {
  console.log(new Date().toLocaleString(), "GET /service1/status");
  res.send("OK");
});

app.get("/service2/status", (req, res) => {
  console.log(new Date().toLocaleString(), "GET /service2/status");
  res.send("OK");
});

app.listen(3001, () => {
  console.log(new Date().toLocaleString(), "Server is running at port 3001");
});
