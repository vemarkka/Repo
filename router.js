const httpStatus = require("http-status-codes"),
  contentTypes = require("./contentTypes"),
  utils = require("./utils");



routes = {
  "GET": {
    "/info": (req, res) => {
      res.writeHead(httpStatus.OK, {
        "Content-Type": "text/plain"
      })
      res.end("Welcome to the Info Page!")
    }
  },
  'POST': {}
};

exports.handle = (req, res) => {
  try {
    routes[req.method][req.url](req, res);
  } catch (e) {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/error.html", res);
  }
};

exports.get = (url, action) => {
  routes["GET"][url] = action;
};

exports.post = (url, action) => {
  routes["POST"][url] = action;
};
