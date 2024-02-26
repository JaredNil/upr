import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import MainIcon from 'shared/assets/main-20-20.svg';
import AboutIcon from 'shared/assets/about-20-20.svg';
import ProfileIcon from 'shared/assets/profile-20-20.svg';
import ArticleIcon from 'shared/assets/article-20-20.svg';
import { SidebarItemType } from '../../types/sidebar';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
	const sidebarItemList: SidebarItemType[] = [
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
	];

	if (userData) {
		sidebarItemList.push(
			{
				path: `${RoutePath.profile}${userData?.id}`,
				text: 'Profile page',
				icon: ProfileIcon,
				authOnly: true,
			},
			{
				path: RoutePath.articles,
				text: 'Article page',
				icon: ArticleIcon,
				authOnly: true,
			}
		);
	}

	return sidebarItemList;
});
