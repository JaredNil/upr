import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleTextBlock } from 'entities/Article/model/types/article';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
	className?: string;
	block: ArticleTextBlock;
}

export const ArticleTextBlockComponent: React.FC<ArticleTextBlockComponentProps> = memo((props: ArticleTextBlockComponentProps) => {
	const { className, block } = props;

	return (
		<div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
			<div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
				{block.title && <Text title={block.title} className={cls.title} />}
				{block.paragraphs.map((paragraph) => (
					<Text key={paragraph} text={paragraph} className={cls.paragraph} />
				))}
			</div>
		</div>
	);
});
