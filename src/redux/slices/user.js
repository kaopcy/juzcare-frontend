/* eslint-disable no-undef */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import errorMessageUtils from '@/utils/errorMessageUtils'
import { dispatch } from '../store';

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
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(initialUserDispatch.pending, (state, action) => {
            state.error = null;
            state.isAuthenticated = false;
            state.isLoading = true;
            state.isInitialized = false;
        });
        builder.addCase(initialUserDispatch.fulfilled, (state, action) => {
            state.error = null;
            state.isAuthenticated = true;
            state.isLoading = false;
            state.isInitialized = true;
            state.user = action.payload.user;
        });
        builder.addCase(initialUserDispatch.rejected, (state, action) => {
            state.error = errorMessageUtils('INITIAL' , action.error);
            state.isAuthenticated = false;
            state.isLoading = false;
            state.isInitialized = false;
            state.user = null;
        });
    },
});

const initialUserDispatch = createAsyncThunk('user/initial', async () => {
    const data = await new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve({ firstName: 'piyachai', lastName: 'kaewchum', email: 'kao@hotmail.com' });
            reject(new Error('User not exists'));
        }, 1000);
    });
    console.log(data);
    return { user: data };
});

export const initialUser = async () => {
    await dispatch(initialUserDispatch()).unwrap();
};

export const { actions } = userSlice;
export default userSlice.reducer;
