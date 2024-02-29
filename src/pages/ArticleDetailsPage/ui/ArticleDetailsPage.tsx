import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';

import { AddCommentForm } from 'features/addCommentForm';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import cls from './ArticleDetailsPage.module.scss';

import { articleDetailsCommentsReducer, getArticleComments } from '../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsError, getArticleCommentsIsLoading } from '../model/selectors/comments';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';

const reducers: ReducerList = {
	articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: React.FC = () => {
	const { t } = useTranslation('article-details');
	const { id } = useParams<{ id: string }>();

	const comments = useSelector(getArticleComments.selectAll);
	const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
	const commentsErrors = useSelector(getArticleCommentsError);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(fetchCommentsByArticleId(id));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch]);

	const onSendComment = useCallback(
		(text: string) => {
			dispatch(addCommentForArticle(text));
		},
		[dispatch]
	);

	const onBacktoList = useCallback(() => {
		navigate(RoutePath.articles);
	}, [navigate]);

	if (!id) {
		return <div className={classNames(cls.ArticleDetailsPage, {}, [])}>{t('Статья не найдена')}</div>;
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={classNames(cls.ArticleDetailsPage, {}, [])}>
				<Button theme={ButtonTheme.OUTLINE} onClick={onBacktoList}>
					{t('Назад к списку')}
				</Button>
				<ArticleDetails id={id} />
				<Text title={t('Комментарии')} />
				<AddCommentForm onSendComment={onSendComment} />
				<CommentList isLoading={commentsIsLoading} comments={comments} />
			</div>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailsPage);
