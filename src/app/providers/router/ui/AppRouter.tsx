import { Children, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';

import PageLoader from 'widgets/PageLoader/PageLoader';

import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { RequireAuth } from './RequireAuth';

const AppRouter: React.FC = () => {
	let auth = useSelector(getUserAuthData);

	const renderWithWrapper = useCallback(
		(route: AppRoutesProps) => {
			const element = (
				<Suspense fallback={<PageLoader />}>
					<div className="page-wrapper">{route.element}</div>
				</Suspense>
			);
			return (
				<Route
					key={route.path}
					path={route.path}
					element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : <>{element}</>}
				/>
			);
		},
		[auth]
	);

	return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default AppRouter;
