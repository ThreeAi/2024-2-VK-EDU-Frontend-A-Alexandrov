import { Centrifuge, Subscription } from 'centrifuge';
import { createContext } from 'react';
import { Message } from '../api';

export const CentrifugeContext = createContext<{
    centrifuge: Centrifuge | null;
    subscription: Subscription | null;
    newMessage: Message | null;
      }>({
        centrifuge: null,
        subscription: null,
        newMessage: null
      });
