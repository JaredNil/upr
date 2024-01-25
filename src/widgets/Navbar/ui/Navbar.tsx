import { classNames } from 'shared/lib/classNames/classNames';

import { Modal } from 'shared/ui/Modal';
import { useCallback, useState } from 'react';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }: NavbarProps) => {
	const [isAuthModal, setIsAuthModal] = useState(false);

	const { t } = useTranslation();

	const onToggleModal = useCallback(() => {
		setIsAuthModal((prevState) => !prevState);
	}, []);

	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.OUTLINE}
				className={classNames(cls.links)}
				type="button"
				onClick={() => onToggleModal()}
			>
				{t('Войти')}
			</Button>
			<Modal isOpen={isAuthModal} onClose={() => onToggleModal()}>
				asdsda
			</Modal>
		</div>
	);
};

export default Navbar;
