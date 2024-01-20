import { Suspense } from 'react';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from './providers/router/index';
import { useTheme } from './providers/ThemeProvider';

import './styles/index.scss';

const App: React.FC = () => {
	const { theme } = useTheme();

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
