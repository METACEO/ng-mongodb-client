import {Action} from '@ngrx/store';

export enum CollectionsActionTypes {
  Loaded = '[Collections] Loaded',
}

export class Loaded implements Action {
  readonly type = CollectionsActionTypes.Loaded;

  constructor() {
  }
}

export type CollectionsActionsUnion =
  | Loaded;
