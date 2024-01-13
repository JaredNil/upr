
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router/index';

import { Navbar } from 'widgets/Navbar';

import { classNames } from 'shared/lib/classNames/classNames';

import './styles/index.scss'

const App = () => {

    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter/>
        </div>
    )
}

export default App