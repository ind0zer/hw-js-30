import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTodo, toggleTodo } from '../../redux/todosActions';
import './TodoItem.css';

export const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="checkbox"
        />
        <span className="todo-text">{todo.text}</span>
      </div>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};
