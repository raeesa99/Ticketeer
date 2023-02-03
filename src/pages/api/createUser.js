import connectToDB from '@/src/lib/dbConnection';
import mongoose from 'mongoose';
import { default as User } from '@/src/models/customer'

// const createEvent = (params) => {
//     //create event in DB
// }

export default async function handler(req, res) {
   await connectToDB();
    
if (req.method !== 'POST') {
    res.status(405).json({message: 'invalid method used', error: true})
}
const user = new User({
    username: JSON.parse(req.body).username,
    email: JSON.parse(req.body).email,
    password: JSON.parse(req.body).password,
});
user.save();
res.status(200).json({data: 'user saved to db', error: false})
}