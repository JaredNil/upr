import { useTranslation } from 'react-i18next';

function AboutPage() {
    const { t } = useTranslation();

    return (
        <div>
            {t('О_сайте_титул')}
        </div>
    );
}

export default AboutPage;
