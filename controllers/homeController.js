"use strict";

exports.sendReqParam = (req, res) => {
  let home = req.params.homepage;
  res.send(`This is the page for ${home}`);
};
exports.respondWithName=(req,res)=>{
  let paramsName=req.params.aname;
  res.render("index", {name:paramsName});
};
