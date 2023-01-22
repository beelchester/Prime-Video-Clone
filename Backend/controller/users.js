require("dotenv").config();
const User = require("../models/User")
const RefreshToken = require("../models/RefreshToken")
const {validationResult} = require("express-validator")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const signup = async (req, res) => {
  try {
    const {name,email,password} = req.body
    // check if user already exists
    const userExist = await User.findOne({email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }
    

const errors = validationResult(req)
if(!errors.isEmpty()){
  return res.status(400).json({errors: errors.array()})
}

  const hashedPassword = await bcrypt.hash(password,10)

  const user = new User({
    name,
    email,
    password : hashedPassword
    
  });
  await user.save();
  
    res.status(201).json({ message: "User created" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({message: error.message})
  }
} 

const getOneUser = (req, res) => {
  res.json(res.user);
}

const login = async(req,res)=>{
  try {
    const {email,password} = req.body
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "Invalid Email Id" });
    }
    
    let isMatch = await bcrypt.compare(password,userExist.password)
    if (!isMatch){
      return res.status(400).json({message: "Invalid Password"})
    }

    const accessToken = jwt.sign({userId: userExist._id},process.env.ACCESS_TOKEN,{expiresIn: "10s"})
    const refreshToken = jwt.sign({userId: userExist._id},process.env.REFRESH_TOKEN,{expiresIn: "7d"})
    const newRefreshToken = new RefreshToken({token: refreshToken,userId: userExist._id})
    await newRefreshToken.save()

    const {id  ,name, watchlist} = userExist

    res.status(200).json({accessToken,refreshToken,id, name, watchlist})
  } catch (error) {
    
  }
}

const refreshToken = async (req,res)=>{
  try {
    const {refreshToken} = req.body
    if(!refreshToken) return res.status(401).json({message: "You are not authenticated"})
    const tokenExist = await RefreshToken.findOne({token: refreshToken})
    if(!tokenExist) return res.status(403).json({message: "Refresh token is not valid"})
    jwt.verify(refreshToken,process.env.REFRESH_TOKEN,(err,user)=>{
      if(err) return res.status(403).json({message: "Refresh token is not valid"})
      const accessToken = jwt.sign({userId: user.userId},process.env.ACCESS_TOKEN,{expiresIn: "10s"})
      res.status(200).json({accessToken})
    })
  } catch (error) {
    res.status(500).json({message: error.message})
  }}

const updateUser = async (req, res) => {
 
  if(req.body.watchlist != null){
    res.user.watchlist = req.body.watchlist
  }
  try {
    const updatedUser = await res.user.save()
    res.json(updatedUser)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
} 

const deleteUser = async (req, res) => {
try {
  await res.user.remove()
  res.json({message: "Deleted User"})
} catch (error) {
  res.status(500).json({message: error.message})
}
} 

 const addToWatchlist = async (req, res) => {
  try {
    // const {id, movie} = req.body
    // const user = await User.findById(id)
    if(req.body.movie == null){
      return res.status(400).json({message: "Please enter a movie"})
    }
    if(res.user.watchlist.includes(req.body.movie)){
      return res.status(400).json({message: "Movie already in watchlist"})
    }
    res.user.watchlist.push(req.body.movie)
    await res.user.save()
    res.status(200).json(res.user.watchlist)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
  }
   const removeFromWatchlist = async (req, res) => {
    try {
      if(req.body.movie == null){
        return res.status(400).json({message: "Please enter a movie"})
      }
      res.user.watchlist = res.user.watchlist.filter(movie => movie.id !== req.body.movie.id); 
      await res.user.save()
      res.status(200).json(res.user.watchlist)
    } catch (error) {
      res.status(500).json({message: error.message})
    }
    }


module.exports = {
  signup,
  login,
  deleteUser,
  getAllUsers,
  getOneUser,
  updateUser,
  refreshToken,
  addToWatchlist,
  removeFromWatchlist
}