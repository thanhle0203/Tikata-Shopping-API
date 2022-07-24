// Load Express module
const express = require("express");
const app = express();
//Connect to mongose db
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");

dotenv.config();


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

  // Created API user
app.use(express.json());
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log("Backend server is running!");
});