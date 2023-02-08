const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  email: String,
  password: String,
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin", "superadmin"],
  },
  registerDate: { type: Date, default: Date.now },
});
const UserModel = model("User", UserSchema);
module.exports = UserModel;
