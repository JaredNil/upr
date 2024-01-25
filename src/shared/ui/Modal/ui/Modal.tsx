import { ReactNode, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import Portal from 'shared/ui/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
	isOpen?: boolean;
	onClose?: () => void;
	className?: string;
	children?: ReactNode;
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
	const { isOpen, onClose, className, children } = props;

	const mods: Record<string, boolean> = {
		[cls.opened]: isOpen,
	};

	const closeHandler = useCallback(() => {
		if (onClose) {
			onClose();
		}
	}, [onClose]);

	const onContentClick = useCallback((e: React.MouseEvent) => {
		e.stopPropagation();
	}, []);

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClose();
			}
		},
		[onClose]
	);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener(
				'keydown',
				onKeyDown
			);
		}
		return () => {
			window.removeEventListener(
				'keydown',
				onKeyDown
			);
		};
	}, [isOpen, onClose, onKeyDown]);

	return (
		<Portal>
			<div
				className={classNames(
					cls.Modal,
					mods,
					[className]
				)}
			>
				<div
					className={
						cls.overlay
					}
					onClick={
						closeHandler
					}
				>
					<div
						className={
							cls.content
						}
						onClick={
							onContentClick
						}
					>
						{
							children
						}
					</div>
				</div>
			</div>
		</Portal>
	);
};

export default Modal;
