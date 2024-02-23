import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
	className?: string;
}

const ArticleCodeBlockComponent: React.FC<ArticleCodeBlockComponentProps> = (props: ArticleCodeBlockComponentProps) => {
	const { className } = props;

	return <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>Template_text</div>;
};

export default ArticleCodeBlockComponent;
