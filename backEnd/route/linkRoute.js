const express = require("express");
const router = express.Router();

const {
  createLink,
  getLinks,
  getLink,
  deleteLink,
} = require("../controller/linkController");

router
  .get("/", getLinks)
  .post("/", createLink)
  .get("/:id", getLink)
  .delete("/", deleteLink);

module.exports = router;
