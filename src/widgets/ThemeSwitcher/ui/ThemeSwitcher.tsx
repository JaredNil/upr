import { classNames } from 'shared/lib/classNames/classNames';

import { useTheme } from 'app/providers/ThemeProvider';

import ButtonIcon from 'widgets/assets/ThemeSwitcher/ThemeSwitcher-button.svg';

import Button, { ButtonTheme } from 'shared/ui/Button/Button';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
	className?: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
	className,
}: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			className={classNames(
				cls.ThemeSwitcher,
				{},
				[className]
			)}
			theme={ButtonTheme.CLEAR}
			onClick={toggleTheme}
		>
			<ButtonIcon
				className={classNames(
					cls.ThemeSwitcher_btn
				)}
			/>
		</Button>
	);
};

export default ThemeSwitcher;
