/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
export type MessageCreate = {
    readonly id?: string;
    text?: string | null;
    readonly voice?: File | null;
    chat: string;
    files?: Array<File>;
    readonly updated_at?: string | null;
    readonly created_at?: string;
};

