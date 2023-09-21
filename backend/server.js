// import notes from "./data/notes";
const notes = require("./data/notes");
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
//base get app
app.get("/", (req, res) => {
  res.send("Api is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

//get prt from env file
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on ${PORT}`));
