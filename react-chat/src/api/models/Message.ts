/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MessageFile } from './MessageFile';
import type { User } from './User';
export type Message = {
    readonly id?: string;
    text?: string | null;
    readonly voice?: string | null;
    sender: User;
    readonly chat?: string;
    files: Array<MessageFile>;
    readonly updated_at?: string | null;
    readonly created_at?: string;
};

