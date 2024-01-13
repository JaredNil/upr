import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const {t} = useTranslation();

    return (
        <div>
            {t('Главная_титул')}
        </div>
    )
}

export default MainPage