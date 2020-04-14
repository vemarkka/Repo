"use strict";

const express = require("express"),
  app = express(),
  errorController = require("./controllers/errorController"),
  homeController = require("./controllers/homeController"),
  usersController=require("./controllers/usersController"),
  layouts = require("express-ejs-layouts"),
  mongoose = require("mongoose");
const  Subscriber = require("./models/subscriber");
const router= express.Router();

const subscribersController=require("./controllers/subscribersController");
mongoose.set("useCreateIndex", true);
const db = mongoose.connection;
mongoose.connect(
  "mongodb://localhost:27017/resipe_db",
  { useNewUrlParser: true }
);
db.collection("contacts")
.insert({
name:"Veronika Markkanen",
email:"vemarkka@gmail.com",
vip:'true'

}, (error,db)=>{
  if (error) throw error;
  console.log(db);
});


db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

var myQuery = Subscriber.findOne({
  name: "Veronika Markkanen"
}).where("email", /markkanen/);

myQuery.exec((error, data) => {
  if (data) console.log(data.name);
});


app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(layouts);
app.use(
  express.urlencoded({
    extended: false
  })
);
var subscriber1=new Subscriber({
  name:"Jon Wexler",
  email:"jon@wexler.com"
});
subscriber1.save((error,savedDocument)=>{
  if (error) console.log(error);
  console.log(savedDocument);

});
Subscriber.create({
  name:"Jon Wexler",
  email:"jon@wexler.com"
},
function(error,savedDocument){
  if (error) console.log(error);
  console.log(savedDocument);
}
);
app.use("/",router);
router.get("/users/new", usersController.new);
router.post("/users/create", usersController.create, usersController.redirectView);
app.use(express.json());
app.use(homeController.logRequestPaths);
app.get("/users", usersController.index, usersController.indexView);
app.get("/name", homeController.respondWithName);
app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);

app.get("/items/:vegetable", homeController.sendReqParam);
app.get("/subscribers", subscribersController.getAllSubscribers,(req,res,next)=>{
  res.render("subscribers", {subscribers: req.data})
  subscriber1.course.push(course1);
});
app.post("/", (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
});



app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
  console.log(`Server running at http://localhost:${app.get("port")}`);
});
mongoose.Promise = global.Promise;
