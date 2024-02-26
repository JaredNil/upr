import { FC, SVGProps } from 'react';

export interface SidebarItemType {
	path: string;
	text: string;
	icon: FC<SVGProps<SVGElement>>;
	authOnly?: boolean;
}
