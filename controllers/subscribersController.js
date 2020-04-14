const Subscriber = require("../models/subscriber");

exports.getSubscriptionPage=(req, res)=>{
  res.render("contact");
};
exports.saveSubscriber= (req,res)=>{
  let newSubscriber= new Subscriber ({
    name:req.body.name,
    email: req.body.email,
    zipCode:req.body.zipCode,
    vip: req.body.vip
  });

newSubscriber.save()
  .then(result=>{
    res.render("thanks");
  })
  .catch(error =>{
    if(error) res.send(error);
  });

};

exports.getAllSubscribers=(req, res) => {
  Subscriber.find({})
  .exec()
  .then((subscribers)=>{
    res.render("subscribers",{
      subscribers:subscribers
    });
  })
  .catch((error)=>{
    console.log(error.message);
    return[];
  })
  .then(()=>{
    console.log("promise complete");
  });
};
