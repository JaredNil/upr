import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import { SidebarItemType } from 'widgets/Sidebar/model/types/sidebar';

import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
	item: SidebarItemType;
	collapsed?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = memo((props: SidebarItemProps) => {
	const { item, collapsed } = props;
	const { t } = useTranslation();

	const isAuth = useSelector(getUserAuthData);

	if (item.authOnly && !isAuth) {
		return null;
	}

	return (
		<AppLink className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])} to={item.path} theme={AppLinkTheme.PRIMARY}>
			<item.icon className={cls.icon} />
			<span className={cls.link}>{t(item.text)}</span>
		</AppLink>
	);
});

export default SidebarItem;
