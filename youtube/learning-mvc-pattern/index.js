const express = require("express");
const userRouter = require("./routes/user.route");

const app = express();

app.use("/user", userRouter);

app.listen(3005, () => {
  console.log("server running on port 3005");
});
