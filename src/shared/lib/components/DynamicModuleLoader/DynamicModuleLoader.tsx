/* eslint-disable react/jsx-no-useless-fragment */
import { ReactNode, useEffect } from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducerList = {
	[name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
	reducers: ReducerList;
	removeAfterUnmount?: boolean;
	children: ReactNode;
}

type ReducersListEntry = [StateSchemaKey, Reducer];

const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> = ({
	reducers,
	children,
	removeAfterUnmount = true,
}: DynamicModuleLoaderProps) => {
	const store = useStore() as ReduxStoreWithManager;

	useEffect(() => {
		Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
			store.reducerManager.add(name, reducer);
		});

		return () => {
			if (removeAfterUnmount) {
				Object.entries(reducers).forEach(
					([
						name,
						reducer,
					]: ReducersListEntry) => {
						store.reducerManager.remove(
							name
						);
					}
				);
			}
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <>{children}</>;
};

export default DynamicModuleLoader;
