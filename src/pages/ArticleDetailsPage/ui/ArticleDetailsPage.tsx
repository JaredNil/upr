import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage: React.FC = () => {
	const { t } = useTranslation('article-details');
	const { id } = useParams<{ id: string }>();

	if (!id) {
		return <div className={classNames(cls.ArticleDetailsPage, {}, [])}>{t('Статья не найдена')}</div>;
	}

	return <ArticleDetails id={id} />;
};

export default memo(ArticleDetailsPage);
