import Header from "./components/Header.js";
import ChatItem from "./components/ChatItem.js";
import FloatingButton from "./components/FloatingButton.js";
import avatar from "./img/avatar.jpg";

document.addEventListener("DOMContentLoaded", () => {
	const currentUrl = window.location.pathname;

	if (currentUrl.includes("chats.html")) {
		document.getElementsByClassName("chats-header")[0].innerHTML = Header();

		const chatData = [
			{
				avatar: avatar,
				name: "Дженнифер Эшли",
				message: "Ты куда пропал?",
				time: "15:52",
				unread: null,
				tag: false,
				read: true,
			},
			{
				avatar: avatar,
				name: "Общество целых бокалов",
				message: "Ребят, без меня сегодня :(",
				time: "15:52",
				unread: 93,
				tag: false,
				read: false,
			},
			{
				avatar: avatar,
				name: "Антон Иванов",
				message: "Тоха, ты где?",
				time: "15:52",
				unread: null,
				tag: true,
				read: true,
			},
			{
				avatar: avatar,
				name: "Серёга (должен 2000Р)",
				message: "Серёг, это Петя. Где бабло моё?",
				time: "15:52",
				unread: 46,
				tag: true,
				read: false,
			},
			{
				avatar: avatar,
				name: "Общество разбитых бокалов",
				message: "Петька, ты с нами сегодня?",
				time: "15:52",
				unread: null,
				tag: false,
				read: true,
			},
			{
				avatar: avatar,
				name: "Сэм с Нижнего",
				message: "img_12-12-09",
				time: "15:52",
				unread: null,
				tag: false,
				read: false,
			},
			{
				avatar: avatar,
				name: "Айрат работа",
				message: "Айрат, во сколько приедешь?",
				time: "15:52",
				unread: null,
				tag: false,
				read: true,
			},
			{
				avatar: avatar,
				name: "Кеша армия",
				message: "Кеша, задолбал тупить",
				time: "15:52",
				unread: 61,
				tag: false,
				read: false,
			},
		];

		const chatList = document.getElementsByClassName("chat-list")[0];
		chatData.forEach((chat, index) => {
			const chatItemHTML = ChatItem(chat);
			chatList.innerHTML += chatItemHTML;
		});

		const chatItems = document.querySelectorAll(".chat-item");
		chatItems.forEach((chatItem) => {
			chatItem.addEventListener("click", () => {
				window.location.href = "./index.html";
			});
		});

		document.getElementsByClassName("floating-button")[0].innerHTML =
			FloatingButton();

		document
			.querySelector(".floating-btn")
			.addEventListener("click", () => {
				const newChat = {
					avatar: avatar,
					name: "Новый чат",
					message: "Это новый чат!",
					time: new Date().toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
					}),
					unread: null,
					tag: false,
					read: false,
				};

				const chatItemHTML = ChatItem(newChat);
				chatList.insertAdjacentHTML("afterbegin", chatItemHTML);

				const newChatElement = chatList.firstElementChild;
				newChatElement.classList.add("chat-item-animation");

				requestAnimationFrame(() => {
					newChatElement.classList.add("appear");
				});

				newChatElement.addEventListener("click", () => {
					window.location.href = "./index.html";
				});
			});
	}
});
