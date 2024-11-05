/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Chat } from '../models/Chat';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ChatsService {
    /**
     * @param search A search term.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @returns any
     * @throws ApiError
     */
    public static chatsList(
        search?: string,
        page?: number,
        pageSize?: number,
    ): CancelablePromise<{
        count: number;
        next?: string | null;
        previous?: string | null;
        results: Array<Chat>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chats/',
            query: {
                'search': search,
                'page': page,
                'page_size': pageSize,
            },
        });
    }
    /**
     * @param data
     * @returns Chat
     * @throws ApiError
     */
    public static chatsCreate(
        data: Chat,
    ): CancelablePromise<Chat> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/chats/',
            body: data,
        });
    }
}
