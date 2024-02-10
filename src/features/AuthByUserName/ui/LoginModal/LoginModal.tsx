import { classNames } from 'shared/lib/classNames/classNames';

import { Modal } from 'shared/ui/Modal';
import { Suspense } from 'react';
import cls from './LoginModal.module.scss';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = (props: LoginModalProps) => {
	const { className, isOpen, onClose } = props;

	return (
		<Modal
			className={classNames(cls.LoginModal, {}, [className])}
			isOpen={isOpen}
			onClose={onClose}
		>
			<Suspense fallback="">
				<LoginFormAsync onSuccess={onClose} />
			</Suspense>
		</Modal>
	);
};
