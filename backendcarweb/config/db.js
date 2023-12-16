const mongoose = require('mongoose');

const connectDb = async ()=>{
    try {
        const conn= await mongoose.connect(process.env.MONOG0DB_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log(`Monogodb connection ${conn.connection.host}`)
    } catch (error) {
        console.log(error.message);
        process.exit();
    }
}


module.exports = connectDb