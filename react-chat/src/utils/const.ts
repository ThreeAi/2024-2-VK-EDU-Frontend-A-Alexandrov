export enum AppRoute {
    Chats = '/',
    Login = '/login',
    Chat = '/chat/:chatId',
    EditProfile = '/profile/edit',
}

export type Message = {
    sended: boolean,
    text: string,
    time: string,
}

export type ChatMessages = {
    id: number;
    messages: Message[];
}

export type Chat = {
    id: number;
	new: boolean;
	avatar: string;
	name: string;
	message: string;
	time: string;
	unread: number | null;
	tag: boolean;
	read: boolean;
};