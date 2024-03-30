require("dotenv").config();
const PORT = process.env.PORT || 5000;
const weatherRoute = require("./routes/weather.route");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const app = express();

//using middleware
app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);
app.use(express.json());

app.use(express.urlencoded({ extended: true }));    
app.use(morgan("dev"));



app.get("/", (req, res) => {
  res.send("Hello, Welcome to Weather Application!");
});

//importing routes
app.use("/api/v1", weatherRoute);
app.on("error", (err) => console.log(err));
app.listen(PORT, () => console.log("Server started on port 5000"));
