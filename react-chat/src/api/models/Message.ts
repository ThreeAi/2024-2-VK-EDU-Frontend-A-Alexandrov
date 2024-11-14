/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { User } from './User';
export type Message = {
    readonly id?: string;
    text?: string | null;
    readonly voice?: File;
    sender: User;
    readonly chat?: string;
    files: Array<File>;
    readonly updated_at?: string | null;
    readonly created_at?: string;
};

