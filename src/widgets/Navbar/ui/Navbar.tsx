import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }: NavbarProps) => (
	<div className={classNames(cls.Navbar, {}, [])}>
		<div className={classNames(cls.links)}>dsd</div>
	</div>
);

export default Navbar;
