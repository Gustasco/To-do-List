// TodoForm.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function TodoForm({ addTodo }) {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (inputText.trim() !== '') {
            addTodo(inputText);
            setInputText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-3">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Añadir una nueva tarea..."
                    value={inputText}
                    onChange={handleInputChange}
                />
                <div className="input-group-append">
                    <button type="submit" className="btn btn-primary">
                        Agregar
                    </button>
                </div>
            </div>
        </form>
    );
}

export default TodoForm;

