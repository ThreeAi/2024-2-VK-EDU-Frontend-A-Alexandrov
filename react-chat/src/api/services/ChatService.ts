/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Chat } from '../models/Chat';
import type { GroupChatPatch } from '../models/GroupChatPatch';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ChatService {
    /**
     * @param id A UUID string identifying this chat.
     * @returns Chat
     * @throws ApiError
     */
    public static chatRead(
        id: string,
    ): CancelablePromise<Chat> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chat/{id}/',
            path: {
                'id': id,
            },
        });
    }
    /**
     * @param id A UUID string identifying this chat.
     * @param data
     * @returns GroupChatPatch
     * @throws ApiError
     */
    public static chatUpdate(
        id: string,
        data: GroupChatPatch,
    ): CancelablePromise<GroupChatPatch> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/chat/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }
    /**
     * @param id A UUID string identifying this chat.
     * @param data
     * @returns GroupChatPatch
     * @throws ApiError
     */
    public static chatPartialUpdate(
        id: string,
        data: GroupChatPatch,
    ): CancelablePromise<GroupChatPatch> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/chat/{id}/',
            path: {
                'id': id,
            },
            body: data,
        });
    }
    /**
     * @param id A UUID string identifying this chat.
     * @returns void
     * @throws ApiError
     */
    public static chatDelete(
        id: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/chat/{id}/',
            path: {
                'id': id,
            },
        });
    }
}
