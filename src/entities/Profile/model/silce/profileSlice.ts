import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { Profile, ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
	data: null,
	isLoading: false,
	readonly: false,
	error: null,
};

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		// setAuthData: (state, action: PayloadAction<Profile>) => {
		// 	state.authData = action.payload;
		// },
	},
});

export const { actions: profileAction } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
