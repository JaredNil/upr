import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
	className?: string;
}

const LangSwitcher: React.FC<LangSwitcherProps> = memo(({ className }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation();

	const toggle = async (): Promise<void> => {
		await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};
	return (
		<Button className={classNames(cls.LangSwither, {}, [className])} theme={ButtonTheme.CLEAR} onClick={toggle}>
			{t('Язык')}
		</Button>
	);
});

export default LangSwitcher;
