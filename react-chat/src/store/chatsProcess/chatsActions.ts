import { createAsyncThunk } from '@reduxjs/toolkit';
import { Chat, ChatsService } from '../../api';

export const fetchChatsAction = createAsyncThunk<
    Chat[],
    undefined
>('chats/fetchData', async () => {
  const chats = await ChatsService.chatsList();
  return chats.results;
})

