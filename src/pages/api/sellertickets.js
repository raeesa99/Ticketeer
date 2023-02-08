import connectToDB from '../../lib/dbConnection';
// import mongoose from 'mongoose';
import { default as SellerTickets } from '../../models/seller-tickets'

// const createEvent = (params) => {
//     //create event in DB
// }

export default async function handler(req, res) {
   await connectToDB();
    
if (req.method !== 'POST') {
    res.status(405).json({message: 'invalid method used', error: true})
}
try {
    const sellertickets = new SellerTickets({
        price: JSON.parse(req.body).price,
        username: JSON.parse(req.body).username,
        event: JSON.parse(req.body).event,
        location: JSON.parse(req.body).location,
        maxcapacity: JSON.parse(req.body).maxcapacity,
    });
    sellertickets.save();

} catch(e){throw e}
res.status(200).json({data: 'tickets added to db', error: false})
}