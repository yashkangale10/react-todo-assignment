import { useState } from 'react';
import TodoInput from './TodoInput';
import FilterButtons from './FilterButtons';
import TodoItem from './TodoItem';
import './App.css';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const handleAddTodo = (text) => {
    const newTask = { id: Date.now(), text: text, isCompleted: false };
    setTodos([...todos, newTask]);
  };

  const handleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: true } : todo
    ));
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  };

  const handleEdit = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  const filteredTodos = todos.filter((todo) => {
    if (activeFilter === 'DONE') return todo.isCompleted;
    if (activeFilter === 'TODO') return !todo.isCompleted;
    return true;
  });

  const sortedTodos = [...filteredTodos].sort((a, b) => {
    if (a.isCompleted && !b.isCompleted) return -1;
    if (!a.isCompleted && b.isCompleted) return 1;
    return 0;
  });

  return (
    <div className="app-container">
      <h2>TodoInput</h2>
      <TodoInput onAddTodo={handleAddTodo} />

      <h2>TodoList</h2>
      {todos.length === 0 ? (
        <p>No todo is available</p>
      ) : (
        <>
          <FilterButtons activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          <div className="todo-list">
            {sortedTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onComplete={handleComplete}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
