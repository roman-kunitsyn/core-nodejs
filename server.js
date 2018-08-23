const { Server } = require("http");
const { config } = require("./server-config");
const { router } = require("./server-router");

const server = new Server();

server.on("request", (req, res) => {
  router(req, res);
});

server.listen(config.port, config.hostname, () => {
  console.log(`Server running at http://${config.hostname}:${config.port}/`);
});
