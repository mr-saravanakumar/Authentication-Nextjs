import connectDB from '@/app/lib/mongodb';
import users from "@/app/models/user";
import {NextResponse} from "next/server";
import bcrypt from "bcrypt";

export async function POST(req)
{
     const {name,age,password,photo,userId}=await req.json();
     console.log(userId);
     const exuser=await users.findOne({name:name});
     if(exuser)
     {
          console.log("try new");
          return NextResponse.json({message:"username already exists"})
     }
     const hashpassword=await bcrypt.hash(password,10);
     try{
      await connectDB();
      await users.create({name,age,password:hashpassword,photo,userId});
      return NextResponse.json({message:"Register  successfully..."})
     }catch(err){
      return NextResponse.json({message:err.message});
     }
}
