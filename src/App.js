import React from 'react';
import TodoForm from './components/TodoForm';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <TodoList></TodoList>
    </div>
  );
}

export default App;
