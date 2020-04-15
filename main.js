"use strict";

const express = require("express");
const app = express();
const layouts = require("express-ejs-layouts");

const contentTypes = require("./contentTypes");
const utils = require("./utils");
const router = require("./router");

const errorController = require("./controllers/errorController");
const homeController = require("./controllers/homeController");


const mongoose = require("mongoose");
const db = mongoose.connection;
mongoose.connect(
  "mongodb://localhost:27017/recipe_db",
  { useNewUrlParser: true }
);
db.collection("forms")
.insert({}, (error,db)=>{
  if (error) throw error;
  console.log(db);
});

app.set("view engine", "ejs");
app.use(express.static('public'));


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
app.set("port", process.env.PORT || 3000);

app.get("/", homeController.respondWithName);
app.get("/homepage", homeController.respondWithName);
app.get("/error",function (req,res) {res.send('error');});
app.get("/thanks",function (req,res) {res.send('thanks');});


app.use(errorController.respondNone);
app.use(errorController.respond404);

app.listen(app.get("port"), () => {
console.log(`Server running at http://localhost:${app.get("port")}`);
});
