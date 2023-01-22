
require("dotenv").config();
const path = require("path");

const express = require("express");
const app = express();
const userRouter = require("./routes/users");

const mongoose = require("mongoose");
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;
db.on("error", err => console.log(err));
db.once("open", () => {
  console.log("MongoDB database connection established successfully");
})

app.use(express.json())
app.use(express.static(path.join(__dirname, "../dist")))

app.use("/api/v1/", userRouter);

app.use ('*', (req, res) => {
  res.send('404 Not Found!!');   })

// app.listen(4000, () => {
//   console.log('Server is running on port 4000');
// });

module.exports.handler = app