require("dotenv").config();

//require express package
const express = require("express");
const mongoose = require("mongoose");

//import routes
const questionRoutes = require("./routes/questions");
const userRoutes = require("./routes/user");

//create express app
const app = express();

//global middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/questions", questionRoutes);
app.use("/api/user", userRoutes);

//react to route requests (to test api)
// app.get("/", (req, res) => {
//   res.json({ message: "welcome to the app" });
// });

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
