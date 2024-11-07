/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { MessageFile } from './MessageFile';
export type MessageCreate = {
    readonly id?: string;
    text?: string | null;
    readonly voice?: string | null;
    chat: string;
    files?: Array<MessageFile>;
    readonly updated_at?: string | null;
    readonly created_at?: string;
};

