import { createSlice } from '@reduxjs/toolkit';
import { ChatProcess } from '../../types/state';
import { NameSpace } from '../../utils/const';
import { addNewMessageAction, fetchMessagesAction, fethcChatAction } from './chatActions';
import { notifyMe } from '../../utils/functions';

const initialState: ChatProcess = {
  chat: {
    id: '',
    members: [],
    creator: {
      id: undefined,
      username: '',
      first_name: '',
      last_name: '',
      bio: undefined,
      avatar: undefined,
      last_online: '',
      is_online: false
    },
    is_private: false
  },
  isChatDataLoading: false,
  messages: [],
  isMessagesDataLoading: false,
}

export const chatProcess = createSlice({
  name: NameSpace.Chat,
  initialState: initialState,
  reducers: {},
  extraReducers (builder) {
    builder
      .addCase(fethcChatAction.pending, (state) => {
        state.isChatDataLoading = true;
      })
      .addCase(fethcChatAction.fulfilled, (state, action) => {
        state.chat = action.payload;
        state.isChatDataLoading = false;
      })
      .addCase(fetchMessagesAction.pending, (state) => {
        state.isMessagesDataLoading = true;
      })
      .addCase(fetchMessagesAction.fulfilled, (state, action) => {
        state.messages = action.payload.reverse();
        state.isMessagesDataLoading = false;
      })
      .addCase(addNewMessageAction, (state, action) => {
        const newMessage = action.payload;
        const chatId = state.chat.id;
        if (newMessage.chat == chatId && !state.messages.find((mess) => mess.id === newMessage.id)) {
          state.messages = [...state.messages, newMessage];
        }
        else if (newMessage && newMessage.chat != chatId) {
          notifyMe({title: newMessage?.sender.first_name || 'user', message: newMessage?.text || 'files'})
        }
      })
  }
})