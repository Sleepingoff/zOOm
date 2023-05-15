const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("message", (message) =>{
    console.log(`Just got this: ${message.data} from the Server at ${message.timeStamp}`);
});

socket.addEventListener("open", ()=>{
    console.log("Connected to Browser");
})

socket.addEventListener("close", () => {
    console.log("Disconnected: Connection closed by Server");
});

socket.addEventListener("error", () => {
    console.log("Error");
});

setTimeout(()=>{
    socket.send("hello from the browser!");
},10000);