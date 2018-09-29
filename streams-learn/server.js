"use strict";

const url = require("url");
const fs = require("fs");

const server = require("http").createServer();
server.listen(3000, () => {
    console.log(`server start`);
});
server.on("request", (req, res) => {
  let pathname = decodeURI(url.parse(req.url).pathname);
  switch (req.method) {
    case "GET":
      if (pathname == "/") {
        fs.readFile(__dirname + "/index.html", (err, content) => {
          if (err) throw err;
          res.setHeader("Content-Type", "text/html;charset=utf-8");
          res.end(content);
        });
        return;
      }
    default:
      res.statusCode = 502;
      res.end("Not implemented");
  }
});
