/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from './User';
export type Chat = {
    readonly id?: string;
    readonly title?: string;
    members: Array<User>;
    creator: User;
    readonly avatar?: string;
    readonly created_at?: string;
    readonly updated_at?: string;
    is_private: boolean;
    readonly last_message?: string;
};

