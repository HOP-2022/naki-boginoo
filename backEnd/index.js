const connect = require("./helper/db");
connect();

const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3001;
const app = express();

const linkRouter = require("./route/linkRoute");
const userRouter = require("./route/userRoute");

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use("/links", linkRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`server is running at localhost:${port} =====> 3000`);
});
