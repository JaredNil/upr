import { useTranslation } from 'react-i18next';

const AboutPage: React.FC = () => {
	const { t } = useTranslation();

	return <div>{t('О_сайте_титул')}</div>;
};

export default AboutPage;
