const express = require("express");
const mongoose = require("mongoose");
const routes = require("./Routes/ToDoRoutes");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb+srv://Sarvik_Vag:Sarvik11@cluster0.xbegune.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true })
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use(routes);

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});
