const express = require("express");
const router = express.Router();

const {
  createLink,
  getLinks,
  getLink,
  deleteLink,
} = require("../controller/linkController");

const { auth } = require("../middlewares/auth");
router.use(auth);

router
  .get("/", getLinks)
  .post("/", createLink)
  .get("/:id", getLink)
  .delete("/", deleteLink);

module.exports = router;
