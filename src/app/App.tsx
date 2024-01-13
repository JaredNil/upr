
import { Link } from 'react-router-dom'

import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';

import { classNames } from 'shared/lib/classNames/classNames';

import './styles/index.scss'
import { AppRouter } from './providers/router/index';



const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme} >Toggle theme</button>
            <Link to={'/'}>ukfdyfz</Link>
            <Link to={'/about'}>about</Link>
            <AppRouter/>
        </div>
    )
}

export default App