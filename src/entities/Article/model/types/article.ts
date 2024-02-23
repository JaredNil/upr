export enum ArticleBlockType {
	CODE = 'CODE',
	IMAGE = 'IMAGE',
	TEXT = 'TEXT',
}

export interface ArticleBlockBase {
	id: string;
	type: ArticleBlockType;
}

export interface AricleCodeBlock extends ArticleBlockBase {
	type: ArticleBlockType.CODE;
	code: string;
}
export interface AricleImageBlock extends ArticleBlockBase {
	type: ArticleBlockType.IMAGE;
	src: string;
	title: string;
}
export interface AricleTextBlock extends ArticleBlockBase {
	type: ArticleBlockType.TEXT;
	title?: string;
	paragraphs: string[];
}

export type ArticleBlock = AricleCodeBlock | AricleImageBlock | AricleTextBlock;

export enum ArticleType {
	IT = 'IT',
	SCIENCE = 'SCIENCE',
	ECONOMICS = 'ECONOMICS',
}

export interface Article {
	id: string;
	title: string;
	subtitle: string;
	img: string;
	views: number;
	createdAt: string;
	type: ArticleType[];
	blocks: ArticleBlock[];
}
