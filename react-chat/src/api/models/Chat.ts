/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { User } from './User';
export type Chat = {
    readonly id: string;
    title?: string;
    members: Array<User>;
    creator: User;
    readonly avatar?: string;
    readonly created_at?: string;
    readonly updated_at?: string;
    is_private: boolean;
    readonly last_message?: {text: string}; 
};

