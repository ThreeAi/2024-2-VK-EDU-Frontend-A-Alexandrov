import { Message } from '../api';

export type MessageInput = Pick<Message, 'text' | 'voice' | 'files'>;