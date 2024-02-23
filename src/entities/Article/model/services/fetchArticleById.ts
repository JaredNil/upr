import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../types/article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
	'articleDetails/fetchArticleById',
	async (articleId, thunkAPI) => {
		const { rejectWithValue, extra } = thunkAPI;
		try {
			const res = await extra.api.get<Article>(`/articles/${articleId}`);

			return res.data;
		} catch (error) {
			return rejectWithValue('error');
		}
	}
);
