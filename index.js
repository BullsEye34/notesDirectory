const express = require('express');
const cors = require('cors');
require('dotenv/config')
const mongoose = require('mongoose');

// Routes
const homeRoute = require('./routes/home')
const userRoute = require('./routes/user');

// Define App to be an Express APp
const app=express();
mongoose.connect(
  process.env.MONGO_URL,
  { useUnifiedTopology: true, useNewUrlParser: true }, 
  ()=>console.log("Connected To DB"),
);


// MiddleWares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


// Endpoints

// Serve Home page
app.use("/", homeRoute);
app.use("/user", userRoute);




app.listen(3000,()=>console.log("Listening on : http://127.0.0.1:3000/"));