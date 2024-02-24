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
import Text, { TextAlign } from 'shared/ui/Text/Text';
import Skeleton from 'shared/ui/Skeleton/Skeleton';

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

	// const isLoading = useSelector(getArticleDetailsIsLoading);
	const isLoading = true;
	const data = useSelector(getArticleDetailsData);
	const error = useSelector(getArticleDetailsError);

	useEffect(() => {
		dispatch(fetchArticleById(id));
	}, [dispatch]);

	let content;

	if (isLoading) {
		content = (
			<div>
				<Skeleton width={200} height={200} border={'50%'} />
				<Skeleton width={300} height={32} border={'50%'} />
				<Skeleton width={600} height={24} border={'50%'} />
				<Skeleton width={'100%'} height={200} />
				<Skeleton width={'100%'} height={200} />
			</div>
		);
	} else if (error) {
		content = <Text align={TextAlign.CENTER} title={'Произошла ошибка при загрузке статьи.'} />;
	} else {
		content = <div className={classNames(cls.ArticleDetails, {}, [className])}>ArticleDetailsProps</div>;
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
			{content}
		</DynamicModuleLoader>
	);
});
