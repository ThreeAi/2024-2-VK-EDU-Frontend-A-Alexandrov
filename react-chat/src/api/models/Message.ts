/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { User } from './User';
export type Message = {
    readonly id?: string;
    text?: string | null;
    readonly voice?: string | Blob;
    sender: User;
    readonly chat?: string;
    files: Array<File | {item: string}>;
    readonly updated_at?: string | null;
    readonly created_at?: string;
};

