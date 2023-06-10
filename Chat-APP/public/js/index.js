var socket = io();
var messages = document.getElementById("messages");
var form = document.getElementById("form");
var input = document.getElementById("input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
});

socket.on("chat message", function (msg) {
  console.log("Print Pankaj", msg);
  var item = document.createElement("li");
  item.textContent = msg.text;

  const date = new Date(msg.createdAt);
  const formattedDate = date.toLocaleTimeString(); // Convert to local time string

  var messageContainer = document.createElement("div");
  messageContainer.classList.add("message-container");

  var messageText = document.createElement("div");
  messageText.classList.add("message-text");
  messageText.textContent = msg.text;

  var messageTime = document.createElement("div");
  messageTime.classList.add("message-time");
  messageTime.textContent = formattedDate;

  messageContainer.appendChild(messageText);
  messageContainer.appendChild(messageTime);

  var listItem = document.createElement("li");
  listItem.appendChild(messageContainer);

  messages.appendChild(listItem);
  window.scrollTo(0, document.body.scrollHeight);
});

socket.on("Message1", (data) => {
  console.log("data", data);
  io.emit("Message1");
});

socket.emit("localmessage", messages, (data) => {
  console.log("this message emitted by the client side", data);
});

document.querySelector("#send-location").addEventListener("click", () => {
  if (!navigator.geolocation) {
    return alert("Your browser does not support geolocation.");
  }
  navigator.geolocation.getCurrentPosition((position) => {
    socket.emit("sendLocation", {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  });
});
