const connectToDB = async () => {
    // mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb+srv://Admin:rcS4abZWARCvYb48@cluster0.ia9cnic.mongodb.net/introdb?retryWrites=true&w=majority');
  };

  export default connectToDB