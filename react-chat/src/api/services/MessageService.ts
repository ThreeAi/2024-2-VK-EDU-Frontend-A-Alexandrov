/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Message } from '../models/Message';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MessageService {
    /**
     * @param id A UUID string identifying this message.
     * @returns Message
     * @throws ApiError
     */
    public static messageRead(
        id: string,
    ): CancelablePromise<Message> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/message/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id A UUID string identifying this message.
     * @param data
     * @returns Message
     * @throws ApiError
     */
    public static messageUpdate(
        id: string,
        data: Message,
    ): CancelablePromise<Message> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/message/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }
    /**
     * @param id A UUID string identifying this message.
     * @param data
     * @returns Message
     * @throws ApiError
     */
    public static messagePartialUpdate(
        id: string,
        data: Message,
    ): CancelablePromise<Message> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/message/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }
    /**
     * @param id A UUID string identifying this message.
     * @returns void
     * @throws ApiError
     */
    public static messageDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/message/{id}/',
            path: {
                'id': id,
            },
        });
    }
}
