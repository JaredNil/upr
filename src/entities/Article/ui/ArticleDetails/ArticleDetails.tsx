import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors/articleDetailsSelectors';
import { memo, useEffect } from 'react';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';

interface ArticleDetailsProps {
	className?: string;
	id: string;
}

const reducers: ReducerList = {
	articleDetails: articleDetailsReducer,
};

export const ArticleDetails: React.FC<ArticleDetailsProps> = memo((props: ArticleDetailsProps) => {
	const { className, id } = props;
	const { t } = useTranslation('article');
	const dispatch = useAppDispatch();

	const isLoading = useSelector(getArticleDetailsIsLoading);
	const data = useSelector(getArticleDetailsData);
	const error = useSelector(getArticleDetailsError);

	useEffect(() => {
		dispatch(fetchArticleById(id));
	}, [dispatch]);

	let content;

	if (isLoading) {
		content = <div>Loading...</div>;
	} else if (error) {
		content = <div>error</div>;
	} else {
		content = <div className={classNames(cls.ArticleDetails, {}, [className])}>ArticleDetailsProps</div>;
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
			{content}
		</DynamicModuleLoader>
	);
});
