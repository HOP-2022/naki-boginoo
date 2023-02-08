const express = require("express");
const router = express.Router();

const {
  signin,
  signup,
  getUsers,
  updateUser,
} = require("../controller/userController");
router
  .post("/", signin)
  .post("/signup", signup)
  .get("/", getUsers)
  .put("/:id", updateUser);

module.exports = router;
