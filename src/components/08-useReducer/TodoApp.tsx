import { useEffect, useReducer } from 'react';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';
import { todoReducer } from './todoReducer';
import type { State } from './types';
import './styles.scss';

const storageKey = 'todo-list';

const init = () =>
  JSON.parse(localStorage.getItem(storageKey) ?? '[]') as State[];

const TodoApp = () => {
  const [todoList, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(todoList));
  }, [todoList]);

  const handleAdd = (payload: State) => {
    dispatch({
      type: 'add',
      payload,
    });
  };

  const handleRemove = (id: string) => {
    dispatch({ type: 'remove', payload: { id } });
  };
  const handleToggle = (id: string) => {
    dispatch({ type: 'toggle', payload: { id } });
  };

  const pending = todoList.filter((todo) => !todo.done);

  return (
    <div className="col-lg-4 p-2 border border-3 border-info rounded-3">
      <h1>Todo App</h1>
      All todos{' '}
      <span className="badge bg-info rounded-pill">{todoList.length}</span>{' '}
      Pending todos{' '}
      <span className="badge bg-info rounded-pill">{pending.length}</span>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col">
            <TodoList
              list={todoList}
              handleToggle={handleToggle}
              handleRemove={handleRemove}
            />
          </div>
          <div className="col">
            <TodoAdd handleAdd={handleAdd} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
