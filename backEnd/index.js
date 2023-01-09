const connect = require("./helper/db");
connect();

const express = require("express");
const cors = require("cors");
const port = 3001;
const app = express();

const linkRouter = require("./route/linkRoute");
app.use(cors());
app.use(express.json());
app.use("/links", linkRouter);

app.get("/", (require, response) => {
  response.send("Hello worlddsgs");
});

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.listen(port, () => {
  `server is running at localhost:${port}`;
});
