import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile, ProfileSchema } from '../types/profile';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';

const initialState: ProfileSchema = {
	data: undefined,
	isLoading: false,
	readonly: false,
	error: '',
};

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		// setAuthData: (state, action: PayloadAction<Profile>) => {
		// 	state.authData = action.payload;
		// },
	},
	extraReducers: (builder) => {
		builder.addCase(fetchProfileData.pending, (state) => {
			state.error = '';
			state.isLoading = true;
		});
		builder.addCase(
			fetchProfileData.fulfilled,
			(state, action: PayloadAction<Profile>) => {
				state.isLoading = false;
				state.data = action.payload;
			}
		);
		builder.addCase(fetchProfileData.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error;
		});
	},
});

export const { actions: profileAction } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
