import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { Profile, ValidateProfileError } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfile } from '../validateProfile/validateProfile';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError>>(
	'profile/updateProfileData',
	async (_, thunkAPI) => {
		const { rejectWithValue, extra, getState } = thunkAPI;

		const formData = getProfileForm(getState());

		const errors = validateProfile(formData || undefined);

		if (errors.length) {
			return rejectWithValue(errors);
		}

		try {
			const res = await extra.api.put<Profile>(`/profile/${formData?.id}`, formData);

			return res.data;
		} catch (error) {
			return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
		}
	}
);
