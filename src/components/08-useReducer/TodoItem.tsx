import type { MouseEvent } from 'react';
import type { State } from './types';

interface Props {
  todo: State;
  handleToggle: (id: string) => void;
  handleRemove: (id: string) => void;
}

const TodoItem = ({ todo, handleToggle, handleRemove }: Props) => {
  const handleClick = () => {
    handleToggle(todo.id);
  };
  const handleRemoveClick = (evt: MouseEvent<HTMLButtonElement>) => {
    evt.stopPropagation();
    handleRemove(todo.id);
  };

  return (
    <button
      key={todo.id}
      type="button"
      onClick={handleClick}
      // eslint-disable-next-line max-len
      className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      aria-current="true">
      <span className={`${todo.done ? 'r_todo__complete' : ''}`}>
        {todo.desc}
      </span>
      <div className="r_todo__actions">
        {todo.done && (
          <span className="badge bg-primary rounded-pill">
            <i className="bi bi-check-circle-fill" />
          </span>
        )}

        <i
          role="button"
          tabIndex={0}
          className="bi bi-x-circle-fill mx-2 text-danger"
          onClick={handleRemoveClick}
          onKeyDown={undefined}
          aria-label="Remove"
        />
      </div>
    </button>
  );
};

export default TodoItem;
