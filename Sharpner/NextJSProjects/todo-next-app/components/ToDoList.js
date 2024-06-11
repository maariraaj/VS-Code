import { useState, useEffect } from 'react';
import TodoItem from './ToDoItem';
import dayjs from 'dayjs';

const TodoList = ({ onAddToDo, onToggleComplete, onDeleteTodo, todoListData }) => {
    const [newTodo, setNewTodo] = useState('');
    const [newTodoDate, setNewTodoDate] = useState('');
    const [todos, setTodos] = useState(todoListData);

    useEffect(() => {
        setTodos(todoListData);
    }, [todoListData]);

    const addTodo = () => {
        if (newTodo.trim() !== '' && newTodoDate !== '') {
            const newToDoItem = {
                id: `${Date.now()}_${Math.random().toString()}`,
                text: newTodo,
                date: newTodoDate,
                completed: false
            };

            onAddToDo(newToDoItem);
            setNewTodo('');
            setNewTodoDate('');
        }
    };

    const toggleComplete = (id) => {
        onToggleComplete(id);
    };

    const editHandler = (todo) => {
        onDeleteTodo(todo._id);
        setNewTodo(todo.text);
        setNewTodoDate(todo.date);
    };

    const today = dayjs().format('YYYY-MM-DD');
    const todayTodos = todos.filter(todo => todo.date === today);
    const otherTodos = todos.filter(todo => todo.date !== today);

    return (
        <div className="max-w-screen-lg mx-auto p-4 text-white">
            <h1 className="text-3xl font-bold mb-6 text-center">Todo List</h1>
            <div className="mb-6">
                <div className="p-6 bg-gray-800 rounded-lg border border-orange-500">
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
                            className="px-4 py-2 bg-orange-500 border-orange-500 text-white rounded-md"
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
                            <TodoItem key={todo.id} todo={todo} toggleComplete={() => toggleComplete(todo.id)} handleEdit={() => editHandler(todo)} handleDelete={() => onDeleteTodo(todo._id)} />
                        ))}
                    </div>
                </div>
            )}
            {otherTodos.length > 0 && (
                <div>
                    <h2 className="text-xl font-semibold mb-2">Other Todos</h2>
                    <div className="space-y-4">
                        {otherTodos.map((todo) => (
                            <TodoItem key={todo.id} todo={todo} toggleComplete={() => toggleComplete(todo.id)} handleEdit={() => editHandler(todo)} handleDelete={() => onDeleteTodo(todo._id)} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TodoList;