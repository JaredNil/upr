import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticlesPage: React.FC = () => {
	const { t } = useTranslation('article');

	return <div>ArticlesPage</div>;
};

export default memo(ArticlesPage);
