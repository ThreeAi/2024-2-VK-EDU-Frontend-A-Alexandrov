import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService, OpenAPI, TokenObtainPair, User, UserService } from "../../api";
import { parseJwt } from "../../utils/functions";


export const loginAction = createAsyncThunk<
    void,
    TokenObtainPair
>('user/login', async (tokenObtainPair) => {
    const pair = await AuthService.authCreate(tokenObtainPair);
    localStorage.setItem('accessToken', pair.access);
    OpenAPI.TOKEN = pair.access;
    localStorage.setItem('refreshToken', pair.refresh);
    localStorage.setItem('userId', parseJwt(pair.access).user_id)
})

export const refreshAction = createAsyncThunk<
    void,
    string
>('user/refresh', async (token) => {
    const pair = await AuthService.authRefreshCreate({ refresh: token });
    localStorage.setItem('accessToken', pair.access!);
    localStorage.setItem('refreshToken', pair.refresh);
    localStorage.setItem('userId', parseJwt(pair.access!).user_id)
})

export const fetchUserAction = createAsyncThunk<
    User,
    string
>('user/fetchData', async (id) => {
    const user = UserService.userRead(id);
    return user;
})

export const updateUserAction = createAction<User>('user/updateUser');