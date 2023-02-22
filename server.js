const PORT = 3000;

const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("ユーザーが接続しました");

  socket.on("chat message", (msg) => {
    // クライアントサイドへもういちど送信
    io.emit("chat message", msg);
  });
});

server.listen(PORT, () => {
  console.log("server is running");
});
