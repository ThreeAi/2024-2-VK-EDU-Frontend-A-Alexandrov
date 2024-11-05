/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CentrifugoService {
    /**
     * @returns any
     * @throws ApiError
     */
    public static centrifugoConnectCreate(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/centrifugo/connect/',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static centrifugoSubscribeCreate(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/centrifugo/subscribe/',
        });
    }
}
