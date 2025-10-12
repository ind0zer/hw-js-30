import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todosActions';
import './TodoForm.css';

export const TodoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    
    if (text.trim() === '') {
      return;
    }

    const newTodo = {
      id: Date.now().toString(),
      text: text.trim(),
      completed: false,
    };

    dispatch(addTodo(newTodo));
    setText('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="field">
        <input
          className="input"
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add new todo..."
          required
        />
      </div>
      
      <button className="button" type="submit">
        Add Todo
      </button>
    </form>
  );
};
