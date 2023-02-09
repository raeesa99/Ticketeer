import connectToDB from '../../lib/dbConnection';
import sellerTickets, { default as SellerTickets } from '../../models/seller-tickets'

export default async function handler (req, res) {
    await connectToDB();

    let events = await sellerTickets.find({})
    
    res.status(200).json({results: events})
}