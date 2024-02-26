import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>('profile/fetchProfileData', async (profileId, thunkAPI) => {
	const { rejectWithValue, extra } = thunkAPI;
	try {
		const res = await extra.api.get<Profile>(`/profile/${profileId}`);

		return res.data;
	} catch (error) {
		return rejectWithValue('error');
	}
});
