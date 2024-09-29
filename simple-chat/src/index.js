import "./index.css";
import avatar from './img/avatar.jpg';
import img from './img/img.png';
const form = document.querySelector("form");
const messageInput = document.getElementsByClassName("message-input")[0];
const messagesContainer = document.getElementsByClassName("chat-body")[0];

document.getElementsByClassName("avatar")[0].src = avatar; 
document.getElementsByClassName("image")[0].src = img; 

window.addEventListener("load", () => {
  loadMessages();
});

form.addEventListener("submit", handleSubmit);
form.addEventListener("keypress", handleKeyPress);

function handleSubmit(event) {
    event.preventDefault();
    
    if (messageInput.value.trim() === '') return;

    const message = {
        sender: 'User',
        text: messageInput.value.trim(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    saveMessage(message);
    appendMessage(message);
    messageInput.value = ''; 
}

function handleKeyPress(event) {
    if (event.keyCode === 13) {
        form.dispatchEvent(new Event("submit"));
    }
}

function saveMessage(message) {
  let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
  messages.push(message);
  localStorage.setItem("chatMessages", JSON.stringify(messages));
}

function loadMessages() {
  const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
  messages.forEach((message) => {
    appendMessage(message);
  });
}

function appendMessage(message) {
    const messageSendContainer = document.createElement("div");
    messageSendContainer.classList.add("message-send-container");
  
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", "message-send");
  
    messageDiv.innerHTML = `
      <p>${message.text}</p>
      <p class="timestamp">${message.time}</p>
    `;
    messageSendContainer.appendChild(messageDiv);
    messagesContainer.appendChild(messageSendContainer);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
