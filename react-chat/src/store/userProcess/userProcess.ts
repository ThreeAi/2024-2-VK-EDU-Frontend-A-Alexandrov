import { createSlice } from "@reduxjs/toolkit";
import { UserProcess } from "../../types/state";
import { AuthorizationStatus, NameSpace } from "../../utils/const";
import { fetchUserAction, loginAction, refreshAction, updateUserAction } from "./userActions";

const initialState: UserProcess = {
    user: {
        username: "",
        first_name: "",
        last_name: "",
        last_online: "",
        is_online: false
    },
    isUserDataLoading: false,
    authorizationStatus: AuthorizationStatus.Unknown,
    error: null,
}

export const userProcess = createSlice({
    name: NameSpace.User,
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(loginAction.fulfilled, (state) => {
            state.authorizationStatus = AuthorizationStatus.Auth;
        })
        .addCase(loginAction.rejected, (state, action) => {
            state.authorizationStatus = AuthorizationStatus.NoAuth;
            throw action.error.message;
        })
        .addCase(refreshAction.fulfilled, (state) => {
            state.authorizationStatus = AuthorizationStatus.Auth;
        })
        .addCase(refreshAction.rejected, (state) => {
            state.authorizationStatus = AuthorizationStatus.NoAuth;
        })
        .addCase(fetchUserAction.pending, (state) => {
            state.isUserDataLoading = true;
        })
        .addCase(fetchUserAction.fulfilled, (state, action) => {
            state.user = action.payload; 
            state.isUserDataLoading = false;
        })
        .addCase(updateUserAction, (state, action) => {
            state.user = action.payload; 
        })
    }
})

