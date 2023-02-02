import connectToDB from '@/lib/dbConnection';
import mongoose from 'mongoose';
import { default as User } from '@/models/customer'

const createEvent = (params) => {
    //create event in DB
}

export default function handler(req, res) {
    connectToDB();
    
if (req.method !== 'POST') {
    res.status(405).json({message: 'invalid method used', error: true})
}
const user = new UserModel({
    text: JSON.parse(req.body).user
});
user.save();
res.status(200).json({data: 'user saved to db', error: false})

res.status(200).json({ name: 'John Doe' })
}