import { useState } from 'react';
import TodoItem from './ToDoItem';
import dayjs from 'dayjs';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [newTodoDate, setNewTodoDate] = useState('');

    const addTodo = () => {
        if (newTodo.trim() !== '' && newTodoDate !== '') {
            setTodos([
                ...todos,
                { id: Date.now(), text: newTodo, date: newTodoDate, completed: false },
            ]);
            setNewTodo('');
            setNewTodoDate('');
        }
    };

    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const today = dayjs().format('YYYY-MM-DD');
    const todayTodos = todos.filter(todo => todo.date === today);
    const otherTodos = todos.filter(todo => todo.date !== today);

    return (
        <div className="max-w-screen-lg mx-auto p-4 text-white">
            <h1 className="text-3xl font-bold mb-6 text-center">Todo List</h1>
            <div className="mb-6">
                <div className="p-6 bg-gray-800 rounded-lg border border-pink-500">
                    <h2 className="text-xl font-semibold mb-4">Add a new todo</h2>
                    <div className="flex flex-col space-y-4">
                        <input
                            type="text"
                            value={newTodo}
                            onChange={(e) => setNewTodo(e.target.value)}
                            className="p-4 border rounded-md bg-gray-700 text-white"
                            placeholder="Todo..."
                        />
                        <input
                            type="date"
                            value={newTodoDate}
                            onChange={(e) => setNewTodoDate(e.target.value)}
                            className="p-4 border rounded-md bg-gray-700 text-white"
                        />
                        <button
                            onClick={addTodo}
                            className="px-4 py-2 bg-pink-500 border-pink-500 text-white rounded-md"
                        >
                            Add Todo
                        </button>
                    </div>
                </div>
            </div>
            {todayTodos.length > 0 && (
                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Today's Todos</h2>
                    <div className="space-y-4">
                        {todayTodos.map((todo) => (
                            <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
                        ))}
                    </div>
                </div>
            )}
            {otherTodos.length > 0 && (
                <div>
                    <h2 className="text-xl font-semibold mb-2">Other Todos</h2>
                    <div className="space-y-4">
                        {otherTodos.map((todo) => (
                            <TodoItem key={todo.id} todo={todo} toggleComplete={toggleComplete} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TodoList;
