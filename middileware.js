
module.exports =  reqFilter = (req,res,next)=>{

  if(!req.query.age){

    console.log("inter your age")
  }
 else{
    console.log("requireFilter")
    next();}
}