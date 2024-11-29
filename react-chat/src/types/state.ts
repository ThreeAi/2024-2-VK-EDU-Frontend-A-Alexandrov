import { Chat, Message, User } from '../api';
import { store } from '../store';
import { AuthorizationStatus } from '../utils/const';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
    authorizationStatus: AuthorizationStatus;
    user: User;
    isUserDataLoading: boolean;
    error: string | null;
};

export type ChatsProcess = {
    chats: Chat[];
    isChatsDataLoading: boolean;
}

export type ChatProcess = {
    chat: Chat;
    isChatDataLoading: boolean;
    messages: Message[];
    isMessagesDataLoading: boolean;
}