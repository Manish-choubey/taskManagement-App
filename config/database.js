const mongoose = require('mongoose');

const connectToDatabase = async () => {
    const MONGO_URI = 'mongodb+srv://manish:manish%40123@timemachine.tnkey.mongodb.net/myDatabase?retryWrites=true&w=majority';

    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); 
    }
};

module.exports = connectToDatabase;
