const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

app.post("/api/test", (req, res) => {
  if (
    req.body.email === "sultanbittu775@gmail.com" &&
    req.body.password === "1234"
  )
    return res.status(200).send("Login Success");

  return res.status(500).send("Failed Login");
});

app.listen("5000", () => {
  console.log("Backend Server running");
});
