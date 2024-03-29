import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { User, userAction } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
	username: string;
	password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
	'login/loginByUsername',
	async ({ username, password }, thunkAPI) => {
		const { rejectWithValue, extra, dispatch } = thunkAPI;
		try {
			const res = await extra.api.post<User>('/login', {
				username,
				password,
			});

			if (!res.data) {
				throw new Error();
			}

			localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data));
			dispatch(userAction.setAuthData(res.data));

			return res.data;
		} catch (error) {
			return rejectWithValue('error');
		}
	}
);
