import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
	className?: string;
}

const ArticleImageBlockComponent: React.FC<ArticleImageBlockComponentProps> = (props: ArticleImageBlockComponentProps) => {
	const { className } = props;

	return <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>Template_text</div>;
};

export default ArticleImageBlockComponent;
