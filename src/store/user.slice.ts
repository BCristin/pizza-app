import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { PREFIX } from '../helpers/API';
import { LoginResponse } from '../interfaces/auth.interface';
import { loadState } from './storage';
export const JWT_PERSISTENT_STATE = 'userData';
export interface UserPersistenState {
	jwt: string | null;
}
export interface UserState {
	jwt: string | null;
	loginErrorMessage?: string;
}
const initialState: UserState = {
	jwt: loadState<UserPersistenState>(JWT_PERSISTENT_STATE)?.jwt ?? null,
	loginErrorMessage: undefined,
};
export const login = createAsyncThunk(
	'user/login',
	async ({ email, password }: { email: string; password: string }) => {
		try {
			const { data } = await axios.post<LoginResponse>(`${PREFIX}/auth/login`, {
				email,
				password,
			});
			return data;
		} catch (error) {
			if (error instanceof AxiosError) {
				throw new Error(error.response?.data.message);
			}
		}
	},
);
export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		// addJwt: (state, action: PayloadAction<string>) => {
		// 	state.jwt = action.payload;
		// },
		logout: (state) => {
			state.jwt = null;
		},
		clearLoginError: (state) => {
			state.loginErrorMessage = undefined;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, action) => {
			if (!action.payload) return;
			state.jwt = action.payload.access_token;
		});
		builder.addCase(login.rejected, (state, action) => {
			state.loginErrorMessage = action.error.message;
		});
	},
});

export default userSlice.reducer;
export const userActions = userSlice.actions;
