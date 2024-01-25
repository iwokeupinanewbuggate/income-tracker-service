
const mongoose = require('mongoose');


const uri = "mongodb+srv://orgilr84:Orgil20081124@cluster0.q4cfyfw.mongodb.net/incomeTracker?retryWrites=true&w=majority"


const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Successfully connected to DataBase');
    } catch {
        console.log('Disconnected from DataBase');
    }
}


connect();

module.exports = connect;   