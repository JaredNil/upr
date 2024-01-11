import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom'

import { MainPage } from 'pages/MainPage/index'
import { AboutPage } from 'pages/AboutPage/index';

import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';

import { classNames } from 'helpers/classNames/classNames';

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
                    <Route path={'/'} element={<MainPage/>}></Route>
                    <Route path={'/about'} element={<AboutPage/>}></Route>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App