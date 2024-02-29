import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { Article, ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { useSelector } from 'react-redux';
import cls from './ArticlesPage.module.scss';

import { articlePageActions, articlePageReducer, getArticles } from '../model/slices/articlePageSlice';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../model/selectors/articlesPageSelectors/articlesPageSelectors';

const reducers: ReducerList = {
	articlesPage: articlePageReducer,
};

const ArticlesPage: React.FC = () => {
	const { t } = useTranslation('article');
	const dispatch = useAppDispatch();

	const articles = useSelector(getArticles.selectAll) as Article[];

	const articlesIsLoading = useSelector(getArticlesPageIsLoading);
	const articlesError = useSelector(getArticlesPageError);
	const articlesView = useSelector(getArticlesPageView);

	useEffect(() => {
		dispatch(fetchArticlesList());
	}, [dispatch]);

	useEffect(() => {
		dispatch(articlePageActions.initState());
	}, [dispatch]);

	const onChangeView = useCallback(
		(view: ArticleView) => {
			dispatch(articlePageActions.setView(view));
		},
		[dispatch]
	);

	return (
		<DynamicModuleLoader reducers={reducers}>
			<div className={classNames(cls.ArticlesPage)}>
				<ArticleViewSelector view={articlesView} onViewClick={onChangeView} />
				<ArticleList isLoading={articlesIsLoading} view={articlesView} articles={articles} />
			</div>
		</DynamicModuleLoader>
	);
};

export default memo(ArticlesPage);
