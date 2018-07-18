import {Action} from '@ngrx/store';

import {DatabaseActionTypes, DatabaseActionsUnion} from '../actions/database.actions';

export interface State {
  loaded: boolean;
}

const initialState: State = {
  loaded: null,
};

export function reducer(state: State = initialState, action: DatabaseActionsUnion) {
  switch (action.type) {

    case DatabaseActionTypes.Loaded: {
      return {
        ...state,
        loaded: true,
      };
    }

    default:
      return state;
  }
}
