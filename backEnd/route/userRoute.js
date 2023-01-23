const express = require("express");
const router = express.Router();

const { signin, signup } = require("../controller/userController");

// const { auth } = require("../middlewares/auth");
// router.use(auth);

router.get("/", signin).post("/", signup);

module.exports = router;
