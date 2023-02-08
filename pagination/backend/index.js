const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connect = require("./helper/db");
// const dotenv = require("dotenv");
// dotenv.config();
connect();
const port = process.env.PORT || 3001;
const app = express();

const users1Router = require("./route/userRoute");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/users1", users1Router);
app.listen(port, () => {
  console.log(`server is running at localhost:${port} =====> 3000`);
});
console.log("8eyvy8w");
