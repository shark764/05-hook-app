export type ActionType = 'add' | 'remove' | 'update' | 'toggle';

export interface State {
  id: string;
  desc: string;
  done: boolean;
}

export interface Action {
  type: ActionType;
  payload: unknown;
}
