const httpStatus=require("http-status-codes");

exports.respondNone=(req,res)=>{
  let errorCode=httpStatus.NOT_FOUND;
  res.status(errorCode);
  res.send(`${errorCode} There is no information`);
};
exports.respond404=(error,req,res,next)=>{
  let errorCode=httpStatus.INTERNAL_SERVER_ERROR;
  console.log(`Error occured:${error.stack}`)
  res.status(errorCode);
  res.send(`${errorCode}!Sorry, our application is experiencing a problem`);
};
