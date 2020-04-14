"use strict";

const port = 3000,
  express = require("express"),
  app = express(),
  homeController = require("./controllers/homeController"),
layouts = require("express-ejs-layouts"),
errorController = require("./controllers/errorController");

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(errorController.respondNone);
app.use(errorController.respond404);

app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());
app.use(layouts);

app.use((req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
});

app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
});

app.get("/index", homeController.sendReqParam);
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
