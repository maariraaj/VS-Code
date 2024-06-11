import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://maariraaj:Sharpener2024@cluster0.b76wgpk.mongodb.net/todolist?retryWrites=true&w=majority&appName=Cluster0');
        const db = client.db();

        const todoList = db.collection('todolist');

        const result = await todoList.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: 'New ToDo added successfully!' });
    }
}


export default handler;