import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import { Code } from 'shared/ui/Code/Code';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/copy-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
	className?: string;
	block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent: React.FC<ArticleCodeBlockComponentProps> = memo((props: ArticleCodeBlockComponentProps) => {
	const { className, block } = props;

	return (
		<div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
			<Button className={cls.copyBtn} theme={ButtonTheme.OUTLINE}>
				<Icon Svg={CopyIcon} />
			</Button>
			<Code text={block.code} />
		</div>
	);
});
