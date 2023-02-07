import mongoose, {Schema, model} from 'mongoose';


const EventUser = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});


EventUser.statics.checkIfExists = async function(username, email) {
    const result = await this.find({
        $or: [{username}, {email}]
    }); 

    if (result[0]) {
        return true;
    } else {
        return false;
    }
}


EventUser.statics.findUser = async function(username, email) {
    const document = await this.find({username, email});

    return (document[0]);
}

export default mongoose.models?.eventuser || model('eventuser', EventUser);
// export default mongoose.ticketeer || model('ticketeer');