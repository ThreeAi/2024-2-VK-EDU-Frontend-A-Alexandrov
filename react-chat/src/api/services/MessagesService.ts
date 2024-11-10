/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Message } from '../models/Message';
import type { MessageCreate } from '../models/MessageCreate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MessagesService {
    /**
     * @param search A search term.
     * @param page A page number within the paginated result set.
     * @param pageSize Number of results to return per page.
     * @returns any
     * @throws ApiError
     */
    public static messagesList(
        id: string,
        search?: string,
        page?: number,
        pageSize?: number,
    ): CancelablePromise<{
        count: number;
        next?: string | null;
        previous?: string | null;
        results: Array<Message>;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/messages/',
            query: {
                'search': search,
                'page': page,
                'page_size': pageSize,
                'chat': id,
            },
        });
    }
    /**
     * @param data
     * @returns MessageCreate
     * @throws ApiError
     */
    public static messagesCreate(
        data: MessageCreate,
    ): CancelablePromise<MessageCreate> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/messages/',
            body: data,
        });
    }
}
