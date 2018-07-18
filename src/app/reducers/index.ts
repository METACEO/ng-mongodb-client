import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../environments/environment';
import * as collectionsReducer from './collections.reducer';
import * as databaseReducer from './database.reducer';
import * as recordsReducer from './records.reducer';

export interface State {
  collections: collectionsReducer.State;
  database: databaseReducer.State;
  records: recordsReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  collections: collectionsReducer.reducer,
  database: databaseReducer.reducer,
  records: recordsReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
