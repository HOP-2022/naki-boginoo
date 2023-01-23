const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  email: String,
  password: String,
  registerDate: { type: Date, default: Date.now },
});
const UserModel = model("User", UserSchema);
module.exports = UserModel;
