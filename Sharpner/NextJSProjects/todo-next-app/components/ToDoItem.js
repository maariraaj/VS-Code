import React from 'react';
import { RiEdit2Line, RiDeleteBinLine } from 'react-icons/ri';

const TodoItem = ({ todo, toggleComplete, handleEdit, handleDelete }) => {
    return (
        <div className={`flex items-center justify-between p-4 bg-gray-800 rounded-md border ${todo.completed ? 'border-green-500' : 'border-red-500'}`}>
            <div className={`flex items-center flex-1 text-white ${todo.completed ? 'line-through' : ''}`}>
                <span className="mr-2">{todo.text}</span>
                <span className="text-sm text-gray-500">({todo.date})</span>
            </div>
            <div className="flex items-center">
                <RiEdit2Line
                    className="h-6 w-6 mr-2 cursor-pointer text-gray-400 hover:text-gray-200"
                    onClick={() => handleEdit(todo)}
                />
                <RiDeleteBinLine
                    className="h-6 w-6 mr-2 cursor-pointer text-gray-400 hover:text-gray-200"
                    onClick={() => console.log("Clicked delete")}
                />
                <button
                    onClick={() => toggleComplete(todo.id)}
                    className={`px-4 py-2 text-sm font-semibold rounded ${todo.completed ? 'bg-green-500 border-green-500 text-white' : 'bg-red-500 border-red-500 text-white'}`}
                >
                    {todo.completed ? 'Completed' : 'Not Completed'}
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
