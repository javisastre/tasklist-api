const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");
const port = process.env.PORT;
const publicDomain = process.env.PUBLIC_DOMAIN;

const taskRoutes = require("./routes/taskRoutes");

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB).then(
  () => console.log(`Database connected to port ${port}`),
  (err) => console.log("Cannot connect to the database")
);

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: [publicDomain], credentials: true }));
app.use("/api", taskRoutes);

const server = app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
