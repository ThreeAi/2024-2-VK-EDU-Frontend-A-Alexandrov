import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Chat, ChatService, Message, MessagesService } from "../../api";

export const fethcChatAction = createAsyncThunk<
    Chat,
    string
>('chat/chatInfo', async (id) => {
    const chat = await ChatService.chatRead(id);
    return chat;
})

export const fetchMessagesAction = createAsyncThunk<
    Message[],
    string
>('chat/messages', async (id) => {
    const messages = await MessagesService.messagesList(id);
    return messages.results;
})

export const addNewMessageAction = createAction<Message>('chat/addNewMessage');