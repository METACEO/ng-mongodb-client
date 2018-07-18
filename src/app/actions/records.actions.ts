import {Action} from '@ngrx/store';

export enum RecordsActionTypes {
  Loaded = '[Records] Loaded',
}

export class Loaded implements Action {
  readonly type = RecordsActionTypes.Loaded;

  constructor() {
  }
}

export type RecordsActionsUnion =
  | Loaded;
