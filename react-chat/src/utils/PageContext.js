import { createContext } from 'react';
import avatar from '../assets/img/avatar.jpg';

export const pages = {
  listChats: { name: 'List of Chats', data: {
    chats: [
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
			}
    ]
  } },
  chat: { name: 'Chat', data: {
    messages: [
      {
        sended: true,
        text: "Привет! Как дела?",
        time: "10:30",
      },
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
      }
    ]
  } },
};

export const PageContext = createContext({
  currentPage: pages.listChats,
  setPage: () => {},    
});
