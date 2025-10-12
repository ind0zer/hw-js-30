import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoList } from './components/TodoList/TodoList';
import { TodoFilter } from './components/TodoFilter/TodoFilter';
import './App.css';

export const App = () => {
  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <TodoForm />
      <TodoFilter />
      <TodoList />
    </div>
  );
};
