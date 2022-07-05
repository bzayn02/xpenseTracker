import mongoose from 'mongoose';

export const dbConnection = () => {
    try {
        const connString = 'mongodb://localhost:27017/expenses_tracker';
        const con = mongoose.connect(connString);
        con && console.log('Connected to MongoDB.');
    } catch (error) {
        console.log(error);
    }
};
