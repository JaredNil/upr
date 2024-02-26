// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { ThunkConfig } from 'app/providers/StoreProvider';

// import { Comment } from 'entities/Comment';
// import { getUserAuthData } from 'entities/User';
// import { getArticleDetailsData } from 'entities/Article';
// import { getAddCommentFormText } from '../selectors/addCommentFormSelectors';
// import { addCommentFormActions } from '../slices/addCommentFormSlice';

// export const updateProfileData = createAsyncThunk<Comment, void, ThunkConfig<string>>('addCommentForm/sendComment', async (authData, thunkAPI) => {
// 	const { rejectWithValue, dispatch, extra, getState } = thunkAPI;

// 	const userData = getUserAuthData(getState());
// 	const text = getAddCommentFormText(getState());
// 	const article = getArticleDetailsData(getState());

// 	if (!userData || !text || !article) {
// 		return rejectWithValue('no data');
// 	}

// 	try {
// 		const res = await extra.api.post<Comment>('/comments', {
// 			articleId: article.id,
// 			userId: userData.id,
// 			text,
// 		});

// 		if (!res.data) {
// 			throw new Error();
// 		}

// 		dispatch(addCommentFormActions.setText(''));

// 		return res.data;
// 	} catch (error) {
// 		console.log(error);
// 		return rejectWithValue('error');
// 	}
// });
