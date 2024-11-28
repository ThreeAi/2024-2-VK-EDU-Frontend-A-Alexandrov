import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../utils/const';
import { userProcess } from './userProcess/userProcess';
import { chatsProcess } from './chatsProcess/chatsProcess';
import { chatProcess } from './chatProcess/chatProcess';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Chats]: chatsProcess.reducer,
  [NameSpace.Chat]: chatProcess.reducer,
})