
require("dotenv").config();
const path = require("path");

const express = require("express");
const app = express();
const userRouter = require("./routes/users");
const serverless = require('serverless-http');

const mongoose = require("mongoose");

mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URI);

const connect = async () => {
  try{
      await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log("MongoDB database connection established successfully");
  } catch(err) {
      console.log(err);
  }
}
connect();

app.use(express.json())
// app.use(express.static(path.join(__dirname, "../dist")))

// app.use("/api/v1/", userRouter);




  app.use('/.netlify/functions/handler', userRouter);  // path must route to lambda
  app.use ('*', (req, res) => {
    res.send('404 Not Found!!');   })
// app.listen(4001, () => {
//   console.log('Server is running on port 4000');
// });

module.exports.handler = serverless(app);