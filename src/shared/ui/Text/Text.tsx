import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import cls from './Text.module.scss';

export enum TextTheme {
	PRIMARY = 'primary',
	ERROR = 'error',
}

export enum TextAlign {
	RIGHT = 'right',
	LEFT = 'left',
	CENTER = 'center',
}

interface TextProps {
	className?: string;
	title?: string;
	text?: string;
	theme?: TextTheme;
	align?: TextAlign;
}

const Text: React.FC<TextProps> = memo((props: TextProps) => {
	const {
		title,
		text,
		className,
		theme = TextTheme.PRIMARY,
		align = TextAlign.LEFT,
	} = props;

	const mods: Mods = {
		[cls[theme]]: true,
		[cls[align]]: true,
	};

	const paragramNotion = [];
	paragramNotion.push(title);
	paragramNotion.push(text);

	return (
		<div className={classNames(cls.Text, mods, [className])}>
			{title && <p className={cls.title}>{title}</p>}
			{text && <p className={cls.text}>{text}</p>}
		</div>
	);
});

export default Text;
