import TodoItem from './TodoItem';
import type { State } from './types';
import './styles.scss';

interface Props {
  list: State[];
  handleToggle: (id: string) => void;
  handleRemove: (id: string) => void;
}

const TodoList = ({ list, handleToggle, handleRemove }: Props) => (
  <div className="list-group">
    {list.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        handleToggle={handleToggle}
        handleRemove={handleRemove}
      />
    ))}
  </div>
);

export default TodoList;
