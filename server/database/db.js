import mongoose from 'mongoose';

const ConnectDB = async () => {
        const URL = process.env.MONGO_URL;
    try {
        mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default ConnectDB;