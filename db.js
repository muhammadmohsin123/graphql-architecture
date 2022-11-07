const express = require("express");
const { mongoose } = require("mongoose");
require("dotenv").config();
const app = express();

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.tuuggov.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
const connectdb = async () => {
  try {
    await mongoose.connect(uri);
    app.listen(8080, () => console.log("App runing ..."));
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectdb;
