import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://maariraaj:Sharpener2024@cluster0.b76wgpk.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
        const db = client.db();

        const meetupsCollections = db.collection('meetups');

        const result = await meetupsCollections.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: 'Meetup inserted!' });
    }
}


export default handler;