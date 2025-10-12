import { useSelector } from 'react-redux';
import { TodoItem } from '../TodoItem/TodoItem';
import './TodoList.css';

export const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
  const filter = useSelector(state => state.todos.filter);

  const getFilteredTodos = () => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos();

  if (filteredTodos.length === 0) {
    return (
      <div className="empty-todos">
        {!todos || todos.length === 0 ? 'No todos yet' : 'No todos found'}
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
