// Todo.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Todo({ todo, toggleComplete, deleteTodo }) {
    const handleToggleComplete = () => {
        toggleComplete(todo);
    };

    const handleDeleteTodo = () => {
        deleteTodo(todo);
    };

    return (
        <div className={`todo ${todo.completed ? 'completed' : ''}`} style={{ whiteSpace: 'nowrap', display: 'flex', justifyContent: 'space-between' }} id='todoo'>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={handleToggleComplete}
                style={{ width: '20px', height: '20px' }}
            />
            <p className="text custom-text">{todo.text}</p>
            <div className="d-flex justify-content-between align-items-center">
                <h4 className="mb-0">{todo.title}</h4>
                <button className="btn btn-danger" onClick={handleDeleteTodo}>
                    Eliminar
                </button>
            </div>

        </div>
    );
}

export default Todo;

