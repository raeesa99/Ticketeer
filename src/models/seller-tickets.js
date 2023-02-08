import mongoose, {Schema, model} from 'mongoose';


const SellerTickets = new Schema({
    price: {type: Number, required: true},
    username: {type: String, required: true, unique: true},
    event: {type: String, required: true},
    location: {type: String, required: true},
    maxcapacity: {type: Number, required: true},
});


SellerTickets.statics.checkIfExists = async function(username) {
    const result = await this.find({
        $or: [{username}]
    }); 

    if (result[0]) {
        return true;
    } else {
        return false;
    }
}


SellerTickets.statics.findUser = async function(username) {
    const document = await this.find({username});

    return (document[0]);
}

export default mongoose.models?.sellertickets || model('sellertickets', SellerTickets);
// export default mongoose.ticketeer || model('ticketeer');