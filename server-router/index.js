module.exports.router = router;

function router(req, res) {
  let navigation = getNavigation(req);
  switcher(navigation, req, res);
}

function getNavigation(req) {
  let navigation = {
    url: req.url,
    method: req.method
  };
  return navigation;
}

function switcher(navigation, req, res) {
  switch (navigation.url) {
    case "/":
      res.end("root");
      break;
    case "/test":
      res.end("test");
      break;
    case "/login":
      res.end("login");
      break;
    case "/logout":
      res.end("logout");
      break;
    case "/registration":
      res.end("registration");
      break;
    default:
      res.end(`404 not found ${navigation.url}`);
      break;
  }
  return;
}
