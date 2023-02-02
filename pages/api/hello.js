import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI, (err) => {
    console.log(err);
});

const createEvent = (params) => {
    //create event in DB
}

export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe' })


if (req.method == 'POST') {
    createEvent();
} {
    viewEvent();
}

}