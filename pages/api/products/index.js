import { connect, model, models, Schema } from "mongoose";
const connectionString = 'mongodb+srv://user1:OEi0JkDnAOk0DCxM@cluster0.dx3xv8r.mongodb.net/stock'

export default async function handler(req, res) {
    await connect(connectionString);

    if (req.method === 'GET') {
        const doc = await Product.find();
        res.status(200).json(doc);
    } else if (req.method === 'POST') {
        const doc = await Product.create(req.body);
        res.status(201).json(doc);
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

const productSchema = new Schema({
    id: Number,
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: [String]
});

const Product = models?.product || model('product', productSchema);