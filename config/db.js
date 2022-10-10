const mongoose = require("mongoose");

const connectDB = async()=>{
    // thực hiện connect đến database;
    try{
        const DBconfig = "mongodb://localhost/history";
        // const DBconfig = "mongodb+srv://dangtienphu23:phu123456@history.ifodqdi.mongodb.net/history?retryWrites=true&w=majority";
        const connect = await mongoose.connect(DBconfig);
        console.log(`Mongo connect:${connect.connection.host}`)
    }catch(e){
        console.log("Errror connect to  mongoodb ")
    }
}

module.exports = connectDB;
