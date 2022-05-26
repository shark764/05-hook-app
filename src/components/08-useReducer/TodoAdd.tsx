import type { FormEvent } from 'react';
import { generateId } from '@/helpers/generateId';
import useForm from '@/hooks/useForm';
import type { State } from './types';

interface Props {
  handleAdd: (payload: State) => void;
}

const TodoAdd = ({ handleAdd }: Props) => {
  const [formState, handleInputChange, resetForm, valid, setValidField] =
    useForm({
      description: '',
    });

  const { description } = formState as { description: string; };
  const { description: isDescriptionValid = false } = valid as {
    description: boolean;
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (description.trim().length === 0) {
      setValidField('description', false);
      return;
    }
    handleAdd({
      id: generateId(),
      desc: description,
      done: false,
    });
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          name="description"
          placeholder="add todo..."
          value={description}
          onChange={handleInputChange}
          className={`form-control ${!isDescriptionValid ? 'is-invalid' : ''}`}
        />
        <button
          type="submit"
          className="btn btn-outline-info my-1 form-control">
          Add todo
        </button>
      </div>
    </form>
  );
};

export default TodoAdd;
