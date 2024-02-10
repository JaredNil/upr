import StoreProvider from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';

export { StoreProvider, createReduxStore };

export type { StateSchema, ReduxStoreWithManager } from './config/StateSchema';
