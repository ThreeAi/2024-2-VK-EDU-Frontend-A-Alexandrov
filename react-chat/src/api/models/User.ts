/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
export type User = {
    readonly id?: string;
    /**
     * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     */
    username: string;
    first_name: string;
    last_name: string;
    bio?: string | null;
    readonly avatar?: string | null;
    last_online: string;
    is_online: boolean;
};

