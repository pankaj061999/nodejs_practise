const path = require("path");
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
var cookieParser = require("cookie-parser");
// A javascript filter for badwords
var Filter = require("bad-words");
const { genrtationMessage } = require("./src/utils/messages");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
app.use(cookieParser());
const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "public");

app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicDirectoryPath, "index.html"));
});

app.get("/pankaj", function (req, res) {
  res.cookie("name", "express").send("cookie set"); //Sets name = express
});

io.on("connection", (socket) => {
  socket.emit("chat message", genrtationMessage("pankaj"));
  socket.on("chat message", (msg) => {
    const filter = new Filter({ placeHolder: "x" });
    if (filter.isProfane(msg)) {
      return io.emit(
        "chat message",
        genrtationMessage(
          `its is not working profinate filter ${filter.clean(msg)}`
        )
      );
    }
    //   this help to all connectd and cuurecnt socket holder recive message
    io.emit("chat message", genrtationMessage(msg));
    // this use current socket holder not recived own message but other socket connectd user recive
    socket.broadcast.emit("chat message", genrtationMessage(msg));
  });

  socket.on("sendLocation", (msg) => {
    io.emit("chat message", `msg value ${msg.latitude} and ${msg.longitude}`);
  });

  socket.on("localmessage", (message, callback) => {
    io.emit("chat message", genrtationMessage(message));
    callback("Pankaj Kumar Meena");
  });
  socket.on("disconnect", () => {
    io.emit("chat message", genrtationMessage("user left this connection"));
  });
});

server.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
