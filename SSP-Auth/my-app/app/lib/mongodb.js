import { error } from 'console';
import mongoose from 'mongoose';

const connectDB=async()=>{

    try{
        await mongoose.connect("mongodb://localhost:27017/SSPPROJECT");
        console.log('Connect....')
    } catch(error){
        console.log(error)
    }
}

export default connectDB;