import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
    if (req.method === 'PUT') {
        const { id, completed } = req.body;

        const client = await MongoClient.connect('mongodb+srv://maariraaj:Sharpener2024@cluster0.b76wgpk.mongodb.net/todolist?retryWrites=true&w=majority&appName=Cluster0');
        const db = client.db();

        const todoList = db.collection('todolist');

        const result = await todoList.updateOne(
            { _id: new ObjectId(id) },
            { $set: { completed: completed } }
        );

        client.close();

        res.status(200).json({ message: 'ToDo updated successfully!', result });
    }
}

export default handler;