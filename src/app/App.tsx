import { Suspense, useEffect, useState } from 'react';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';

import { useDispatch } from 'react-redux';
import { userAction } from 'entities/User';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router/index';

const App: React.FC = () => {
	const { theme } = useTheme();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(userAction.initAuthData());
	}, [dispatch]);

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback="">
				<Navbar />

				<main className="content">
					<Sidebar />
					<AppRouter />
				</main>
			</Suspense>
		</div>
	);
};

export default App;
