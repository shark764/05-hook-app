import { generateId } from '@/helpers/generateId';
import type { State, Action } from './types';

export const initialState: State[] = [
  { id: generateId(), desc: 'Buy bread', done: false },
  { id: generateId(), desc: 'Buy milk', done: true },
  { id: generateId(), desc: 'Buy cream', done: false },
  { id: generateId(), desc: 'Buy apples', done: true },
  { id: generateId(), desc: 'Buy grapes', done: false },
  { id: generateId(), desc: 'Buy soda', done: true },
];

export const todoReducer = (
  // eslint-disable-next-line default-param-last
  state = initialState,
  action: Action | undefined
): State[] => {
  switch (action?.type) {
    case 'add':
      return [...state, action.payload as State];

    case 'update':
      break;
    case 'remove':
      return state.filter(
        (todo) => todo.id !== (action.payload as { id: string; }).id
      );

    case 'toggle':
      return state.map((todo) =>
        todo.id === (action.payload as { id: string; }).id
          ? { ...todo, done: !todo.done }
          : todo
      );

    default:
      break;
  }

  return state;
};

export default todoReducer;
