import {Action} from '@ngrx/store';

import {RecordsActionTypes, RecordsActionsUnion} from '../actions/records.actions';

export interface State {
  loaded: boolean;
}

const initialState: State = {
  loaded: null,
};

export function reducer(state: State = initialState, action: RecordsActionsUnion) {
  switch (action.type) {

    case RecordsActionTypes.Loaded: {
      return {
        ...state,
        loaded: true,
      };
    }

    default:
      return state;
  }
}
