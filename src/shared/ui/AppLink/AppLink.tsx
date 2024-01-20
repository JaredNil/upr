import { Link, type LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
	// children?: React.ReactElement
	className?: string;
	theme?: AppLinkTheme;
}

const AppLink: React.FC<AppLinkProps> = (props: AppLinkProps) => {
	const {
		to,
		className,
		children,
		theme = AppLinkTheme.PRIMARY,
		...otherProps
	} = props;

	return (
		<Link
			to={to}
			className={classNames(cls.AppLink, {}, [
				className,
				cls[theme],
			])}
			{...otherProps}
		>
			{children}
		</Link>
	);
};

export default AppLink;
