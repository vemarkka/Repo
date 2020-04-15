"use strict";

exports.logRequestPaths = (req, res, next) => {
  console.log(`request made to: ${req.url}`);
  next();
};

exports.respondWithName=(req,res)=>{
  let paramsName=req.params.aname;
  res.render("index", {name:paramsName});
};
