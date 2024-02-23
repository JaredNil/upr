import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
	className?: string;
}

const ArticleTextBlockComponent: React.FC<ArticleTextBlockComponentProps> = (props: ArticleTextBlockComponentProps) => {
	const { className } = props;

	return <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>Template_text</div>;
};

export default ArticleTextBlockComponent;
