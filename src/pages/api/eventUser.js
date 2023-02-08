import connectToDB from '../../lib/dbConnection';
// import mongoose from 'mongoose';
import { default as EventUser } from '../../models/seller-signup'

// const createEvent = (params) => {
//     //create event in DB
// }

export default async function handler(req, res) {
   await connectToDB();
    
if (req.method !== 'POST') {
    res.status(405).json({message: 'invalid method used', error: true})
}
try {
    const eventuser = new EventUser({
        username: JSON.parse(req.body).username,
        email: JSON.parse(req.body).email,
        password: JSON.parse(req.body).password,
    });
    eventuser.save();

} catch(e){throw e}
res.status(200).json({data: 'event-user saved to db', error: false})
}