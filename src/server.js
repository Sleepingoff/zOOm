import http from "http";
import SocketIO from "socket.io";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const handleListen = () => console.log(`listening on http://localhost:3000`);

const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);

wsServer.on("connection", socket =>{
  socket.on("enter_room", (roomName, done)=>{
    console.log(roomName);
    done("hello");
  });
});
/*const wss = new WebSocket.Server({ server });

const sockets = [];

wss.on("connection", (socket) => {
  sockets.push(socket);
  socket["nickname"] = "Egg";
  console.log("Connected to Browser");
  socket.on("close", () => {
    console.log("disconnected from the Browser");
  });
  socket.on("message", (msg) => {
    const message = JSON.parse(msg);
    switch(message.type){
      case "new_message":
        sockets.forEach((aSocket) => aSocket.send(`${socket.nickname} : ${message.payload}`));
      case "nickname":
        socket["nickname"] = message.payload;
    }
  });
});*/

httpServer.listen(3000, handleListen);
