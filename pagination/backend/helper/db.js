const mongoose = require("mongoose");

const uri = process.env.mongodb;
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
