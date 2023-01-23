const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.mongodb;
// const JWT_SECRET = process.env.jwt;
console.log(uri);
const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log("database is successfully connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connect;
