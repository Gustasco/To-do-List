// TodoList.js
import React from 'react';
import Todo from './Todo';
import 'bootstrap/dist/css/bootstrap.min.css';


function TodoList({ todos, toggleComplete, deleteTodo }) {
    return (
        <div className="list-group mt-3">
            {todos.map((todo, index) => (
                <Todo
                    key={index}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
}

export default TodoList;


