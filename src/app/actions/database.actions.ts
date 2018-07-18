import {Action} from '@ngrx/store';

export enum DatabaseActionTypes {
  Loaded = '[Database] Loaded',
}

export class Loaded implements Action {
  readonly type = DatabaseActionTypes.Loaded;

  constructor() {
  }
}

export type DatabaseActionsUnion =
  | Loaded;
