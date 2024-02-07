import {
	EnhancedStore,
	Reducer,
	ReducersMapObject,
	UnknownAction,
	combineReducers,
} from '@reduxjs/toolkit';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUserName';

export interface StateSchema {
	user: UserSchema;

	// async reducer
	login?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: UnknownAction) => StateSchema;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}
