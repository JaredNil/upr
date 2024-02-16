import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { Profile } from '../../types/profile';
import { getProfileData } from '../../selectors/getProfileData/getProfileData';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>('profile/updateProfileData', async (_, thunkAPI) => {
	const { rejectWithValue, extra, getState } = thunkAPI;

	const formData = getProfileData(getState());

	try {
		const res = await extra.api.put<Profile>('/profile', formData);

		return res.data;
	} catch (error) {
		return rejectWithValue('error');
	}
});
