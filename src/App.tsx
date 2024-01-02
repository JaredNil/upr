import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom'

import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';

import './styles/index.scss'
import { useTheme } from './theme/useTheme';



const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme} >Toggle theme</button>
            <Link to={'/'}>ukfdyfz</Link>
            <Link to={'/about'}>about</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>}></Route>
                    <Route path={'/about'} element={<AboutPageAsync/>}></Route>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App