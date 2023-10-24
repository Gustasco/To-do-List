// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  // Recuperar la lista de tareas del localStorage cuando la aplicación se inicia
  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const [todos, setTodos] = useState([]);

  // Cuando la lista de tareas se actualiza, la almacenamos en el localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = { text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (todoToToggle) => {
    const updatedTodos = todos.map((todo) => {
      if (todo === todoToToggle) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (todoToDelete) => {
    const updatedTodos = todos.filter((todo) => todo !== todoToDelete);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <div className="text-center mt-5"> {/* Margen superior para centrar */}
        <h1 className="mb-4">Lista de Tareas</h1>
        <div className="row">
          <div className="col-md-6 offset-md-3"> {/* Usar offset-md-3 para centrar el contenido */}
            <TodoForm addTodo={addTodo} />
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 ">
            <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
