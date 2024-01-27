import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { User, userAction } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
	username: string;
	password: string;
}

export const loginByUsername = createAsyncThunk<
	User,
	LoginByUsernameProps,
	{ serializedErrorType: string }
>('login/loginByUsername', async ({ username, password }, thunkAPI) => {
	try {
		const res = await axios.post('http://localhost:8000/login', {
			username,
			password,
		});

		if (!res.data) {
			throw new Error();
		}

		localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data));
		thunkAPI.dispatch(userAction.setAuthData(res.data));

		return res.data;
	} catch (error) {
		console.log(error);
		return thunkAPI.rejectWithValue('error');
	}
});
