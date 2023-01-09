const express = require("express");
const router = express.Router();

const {
  createLink,
  getLinks,
  getLink,
} = require("../controller/linkController");

router.get("/", getLinks).post("/", createLink).get("/:id", getLink);

module.exports = router;
