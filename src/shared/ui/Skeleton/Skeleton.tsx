import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';
import { CSSProperties } from 'react';

interface SkeletonProps {
	className?: string;
	height?: string | number;
	width?: string | number;
	border?: string;
}

const Skeleton: React.FC<SkeletonProps> = (props: SkeletonProps) => {
	const { className, border, height, width } = props;

	const styles: CSSProperties = {
		width,
		height,
		borderRadius: border,
	};

	return (
		<div className={classNames(cls.Skeleton, {}, [className])} style={styles}>
			Template_text
		</div>
	);
};

export default Skeleton;
