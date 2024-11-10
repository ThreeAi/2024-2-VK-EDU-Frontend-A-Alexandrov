/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TokenObtainPair } from '../models/TokenObtainPair';
import type { TokenRefresh } from '../models/TokenRefresh';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * Takes a set of user credentials and returns an access and refresh JSON web
     * token pair to prove the authentication of those credentials.
     * @param data
     * @returns TokenObtainPair
     * @throws ApiError
     */
    public static authCreate(
        data: TokenObtainPair,
    ): CancelablePromise<{access: string, refresh: string}> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/',
            body: data,
        });
    }
    /**
     * Takes a refresh type JSON web token and returns an access type JSON web
     * token if the refresh token is valid.
     * @param data
     * @returns TokenRefresh
     * @throws ApiError
     */
    public static authRefreshCreate(
        data: TokenRefresh,
    ): CancelablePromise<TokenRefresh> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/refresh/',
            body: data,
        });
    }
}
