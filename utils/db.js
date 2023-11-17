import mongoose from "mongoose";


let isCOnnected = false

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if(isCOnnected){
        console.log('Mongo db is connected');
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_prompt', 
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isCOnnected=true
        
        console.log('Mongo db is connected');
    } catch (error) {
        
    }
}