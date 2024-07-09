const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

const port = 3000;

mongoose
  .connect(DB)
  .then((con) => {
    //   console.log(con.connections);
    console.log("succesfully connected with the database");
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(
      "failed to connect to the database or could error in port listing too idk or maybe the build in render failed"
    );
    console.log(err);
  });

// const userSchema = new mongoose.Schema({
//   leaderBoard: Object,
//   stats: Object,
//   txtStreams: Object,
// });

const leaderBoards = mongoose.model("leaderboards", new mongoose.Schema());
const textStreams = mongoose.model("textstreams", new mongoose.Schema());

app.get("/", (req, res) => {
  res.status(200).json({ youGot: "rooted" });
});

app.get("/para", async (req, res) => {
  try {
    const userData = await textStreams.find();
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: "something is wrong with the server" });
    console.log(error);
  }
});

app.get("/top5", async (req, res) => {
  try {
    const userData = await leaderBoards.find();
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
    console.log(error);
  }
});

app.put("/top5", async (req, res) => {
  try {
    // console.log(typeof req.body);
    leaderBoards.collection.replaceOne({}, req.body);
    res.status(200).json(req.body);
  } catch (error) {
    res
      .status(500)
      .json({ error: "internal server error, could not update leaderboards" });
    console.log(error);
  }
});
