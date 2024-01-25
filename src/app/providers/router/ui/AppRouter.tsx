import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import PageLoader from 'widgets/PageLoader/PageLoader';

import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter: React.FC = () => (
	<Routes>
		{Object.values(routeConfig).map(({ path, element }) => (
			<Route
				key={path}
				path={path}
				element={
					<Suspense fallback={<PageLoader />}>
						<div className="page-wrapper">
							{element}
						</div>
					</Suspense>
				}
			/>
		))}
	</Routes>
);

export default AppRouter;
