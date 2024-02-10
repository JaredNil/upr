import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { userReducer } from 'entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from 'shared/api/api';
import { To } from 'history';
import { NavigateOptions } from 'react-router';

export function createReduxStore(
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
	navigate?: (to: To, options?: NavigateOptions) => void
) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		user: userReducer,
	};

	const reducerManager = createReducerManager(rootReducers);

	const extraArg: ThunkExtraArg = {
		api: $api,
		navigate,
	};

	const store = configureStore<StateSchema>({
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				thunk: { extraArgument: { api: $api, navigate } },
			}),
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
