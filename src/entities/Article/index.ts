export { articleDetailsAction, articleDetailsReducer } from './model/slice/articleDetailsSlice';

export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export { ArticleDetailsSchema } from './model/types/articleDetailsSchema';

export { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading } from 'entities/Article/model/selectors/articleDetailsSelectors';
