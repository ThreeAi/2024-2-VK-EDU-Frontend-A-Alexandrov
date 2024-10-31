import { createContext } from "react";
import avatar from "../assets/img/avatar.jpg";

export const pages = {
	listChats: {
		name: "List of Chats",
		data: {
			chats: [
				{
					id: 1,
					new: false,
					avatar: avatar,
					name: "Дженнифер Эшли",
					message: "Ты куда пропал?",
					time: "15:52",
					unread: null,
					tag: false,
					read: true,
				},
				{
					id: 2,
					new: false,
					avatar: avatar,
					name: "Общество целых бокалов",
					message: "Ребят, без меня сегодня :(",
					time: "15:52",
					unread: 93,
					tag: false,
					read: false,
				},
				{
					id: 3,
					new: false,
					avatar: avatar,
					name: "Антон Иванов",
					message: "Тоха, ты где?",
					time: "15:52",
					unread: null,
					tag: true,
					read: true,
				},
				{
					id: 4,
					new: false,
					avatar: avatar,
					name: "Серёга (должен 2000Р)",
					message: "Серёг, это Петя. Где бабло моё?",
					time: "15:52",
					unread: 46,
					tag: true,
					read: false,
				},
				{
					id: 5,
					new: false,
					avatar: avatar,
					name: "Общество разбитых бокалов",
					message: "Петька, ты с нами сегодня?",
					time: "15:52",
					unread: null,
					tag: false,
					read: true,
				},
				{
					id: 6,
					new: false,
					avatar: avatar,
					name: "Сэм с Нижнего",
					message: "img_12-12-09",
					time: "15:52",
					unread: null,
					tag: false,
					read: false,
				},
				{
					id: 7,
					new: false,
					avatar: avatar,
					name: "Айрат работа",
					message: "Айрат, во сколько приедешь?",
					time: "15:52",
					unread: null,
					tag: false,
					read: true,
				},
				{
					id: 8,
					new: false,
					avatar: avatar,
					name: "Кеша армия",
					message: "Кеша, задолбал тупить",
					time: "15:52",
					unread: 61,
					tag: false,
					read: false,
				},
			],
		},
	},
	chat: {
		name: "Chat",
		data: [
			{
				chatId: 1,
				messages: [
					{ sended: true, text: "Привет! Как дела?", time: "10:30" },
					{
						sended: false,
						text: "Все отлично, спасибо! А у тебя?",
						time: "10:32",
					},
					{
						sended: true,
						text: "Тоже все хорошо, работаю над проектом.",
						time: "10:35",
					},
					{
						sended: false,
						text: "Здорово! Успехов с проектом!",
						time: "10:40",
					},
				],
			},
			{
				chatId: 2,
				messages: [
					{ sended: true, text: "Как ты? Чем занят?", time: "15:53" },
					{
						sended: false,
						text: "Всё нормально, работаю над задачами.",
						time: "15:54",
					},
				],
			},
			{
				chatId: 3,
				messages: [
					{ sended: true, text: "Привет! Как дела?", time: "15:55" },
					{
						sended: false,
						text: "Все в порядке, а ты?",
						time: "15:56",
					},
				],
			},
			{
				chatId: 4,
				messages: [
					{
						sended: true,
						text: "Серёг, это Петя. Где бабло моё?",
						time: "15:57",
					},
					{
						sended: false,
						text: "Я на работе, скоро буду.",
						time: "15:58",
					},
				],
			},
			{
				chatId: 5,
				messages: [
					{
						sended: true,
						text: "Петька, ты с нами сегодня?",
						time: "15:59",
					},
					{ sended: false, text: "Я с вами!", time: "16:00" },
				],
			},
			{
				chatId: 6,
				messages: [
					{ sended: true, text: "Просто прикол!", time: "16:01" },
					{ sended: false, text: "Вижу, еду уже!", time: "16:02" },
				],
			},
			{
				chatId: 7,
				messages: [
					{
						sended: true,
						text: "Айрат, во сколько приедешь?",
						time: "16:03",
					},
					{ sended: false, text: "Уже еду!", time: "16:04" },
				],
			},
			{
				chatId: 8,
				messages: [
					{
						sended: true,
						text: "Кеша, задолбал тупить",
						time: "16:05",
					},
					{
						sended: false,
						text: "Извини, я на связи!",
						time: "16:06",
					},
				],
			},
		],
	},
};

export const PageContext = createContext({
	data: pages,
});
