import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useCallback, useEffect } from 'react';
import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { Text, TextAlign, TextSize } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';

import EyeIcon from 'shared/assets/eye-20-20.svg';
import CalendarIcon from 'shared/assets/calendar-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors/articleDetailsSelectors';
import cls from './ArticleDetails.module.scss';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

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
	const article = useSelector(getArticleDetailsData);
	const error = useSelector(getArticleDetailsError);

	const renderBlock = useCallback((block: ArticleBlock) => {
		switch (block.type) {
			case ArticleBlockType.CODE:
				return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />;
			case ArticleBlockType.IMAGE:
				return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block} />;
			case ArticleBlockType.TEXT:
				return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />;
			default:
				return null;
		}
	}, []);

	useEffect(() => {
		dispatch(fetchArticleById(id));
	}, [dispatch, id]);

	let content;

	if (isLoading) {
		content = (
			<>
				<Skeleton className={cls.avatar} width={200} height={200} border="50%" />
				<Skeleton className={cls.title} width={300} height={32} border="50%" />
				<Skeleton className={cls.skeleton} width={600} height={24} border="50%" />
				<Skeleton className={cls.skeleton} width="100%" height={200} />
				<Skeleton className={cls.skeleton} width="100%" height={200} />
			</>
		);
	} else if (error) {
		content = <Text align={TextAlign.CENTER} title="Произошла ошибка при загрузке статьи." />;
	} else {
		content = (
			<>
				<div className={cls.avatarWrapper}>
					<Avatar src={article?.img} size={200} className={cls.avatar} />
				</div>
				<Text className={cls.title} size={TextSize.L} title={article?.title} text={article?.subtitle} />
				<div className={cls.articleInfo}>
					<Icon Svg={EyeIcon} className={cls.icon} />
					<Text text={String(article?.views)} />
				</div>
				<div className={cls.articleInfo}>
					<Icon Svg={CalendarIcon} className={cls.icon} />
					<Text text={article?.createdAt} />
				</div>
				{article?.blocks.map(renderBlock)}
			</>
		);
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			{content}
		</DynamicModuleLoader>
	);
});
