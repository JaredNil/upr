import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { userAction } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';
import { Profile } from '../../types/profile';

interface fetchProfileDataProps {
	username: string;
	password: string;
}

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
	'profile/fetchProfileData',
	async (_, thunkAPI) => {
		const { rejectWithValue, extra } = thunkAPI;
		try {
			const res = await extra.api.get<Profile>('/profile');

			return res.data;
		} catch (error) {
			return rejectWithValue('error');
		}
	}
);
