import mongoose from "mongoose";

const mongo_uri = process.env.MONGO_URI 

const connectDB = async()=>{
    const connection = await mongoose.connection.readyState;

    if(connection === 1){
        // Already connected
        return;
    }

    if(connection === 2){
        // Connecting
        return;
    }

    try{
        await mongoose.connect(mongo_uri!,{
            dbName: "Practice",
            bufferCommands: true,
        });

        // The ! (non-null assertion operator) in TypeScript is used to tell the compiler that a variable that could be null or undefined is definitely not null or undefined at that point in the code. 

        console.log("MongoDB connected");
    }
    catch(err){
        console.error(err);
        throw new Error("MongoDB connection failed");
    }

}

export default connectDB;