import {Action} from '@ngrx/store';

import {CollectionsActionTypes, CollectionsActionsUnion} from '../actions/collections.actions';

export interface State {
  loaded: boolean;
}

const initialState: State = {
  loaded: null,
};

export function reducer(state: State = initialState, action: CollectionsActionsUnion) {
  switch (action.type) {

    case CollectionsActionTypes.Loaded: {
      return {
        ...state,
        loaded: true,
      };
    }

    default:
      return state;
  }
}
