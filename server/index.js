require("dotenv").config();
const weatherRoute = require("./routes/weather.route");
const cors = require("cors");
const express = require("express");

const app = express();

//using middleware
app.use(cors(
    {
        origin: "http://localhost:3000"
    }
));
app.use(express.json());


app.get("/", (req, res) => {
  res.send("Hello, Welcome to Weather Application!");
});

//importing routes
app.use("/api/v1",weatherRoute)

app.listen(8001, () => console.log("Server started on port 5000"));
