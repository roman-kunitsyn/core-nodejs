module.exports.router = router;

function router(req, res) {
  staticRouter(req, res);
  authRouter(req, res);
  crudRouter(req, res);
  errorHandler(req, res);
}

function staticRouter(req, res) {
  switch (`${req.method} ${req.url}`) {
    case "GET /home":
      res.end("GET /home");
      break;
    case "GET /registration":
      res.end("GET /registration");
      break;
    case "GET /login":
      res.end("GET /login");
      break;
    case "GET /work":
      res.end("GET /work");
      break;
  }
  return;
}

function authRouter(req, res) {
  switch (`${req.method} ${req.url}`) {
    case "POST /auth/registration":
      res.end("POST /registration");
      break;
    case "POST /auth/login":
      res.end("POST /login");
      break;
    case "POST /auth/logout":
      res.end("POST /logout");
      break;
  }
  return;
}

function crudRouter(req, res) {
  switch (`${req.method} ${req.url}`) {
    case "GET /api/data/list":
      res.end("GET /api/data/list");
      break;
    case "POST /api/data":
      res.end("POST /api/data");
      break;
    case "GET /api/data/:id":
      res.end("GET /api/data/:id");
      break;
    case "DELETE /api/data/:id":
      res.end("DELETE /api/data/:id");
      break;
    case "PUT /api/data/:id":
      res.end("PUT /api/data/:id");
      break;
  }
  return;
}

function errorHandler(req, res) {
  return res.end(
    JSON.stringify(
      {
        code: 404,
        message: "not found route",
        url: req.url
      },
      null,
      4
    )
  );
}
