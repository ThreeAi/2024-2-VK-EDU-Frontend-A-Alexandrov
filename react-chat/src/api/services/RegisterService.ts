/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserCreate } from '../models/UserCreate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RegisterService {
    /**
     * @param data
     * @returns UserCreate
     * @throws ApiError
     */
    public static registerCreate(
        data: UserCreate,
    ): CancelablePromise<UserCreate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/register/',
            body: data,
        });
    }
}
