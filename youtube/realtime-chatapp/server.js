const express = require("express");
const http = require("http");
const fs = require("fs");

const PORT = 3000;

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("ユーザーが接続しました");

  socket.on("chat message", (msg) => {
    // クライアントサイドへもういちど送信
    writeLogFile(msg);
    io.emit("chat message", msg);
  });
});

server.listen(PORT, () => {
  console.log("server is running");
});

function writeLogFile(msg) {
  fs.appendFile("./chat-log/log.txt", `${msg}\n`, (err) => {
    if (err) {
      console.log("ログの書き込みに失敗しました。");
      throw err;
    }
  });
}
