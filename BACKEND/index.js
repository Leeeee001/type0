const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(DB).then((con) => {
  //   console.log(con.connections);
  console.log("succesful");
});

const port = 3000;

// const userSchema = new mongoose.Schema({
//   leaderBoard: Object,
//   stats: Object,
//   txtStreams: Object,
// });

const leaderBoards = mongoose.model("leaderboards", new mongoose.Schema());
const textStreams = mongoose.model("textstreams", new mongoose.Schema());

app.get("/para", async (req, res) => {
  const userData = await textStreams.find();
  res.json(userData);
});
app.get("/top5", async (req, res) => {
  const userData = await leaderBoards.find();

  res.json(userData);
});

app.get("/", (req, res) => {
  res.status(200).json({ youGot: "rooted" });
});

app.put("/top5", async (req, res) => {
  console.log(typeof req.body);
  console.log("patched");
  leaderBoards.collection.replaceOne({}, req.body);
  res.status(200).json(req.body);
});

app.listen(port, () => {
  console.log(`listing on port ${port}`);
});
