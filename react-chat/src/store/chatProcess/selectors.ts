import { Chat, Message } from "../../api";
import { State } from "../../types/state";
import { NameSpace } from "../../utils/const";

export const getChat = (state: State): Chat => state[NameSpace.Chat].chat;
export const getIsChatDataLoading = (state: State): boolean => state[NameSpace.Chat].isChatDataLoading;
export const getMessages = (state: State): Message[] => state[NameSpace.Chat].messages;
export const getIsMessagesDataLoading = (state: State): boolean => state[NameSpace.Chat].isMessagesDataLoading;