import { Suspense, useState } from 'react';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';

import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router/index';

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
