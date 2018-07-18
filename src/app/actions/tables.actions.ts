import {Action} from '@ngrx/store';

export enum TablesActionTypes {
  Loaded = '[Tables] Loaded',
}

export class Loaded implements Action {
  readonly type = TablesActionTypes.Loaded;

  constructor() {
  }
}

export type TablesActionsUnion =
  | Loaded;
