const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const db = require("./models");

db.sequelize
  .sync()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

require("./routes")(app);

app.listen(3001, () => {
  console.log("running on port 3001");
});
