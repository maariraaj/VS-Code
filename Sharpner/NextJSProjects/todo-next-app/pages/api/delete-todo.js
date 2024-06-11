import { MongoClient, ObjectId } from "mongodb";

async function handler(req, res) {
    if (req.method === 'DELETE') {
        const { id } = req.body;

        const client = await MongoClient.connect('mongodb+srv://maariraaj:Sharpener2024@cluster0.b76wgpk.mongodb.net/todolist?retryWrites=true&w=majority&appName=Cluster0');
        const db = client.db();
        const todoList = db.collection('todolist');

        const result = await todoList.deleteOne({ _id: new ObjectId(id) });

        client.close();

        res.status(200).json({ message: 'Todo deleted successfully!', result });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}

export default handler;