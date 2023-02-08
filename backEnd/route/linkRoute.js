const express = require("express");
const router = express.Router();

const {
  createLink,
  getLinks,
  getLink,
  deleteLink,
} = require("../controller/linkController");

const { auth } = require("../middlewares/auth");
router
  .get("/", auth, getLinks)
  .post("/", auth, createLink)
  .get("/:id", getLink)
  .delete("/", auth, deleteLink);

module.exports = router;
