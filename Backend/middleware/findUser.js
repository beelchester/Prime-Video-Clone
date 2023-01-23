const User = require("../models/User")
module.exports = async function findUser(req,res,next){//next is used to move to the next function in the middleware chain
  let user
  try {
    user = await User.findById(req.params.id)
    if(user == null){
      return res.status(404).json({message: "Cannot find user"})//404 is status code for not found
    }
  } catch (error) {
    return res.status(500).json({message: error.message})//500 is status code for server error  
  }
res.user  = user  //to access the user in the next function we are storing it in res.user
next()//to move to the next function
}