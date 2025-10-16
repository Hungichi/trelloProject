import mongoose from "monggose";
 
const conncectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
        return conn.connection.db;
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}
export default conncectDB;