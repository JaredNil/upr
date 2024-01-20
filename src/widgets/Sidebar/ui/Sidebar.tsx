import { type ReactElement, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';
import LangSwitcher from '../../LangSwitcher/LangSwitcher';

interface SidebarProps {
	children?: ReactElement[];
	className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
	className,
	children,
}: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggleSidebar = (): void => {
		setCollapsed((collapsedPrev) => !collapsedPrev);
	};

	return (
		<div
			className={classNames(
				cls.Sidebar,
				{
					[cls.collapsed]:
						collapsed,
				},
				[className]
			)}
		>
			<button
				type="button"
				onClick={onToggleSidebar}
			>
				TOGGLE SIDEBAR
			</button>
			<div className={cls.switchers}>
				<ThemeSwitcher
					className={cls.w_30}
				/>
				<LangSwitcher
					className={cls.lang}
				/>
			</div>
		</div>
	);
};

export default Sidebar;
