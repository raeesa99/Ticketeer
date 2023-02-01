const { Schema, model } = require('mongoose');

const User = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

User.statics.checkIfExists = async function(username, email) {
    const result = await this.find({
        $or: [{username}, {email}]
    }); 

    if (result[0]) {
        return true;
    } else {
        return false;
    }
}

User.statics.findUser = async function(username, email) {
    const document = await this.find({username, email});

    return (document[0]);
}

module.exports = model('users', User);