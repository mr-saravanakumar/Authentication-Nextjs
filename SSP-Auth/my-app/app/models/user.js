import mongoose, { Schema } from "mongoose";

const userScheme=new Schema({
    name:{
        type: String,
        required: true,
    },
    age:{
        type:Number,
        required: true,
    },
     password:{
        type:String,
        required: true,
     },
     photo:{
        type:String,
     },
     userId:{
        type:Number,
      //   required: true,
     }
  
})

const userModel= mongoose.models.authentications|| mongoose.model('authentications',userScheme);

export default userModel;