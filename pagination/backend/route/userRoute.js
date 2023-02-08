const express = require("express");
const router = express.Router();

const MovieTheater = (req, res) => {
  res.status(200).json({ query: req.query, params: req.params });
};

const { getUsers1, createUser1 } = require("../controller/userController");
router.get("/", getUsers1).post("/", createUser1).get("/:id", MovieTheater);
module.exports = router;
