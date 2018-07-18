import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { environment } from '../../environments/environment';
import * as databaseReducer from './database.reducer';
import * as recordsReducer from './records.reducer';
import * as tablesReducer from './tables.reducer';

export interface State {
  database: databaseReducer.State;
  records: recordsReducer.State;
  tables: recordsReducer.State;
}

export const reducers: ActionReducerMap<State> = {
  database: databaseReducer.reducer,
  records: recordsReducer.reducer,
  tables: tablesReducer.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
