
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router/index';

import { Navbar } from 'widgets/Navbar';

import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames';



const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme} >Toggle theme</button>
            <Navbar />
            <AppRouter/>
        </div>
    )
}

export default App