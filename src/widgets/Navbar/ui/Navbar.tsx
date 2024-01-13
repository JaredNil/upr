import { Link } from 'react-router-dom'

import { classNames } from 'shared/lib/classNames/classNames';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import cls from './Navbar.module.scss'

interface NavbarProps{
    className?: string,
}

const Navbar: React.FC<NavbarProps> = ({className}) => {

    return (
        <div className={classNames(cls.Navbar,{},[])}>
            <div className={classNames(cls.links)}>
            <AppLink to={'/'} theme={AppLinkTheme.PRIMARY}>ukfdyfz</AppLink>
            <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>about</AppLink>
            </div>

        </div>
    );
};

export default Navbar;