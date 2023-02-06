import mongoose from 'mongoose';

const connectToDB = async () => {
    // mongoose.set('strictQuery', false);
 await mongoose.connect('mongodb+srv://nina:nina123@ticketeer.haho9jx.mongodb.net/?retryWrites=true&w=majority');
  };
  connectToDB()
//   export default connectToDB