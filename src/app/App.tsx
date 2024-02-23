import { useDispatch, useSelector } from 'react-redux';
import { Suspense, useEffect } from 'react';

import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router/index';

import { getUserInited, userAction } from 'entities/User';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { classNames } from 'shared/lib/classNames/classNames';

const App: React.FC = () => {
	const { theme } = useTheme();
	const dispatch = useDispatch();

	const inited = useSelector(getUserInited);

	useEffect(() => {
		dispatch(userAction.initAuthData());
	}, [dispatch]);

	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback="">
				<Navbar />

				<main className="content">
					<Sidebar />
					{inited && <AppRouter />}
				</main>
			</Suspense>
		</div>
	);
};

export default App;
