import { useState } from "react";
import TodoList from "@/components/ToDoList";
import Head from "next/head";
import { Fragment } from "react";
import { MongoClient } from "mongodb";

export default function Home(props) {

  const [todos, setTodos] = useState(props.todoList);

  async function fetchTodos() {
    const response = await fetch('/api/get-todos');
    const data = await response.json();
    setTodos(data.todos);
  };

  async function addToDoHandler(enteredToDo) {
    const response = await fetch('/api/add-todo', {
      method: 'POST',
      body: JSON.stringify(enteredToDo),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    if (response.ok) {
      console.log(data);
      fetchTodos();
    }
  }

  const toggleCompleteHandler = (id) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <Fragment>
      <Head>
        <title>ToDo Next App</title>
        <meta name="description" content="You can manage your ToDo lists here!" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <TodoList
          onAddToDo={addToDoHandler}
          onToggleComplete={toggleCompleteHandler}
          todoListData={todos}
        />
      </div>
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect('mongodb+srv://maariraaj:Sharpener2024@cluster0.b76wgpk.mongodb.net/todolist?retryWrites=true&w=majority&appName=Cluster0');
  const db = client.db();
  const todoListData = db.collection('todolist');
  const todoList = await todoListData.find().toArray();
  client.close();

  return {
    props: {
      todoList: todoList.map((todo) => ({
        _id: todo._id.toString(),
        id: todo.id,
        text: todo.text,
        date: todo.date,
        completed: todo.completed
      }))
    },
    revalidate: 1
  };
}