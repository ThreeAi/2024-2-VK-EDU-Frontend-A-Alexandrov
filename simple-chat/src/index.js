import "./index.css";
import avatar from "./img/avatar.jpg";
import img from "./img/img.png";
import "./chats.js";
const form = document.querySelector("form");
const messageInput = document.getElementsByClassName("message-input")[0];
const messagesContainer = document.getElementsByClassName("chat-body")[0];

document.addEventListener("DOMContentLoaded", () => {
	const currentUrl = window.location.pathname;

	if (currentUrl.includes("index.html")) {
		document.getElementsByClassName("avatar")[0].src = avatar;
		document.getElementsByClassName("image")[0].src = img;

		let messagesState = [];

		window.addEventListener("load", () => {
			loadMessages();
		});

		messageInput.addEventListener("input", function () {
			const lineHeight = parseInt(
				window.getComputedStyle(this).lineHeight
			);
			const maxRows = 5;

			this.rows = 1;
			const currentRows = Math.floor(this.scrollHeight / lineHeight);

			if (currentRows < maxRows) {
				this.rows = currentRows;
				messagesContainer.scrollTop = messagesContainer.scrollHeight;
			} else {
				this.rows = maxRows;
				this.style.overflowY = "auto";
			}
		});

		form.addEventListener("submit", handleSubmit);
		form.addEventListener("keypress", handleKeyPress);

		function handleSubmit(event) {
			event.preventDefault();

			if (messageInput.value.trim() === "") return;

			const message = {
				sender: "User",
				text: messageInput.value.trim(),
				time: new Date().toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
				}),
			};

			appendMessage(message);
			messagesState.push(message);
			messageInput.value = "";
		}

		function handleKeyPress(event) {
			if (event.keyCode === 13) {
				if (event.shiftKey) {
					messageInput.value += "\n";
					messageInput.dispatchEvent(new Event("input"));
					event.preventDefault();
				} else {
					event.preventDefault();
					form.dispatchEvent(new Event("submit"));
					messageInput.dispatchEvent(new Event("input"));
				}
			}
		}

		function saveMessagesToLocalStorage() {
			localStorage.setItem("chatMessages", JSON.stringify(messagesState));
		}

		function loadMessages() {
			messagesState =
				JSON.parse(localStorage.getItem("chatMessages")) || [];
			messagesState.forEach((message) => {
				appendMessage(message);
			});
		}

		function appendMessage(message) {
			const messageSendContainer = document.createElement("div");
			messageSendContainer.classList.add("message-send-container");

			const messageDiv = document.createElement("div");
			messageDiv.classList.add("message", "message-send");

			messageDiv.innerText = `${message.text}`;
			const messageTime = document.createElement("p");
			messageTime.classList.add("timestamp");
			messageTime.innerText = `${message.time}`;
			messageDiv.appendChild(messageTime);
			messageSendContainer.appendChild(messageDiv);
			messagesContainer.appendChild(messageSendContainer);
			messagesContainer.scrollTop = messagesContainer.scrollHeight;
		}

		window.addEventListener("beforeunload", saveMessagesToLocalStorage);
	}
});