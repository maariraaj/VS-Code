import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === 'GET') {
        const client = await MongoClient.connect('mongodb+srv://maariraaj:Sharpener2024@cluster0.b76wgpk.mongodb.net/todolist?retryWrites=true&w=majority&appName=Cluster0');
        const db = client.db();

        const todoList = db.collection('todolist');

        const todos = await todoList.find().toArray();

        client.close();

        res.status(200).json({
            todos: todos.map(todo => ({
                _id: todo._id.toString(),
                id: todo.id,
                text: todo.text,
                date: todo.date,
                completed: todo.completed
            }))
        });
    }
}

export default handler;