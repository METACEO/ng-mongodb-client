import {Action} from '@ngrx/store';

import {TablesActionTypes, TablesActionsUnion} from '../actions/tables.actions';

export interface State {
  loaded: boolean;
}

const initialState: State = {
  loaded: null,
};

export function reducer(state: State = initialState, action: TablesActionsUnion) {
  switch (action.type) {

    case TablesActionTypes.Loaded: {
      return {
        ...state,
        loaded: true,
      };
    }

    default:
      return state;
  }
}
