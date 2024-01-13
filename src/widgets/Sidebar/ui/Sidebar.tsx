import { ReactElement, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Sidebar.module.scss'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import LangSwitcher from './../../LangSwitcher/LangSwitcher';

interface SidebarProps{
    children?: ReactElement[]
    className?: string,
}

const Sidebar: React.FC<SidebarProps> = ({ className,  children}) => {

    const [collapsed, setCollapsed] = useState(false)

    const onToggleSidebar = () => {
        setCollapsed(collapsed => !collapsed)
    }

    return ( 
        <div className={classNames(cls.Sidebar,{[cls.collapsed]: collapsed},[className])}>
            <button onClick={onToggleSidebar}>
                TOGGLE SIDEBAR
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher className={cls.w_30} />
                <LangSwitcher className={cls.lang}/>
            </div>
        </div>
    )
}

export default Sidebar;

