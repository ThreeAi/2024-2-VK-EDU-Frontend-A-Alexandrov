import { createContext } from 'react';
import { MessageInput } from '../types/MessageInput';

export const MessageInputContext = createContext<{
  messageInput: MessageInput;
  setMessageInput: (value: MessageInput) => void;
    }>({
      messageInput: {text: '', files: []},
      setMessageInput: () => {return null}
    });
