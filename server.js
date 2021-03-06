require("dotenv").config();
const express = require('express');
const app = express();
const mongoose = require('./db/connection');
const cors = require("cors");
const morgan = require("morgan");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const animeRoute = require("./routes/animes")
const listRoute = require("./routes/animeLists")

app.use(express.json());
app.get("/", (req, res) => {
  res.send(`Animedia is running on ${port}`);
});

app.get("/favicon.ico", (req, res) => {
  res.send("favicon found");
});

app.use("/auth", authRoute)
app.use("/users", userRoute)
app.use("/anime", animeRoute)
app.use("/lists", listRoute)


const port = process.env.port || 4023;

app.listen(port, () => {
  console.log(`Animedia is running on ${port}`);
});