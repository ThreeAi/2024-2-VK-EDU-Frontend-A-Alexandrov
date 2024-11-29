import { createSlice } from '@reduxjs/toolkit';
import { ChatsProcess } from '../../types/state';
import { NameSpace } from '../../utils/const';
import { fetchChatsAction } from './chatsActions';

const initialState: ChatsProcess = {
  chats: [],
  isChatsDataLoading: false
}

export const chatsProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder
      .addCase(fetchChatsAction.pending, (state) => {
        state.isChatsDataLoading = true;
      })
      .addCase(fetchChatsAction.fulfilled, (state, action) => {
        state.chats = action.payload;
        state.isChatsDataLoading = false;
      })
  }
})