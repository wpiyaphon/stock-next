import {connect, model, models, Schema} from "mongoose";
const connectionString = 'mongodb+srv://user1:OEi0JkDnAOk0DCxM@cluster0.dx3xv8r.mongodb.net/blogs'

export default async function handler(req, res) {
    await connect(connectionString);

    if (req.method === 'GET') {
        const doc = await Article.find();
        res.status(200).json(doc);
    } else if (req.method === 'POST') {
        const doc = await Article.create(req.body);
        res.status(201).json(doc);
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}


const articleSchema = new Schema({
    title: String,
    content: String
});

const Article = models?.article || model('article', articleSchema);