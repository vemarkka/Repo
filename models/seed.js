

const mongoose =require ("mongoose"),
Subscriber =require("./models/subscriber")
mongoose.connect(
  "mongodb://localhost:27017/resipe_db",
  { useNewUrlParser: true }
);
mongoose.connection;
var contacts[
  {
    name: "Veronika Markkanen",
    email:"vemarkka@gmail.com",
    zipCode: 23100,
    vip:'true'
  },
  {
      name: "Chef Eggplant",
      email:"eggplant@recipeapp.com",
      zipCode: 10100,
      vip: 'false'
  }


];
Subscriber.deleteMany()
.exec()
.then(()=>{
  console.log(Subscriber.create({
    name: c.name,
    email: c.email,
    vip:c.vip
  }));
});
Promise.all(commands)
.then(r=>{
  console.log(JSON.stringify(r));
  mongoose.connection.close();
})
.catch(error=>{
  console.log(`ERROR:${error}`);
});
