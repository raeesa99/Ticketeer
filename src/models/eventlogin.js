import mongoose, {Schema, model} from 'mongoose';


const EventUser = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});


EventUser.statics.checkIfExists = async function(username, password) {
    const result = await this.find({
        $or: [{username}, {password}]
    }); 

    if (result[0]) {
        return true;
    } else {
        return false;
    }
}


EventUser.statics.findUser = async function(username, password) {
    const document = await this.find({username, password});

    return (document[0]);
}

export default mongoose.models?.eventuser || model('eventuser', EventUser);
// export default mongoose.ticketeer || model('ticketeer');