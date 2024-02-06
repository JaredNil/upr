import { classNames } from 'shared/lib/classNames/classNames';

import { useCallback, useState } from 'react';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userAction } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }: NavbarProps) => {
	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(getUserAuthData);

	const { t } = useTranslation();

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	const dispatch = useDispatch();

	const onLogout = useCallback(() => {
		dispatch(userAction.logout());
	}, [dispatch]);

	return authData ? ( // authorization button return
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.OUTLINE}
				className={classNames(cls.links)}
				type="button"
				onClick={() => onLogout()}
			>
				{t('Выйти')}
			</Button>
			<LoginModal
				isOpen={isAuthModal}
				onClose={() => onCloseModal()}
			/>
		</div>
	) : (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.OUTLINE}
				className={classNames(cls.links)}
				type="button"
				onClick={() => onShowModal()}
			>
				{t('Войти')}
			</Button>
			<LoginModal
				isOpen={isAuthModal}
				onClose={() => onCloseModal()}
			/>
		</div>
	);
};

export default Navbar;

