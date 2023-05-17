const socket = new WebSocket(`ws://${window.location.host}`);
const messageList = document.querySelector("ul");
const messageForm = document.querySelector("form");

socket.addEventListener("open", ()=>{
    console.log("Connected to Browser");
})

socket.addEventListener("close", () => {
    console.log("Disconnected: Connection closed by Server");
});

socket.addEventListener("message", (message) => {
    const li = document.createElement("li");
    li.innerText = message.data;
    messageList.append(li);
});

function handleSubmit(event){
    event.preventDefault();
    const input = messageForm.querySelector("input");
    console.log(input.value);
    socket.send(input.value);
    input.value = "";
}

messageForm.addEventListener("submit", handleSubmit);