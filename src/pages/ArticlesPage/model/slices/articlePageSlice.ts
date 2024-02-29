import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';

import { Article, ArticleView } from 'entities/Article';

import { ARTICLE_VIEW_LOCALSTORAGE } from 'shared/const/localstorage';
import { ArticlePageSchema } from '../types/articlePageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

const articlesAdapter = createEntityAdapter({
	selectId: (article: { id: string }) => article.id,
});

// export const getArticles = articlesAdapter.getSelectors<StateSchema>((state) => state?.articlesPage || articlesAdapter.getInitialState());
export const getArticles = articlesAdapter.getSelectors<StateSchema>((state) => state.articlesPage || articlesAdapter.getInitialState());

const articlePageSlice = createSlice({
	name: 'articlePageSlice',
	initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
		isLoading: false,
		error: undefined,
		view: ArticleView.BIG,
		ids: [],
		entities: {},
	}),
	reducers: {
		setView: (state, action: PayloadAction<ArticleView>) => {
			state.view = action.payload;
			localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE, action.payload);
		},
		initState: (state) => {
			state.view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE) as ArticleView;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchArticlesList.pending, (state) => {
			state.error = undefined;
			state.isLoading = true;
		})
			.addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
				state.isLoading = false;
				articlesAdapter.setAll(state, action.payload);
			})
			.addCase(fetchArticlesList.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload as string;
			});
	},
});

export const { reducer: articlePageReducer, actions: articlePageActions } = articlePageSlice;
