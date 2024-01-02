import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom'

import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';

import { useTheme } from './theme/useTheme';

import { classNames } from './utils/classNames/classNames';

import './styles/index.scss'



const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
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