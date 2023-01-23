require("dotenv").config();
// const path = require("path");
const  cors = require("cors");

const express = require("express");
const app = express();
const userRouter = require("./routes/users");

const mongoose = require("mongoose");

mongoose.set('strictQuery', false)

const connect = async () => {
  try{
      await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log("MongoDB database connection established successfully");
  } catch(err) {
      console.log(err);
  }
}
connect();

app.use(cors({
  origin: 'https://primevideoclonebysahil.netlify.app',
  optionsSuccessStatus: 200
}));

app.use(express.json())
// app.use(express.static(path.join(__dirname, "../dist")))

app.use(`/api/v1/`, userRouter);




  // app.use('/.netlify/functions/handler', userRouter);  // path must route to lambda
  app.use ('*', (req, res) => {
    res.send('404 Not Found!!');   })
    const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
  console.log('Server is running on port 4000');
});

// module.exports.handler = serverless(app);