import { FC, SVGProps } from 'react';
import { AppRoutes, RoutePath, routeConfig } from 'shared/config/routeConfig/routeConfig';

import MainIcon from 'shared/assets/main-20-20.svg';
import AboutIcon from 'shared/assets/about-20-20.svg';
import ProfileIcon from 'shared/assets/profile-20-20.svg';
import { RouteProps } from 'react-router-dom';

export interface SidebarItemType {
	path: string;
	text: string;
	icon: FC<SVGProps<SVGElement>>;
	authOnly?: boolean;
}

export const SidebarItemList: SidebarItemType[] = [
	{
		path: RoutePath.main,
		text: 'Main page',
		icon: MainIcon,
	},
	{
		path: RoutePath.about,
		text: 'About page',
		icon: AboutIcon,
	},
	{
		path: RoutePath.profile,
		text: 'Profile page',
		icon: ProfileIcon,
		authOnly: true,
	},
];
