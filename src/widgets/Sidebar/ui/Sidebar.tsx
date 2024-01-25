import { type ReactElement, useState } from 'react';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import LangSwitcher from 'widgets/LangSwitcher/LangSwitcher';

import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

import MainIcon from 'shared/assets/main-20-20.svg';
import AboutIcon from 'shared/assets/about-20-20.svg';

import cls from './Sidebar.module.scss';

interface SidebarProps {
	children?: ReactElement[];
	className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className, children }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggleSidebar = (): void => {
		setCollapsed((collapsedPrev) => !collapsedPrev);
	};

	return (
		<div
			className={classNames(
				cls.Sidebar,
				{
					[cls.collapsed]: collapsed,
				},
				[className]
			)}
		>
			<div className={cls.items}>
				<div className={cls.item}>
					<AppLink
						to={RoutePath.main}
						theme={AppLinkTheme.PRIMARY}
					>
						<MainIcon
							className={
								cls.icon
							}
						/>
						<span className={cls.link}>
							Main page
						</span>
					</AppLink>
				</div>
				<div className={cls.item}>
					<AppLink
						to={RoutePath.about}
						theme={
							AppLinkTheme.SECONDARY
						}
					>
						<AboutIcon
							className={
								cls.icon
							}
						/>
						<span className={cls.link}>
							About page
						</span>
					</AppLink>
				</div>
			</div>
			<Button
				type="button"
				onClick={onToggleSidebar}
				className={cls.collapsedBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				square
				size={ButtonSize.XL}
			>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={cls.switchers}>
				<ThemeSwitcher className={cls.w_30} />
				<LangSwitcher className={cls.lang} />
			</div>
		</div>
	);
};

export default Sidebar;
