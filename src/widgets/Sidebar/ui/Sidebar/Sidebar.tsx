import { type ReactElement, useState, useMemo, ReactNode, memo } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import LangSwitcher from 'widgets/LangSwitcher/LangSwitcher';

import Button, { ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';

import { SidebarItemList } from 'widgets/Sidebar/model/items';
import cls from './Sidebar.module.scss';
import SidebarItem from '../SidebarItem/SidebarItem';

interface SidebarProps {
	children?: ReactElement[];
	className?: string;
}

const Sidebar: React.FC<SidebarProps> = memo(({ className, children }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggleSidebar = (): void => {
		setCollapsed((collapsedPrev) => !collapsedPrev);
	};

	const itemsList: ReactNode = useMemo(
		() =>
			SidebarItemList.map((item) => (
				<SidebarItem
					key={uuidv4()}
					item={item}
					collapsed={collapsed}
				/>
			)),
		[collapsed]
	);

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
			<div className={cls.items}>{itemsList}</div>
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
});

export default Sidebar;
