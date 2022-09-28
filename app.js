require("./Database/connect");
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./Database/connect");
require("dotenv").config({ path: "./routes/.env" });

app.use(express.static('./public'));
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Task Manager");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening port ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
