
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router/index';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { classNames } from 'shared/lib/classNames/classNames';

import './styles/index.scss'

const App = () => {

    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <main className='content'>
                <Sidebar/>
                <AppRouter/>
            </main>
        </div>
    )
}

export default App