import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>('articlePage/fetchArticlesList', async (_, thunkAPI) => {
	const { rejectWithValue, extra } = thunkAPI;
	try {
		const res = await extra.api.get<Article[]>(`/articles`, {
			params: {
				_expand: 'user',
			},
		});

		if (!res.data) {
			throw new Error();
		}

		return res.data;
	} catch (error) {
		return rejectWithValue('error');
	}
});
