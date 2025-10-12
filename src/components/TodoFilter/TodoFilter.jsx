import { useDispatch, useSelector } from 'react-redux';
import { setTodoFilter } from '../../redux/todosActions';
import './TodoFilter.css';

export const TodoFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleFilterChange = (newFilter) => {
    dispatch(setTodoFilter(newFilter));
  };

  return (
    <div className="todo-filter">
      <button
        className={`filter-button ${filter === 'all' ? 'active' : ''}`}
        onClick={() => handleFilterChange('all')}
      >
        All
      </button>
      <button
        className={`filter-button ${filter === 'active' ? 'active' : ''}`}
        onClick={() => handleFilterChange('active')}
      >
        Active
      </button>
      <button
        className={`filter-button ${filter === 'completed' ? 'active' : ''}`}
        onClick={() => handleFilterChange('completed')}
      >
        Completed
      </button>
    </div>
  );
};
