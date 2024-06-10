import React from 'react';

const TodoItem = ({ todo, toggleComplete }) => {
    return (
        <div className={`flex items-center justify-between p-4 bg-gray-800 rounded-md border ${todo.completed ? 'border-green-500' : 'border-red-500'}`}>
            <div className={`flex-1 text-white ${todo.completed ? 'line-through' : ''}`}>
                {todo.text} <span className="text-sm text-gray-500">({todo.date})</span>
            </div>
            <button
                onClick={() => toggleComplete(todo.id)}
                className={`ml-4 px-4 py-2 text-sm font-semibold rounded ${todo.completed ? 'bg-green-500 border-green-500 text-white' : 'bg-red-500 border-red-500 text-white'}`}
            >
                {todo.completed ? 'Completed' : 'Not Completed'}
            </button>
        </div>
    );
};

export default TodoItem;
