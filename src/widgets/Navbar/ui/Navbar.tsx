import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import { Modal } from 'shared/ui/Modal';
import { t } from 'i18next';
import { useCallback, useState } from 'react';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }: NavbarProps) => {
	const [isAuthModal, setIsAuthModal] = useState(false);

	const onToggleModal = useCallback(() => {
		setIsAuthModal((prevState) => !prevState);
	}, []);

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.OUTLINE}
				className={classNames(cls.links)}
				type="button"
				onClick={() => onToggleModal}
			>
				{t('Войти')}
			</Button>
			<Modal isOpen={isAuthModal} onClose={() => onToggleModal}>
				asdsda
			</Modal>
		</div>
	);
};

export default Navbar;
