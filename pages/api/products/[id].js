import { connect, model, models, Schema } from "mongoose";
// const connectionString = 'mongodb+srv://user1:OEi0JkDnAOk0DCxM@cluster0.dx3xv8r.mongodb.net/blogs'
const connectionString = process.env.MONGODB_URI_STOCK

export default async function handler(req, res) {
    await connect(connectionString);
    console.log("req.method: ", req.method)
    console.log("req.query.id", req.query.id)

    const id = req.query.id
    if (req.method === 'GET') {
        // Get only one document
        const doc = await Product.findOne({ _id: id })
        res.status(200).json(doc)
    } else if (req.method === 'DELETE') {
        const deletedDoc = await Product.deleteOne({ _id: id })
        res.status(200).json(deletedDoc)
    } else {
        res.setHeader('Allow', ['GET', 'DELETE'])
        res.status(405).end(`Method ${req.method} Not Allowed`)

    }
}

const productSchema = new Schema({
    id: Number,
    title: String,
    price: Number
});

console.log("Mongoose Models", models)
const Product = models?.product || model('product', productSchema);