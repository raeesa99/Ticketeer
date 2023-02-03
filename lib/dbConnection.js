import mongoose from 'mongoose';

const connectToDB = async () => {
    // mongoose.set('strictQuery', false);
 await mongoose.connect('mongodb+srv://raeesa:raeesa123@ticketeer.haho9jx.mongodb.net/Ticketeer?retryWrites=true&w=majority');
  };

  export default connectToDB