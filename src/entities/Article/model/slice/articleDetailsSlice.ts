import { createSlice } from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById';

const initialState: ArticleDetailsSchema = {
	isLoading: false,
	data: undefined,
	error: undefined,
};

export const articleDetailsSlice = createSlice({
	name: 'articleDetails',
	initialState,
	reducers: {
		// setAuthData: (state, action: PayloadAction<User>) => {
		// 	state.authData = action.payload;
		// },
		// initAuthData: (state) => {
		// 	const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
		// 	if (user) {
		// 		state.authData = JSON.parse(user);
		// 	}
		// 	state._inited = true;
		// },
		// logout: (state) => {
		// 	state.authData = undefined;
		// 	localStorage.removeItem(USER_LOCALSTORAGE_KEY);
		// },
	},
	extraReducers: (builder) => {
		builder.addCase(fetchArticleById.pending, (state) => {
			state.error = undefined;
			state.isLoading = true;
		});
		builder.addCase(fetchArticleById.fulfilled, (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		});
		builder.addCase(fetchArticleById.rejected, (state, action) => {
			state.isLoading = false;
			state.error = action.error;
		});
	},
});

export const { actions: articleDetailsAction } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
