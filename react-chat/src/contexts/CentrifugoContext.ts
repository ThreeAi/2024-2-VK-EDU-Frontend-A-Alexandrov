import { Centrifuge, Subscription } from 'centrifuge';
import { createContext, Dispatch, SetStateAction } from 'react';
import { Message } from '../api';

export const CentrifugeContext = createContext<{
    centrifuge: Centrifuge | null;
    subscription: Subscription | null;
    newMessage: Message | null;
    setNewMessage: Dispatch<SetStateAction<Message | null>> | null;
      }>({
        centrifuge: null,
        subscription: null,
        newMessage: null,
        setNewMessage: null,
      });
