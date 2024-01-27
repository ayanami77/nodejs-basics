const express = require("express");
const app = express();
const { authCourse, authPage } = require("./middleware");

app.use(express.json());

app.get("/home", (req, res) => {
  res.json("home page");
});

app.get("/course/grades", authPage(["teacher", "admin"]), (req, res) => {
  res.json({
    a: 100,
    b: 95,
    c: 40,
    d: 22,
  });
});

app.get("/course/:number", (req, res) => {
  const courseNumber = req.params.number;
  res.json(`You have permission to see course ${courseNumber}`);
});

app.listen(3001, () => {
  console.log("server running on port 3001");
});
