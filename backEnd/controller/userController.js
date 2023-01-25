const UserModel = require("../helper/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SECRET_KEY = "itssecretkey";

// exports.createUser = async (req, res, next) => {
//   try {
//     const createUser = await UserModel.create({ ...req.body });
//     res.status(200).json({
//       message: "created",
//       data: createUser,
//     });
//   } catch (error) {
//     return res.status(400).json({ message: error, data: null });
//   }
// };
// exports.getUsers = async (req, res, next) => {
//   try {
//     const getUsers = await UserModel.find();
//     res.status(200).json({
//       message: true,
//       data: getUsers,
//     });
//   } catch (error) {
//     return res.status(400).json({ message: error, data: null });
//   }
// };
// exports.getUser = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const getUser = await UserModel.findById(id);
//     res.status(200).json({
//       message: true,
//       data: getUser,
//     });
//   } catch (error) {
//     return res.status(400).json({ message: error, data: null });
//   }
// };
// exports.deleteUser = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const deleteUser = await UserModel.findByIdAndDelete(id);
//     res.status(200).json({
//       message: "deleted",
//     });
//   } catch (error) {
//     return res.status(400).json({ message: error, data: null });
//   }
// };
// exports.updateUser = async (req, res, next) => {
//   const { id } = req.params;
//   try {
//     const updateUser = await UserModel.findByIdAndUpdate(id, { ...req.body });
//     res.status(200).json({
//       message: "updated",
//     });
//   } catch (error) {
//     return res.status(400).json({ message: error, data: null });
//   }
// };

exports.signup = async (req, res, next) => {
  try {
    const { password, email } = req.body;
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
      return res.status(409).json({ message: "burtgeltei acc bainaa" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const result = await UserModel.create({
      email: email,
      password: hashPassword,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, SECRET_KEY);
    res.status(201).json({ user: result, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something wrong" });
  }
};

exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existingUser = await UserModel.findOne({ email: email });
    if (!existingUser) {
      return res.status(401).json({ message: "email buru bainaa" });
    }
    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return res.status(402).json({ message: "nuuts ug buru bainaa" });
    }
    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET_KEY);
    res.status(201).json({ user: existingUser, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something wrong" });
  }
};
