const { model, Schema } = require("mongoose");

const Users1Schema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
  //   registerDate: { type: Date, default: Date.now },
});
const Users1Model = model("Users1", Users1Schema);
module.exports = Users1Model;
