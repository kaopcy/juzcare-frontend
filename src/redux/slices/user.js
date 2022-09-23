/* eslint-disable no-undef */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    user: null,
    error: null,
    isLoading: false,
    isAuthenticated: false,
    isInitialized: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLoading: (state, action) => {
            state.isLoading = true;
            state.error = null;
        },
        userLoadSuccess: (state, { payload }) => {
            state.isLoading = false;
            state.user = payload.user;
            state.isAuthenticated = true;
            state.isInitialized = true;
        },
        initialUser: (state, action) => {
            const { user, isAuthenticated } = action.payload;
            state.user = user;
            state.error = false;
            state.isInitialized = true;
            state.isAuthenticated = isAuthenticated;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(initialUser.pending, (state, action) => {
            state.error = null;
            state.isAuthenticated = false;
            state.isLoading = true;
            state.isInitialized = false;
        });
        builder.addCase(initialUser.fulfilled, (state, action) => {
            state.error = null;
            state.isAuthenticated = true;
            state.isLoading = false;
            state.isInitialized = true;
            state.user = action.payload.user;
        });
        builder.addCase(initialUser.rejected, (state, action) => {
            if (state.isLoading) return;
            state.error = action.error;
            state.isAuthenticated = false;
            state.isLoading = false;
            state.isInitialized = false;
            state.user = null;
        });
    },
});

export const initialUser = createAsyncThunk('user/initial', async () => {
    const data = await new Promise((resolve) => {
        setTimeout(() => {
            resolve({ firstName: 'piyachai', lastName: 'kaewchum', email: 'kao@hotmail.com' });
        }, 1000);
    });
    console.log(data);
    return { user: data };
});
export const { actions } = userSlice;

export default userSlice.reducer;
