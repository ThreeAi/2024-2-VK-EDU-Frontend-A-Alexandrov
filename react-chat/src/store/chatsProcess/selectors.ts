import { Chat } from '../../api';
import { State } from '../../types/state';
import { NameSpace } from '../../utils/const';

export const getChats = (state: State): Chat[] => state[NameSpace.Chats].chats;
export const getIsChatsDataLoading = (state: State): boolean => state[NameSpace.Chats].isChatsDataLoading;