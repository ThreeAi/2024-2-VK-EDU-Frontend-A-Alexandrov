/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * @param id A UUID string identifying this user.
     * @returns User
     * @throws ApiError
     */
    public static userRead(
        id: string,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id A UUID string identifying this user.
     * @param data
     * @returns User
     * @throws ApiError
     */
    public static userUpdate(
        id: string,
        data: User,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/user/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }
    /**
     * @param id A UUID string identifying this user.
     * @param data
     * @returns User
     * @throws ApiError
     */
    public static userPartialUpdate(
        id: string,
        data: User,
    ): CancelablePromise<User> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/user/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }
    /**
     * @param id A UUID string identifying this user.
     * @returns void
     * @throws ApiError
     */
    public static userDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/user/{id}/',
            path: {
                'id': id,
            },
        });
    }
}
