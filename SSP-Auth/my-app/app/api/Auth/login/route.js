import connectDB from '@/app/lib/mongodb';
import users from "@/app/models/user";
import {NextResponse} from "next/server";
import bcrypt from "bcrypt";


export async function POST(req)
{
     const {name,password}=await req.json();
     console.log(name);
     const exuser=await users.findOne({name:name});
     if(exuser)
     {
        try{
         await connectDB();
         const userpassword = await bcrypt.compare(password,exuser.password);
         if(userpassword)
         {
            return NextResponse.json({message:"logged successfully..."})
         }
         return NextResponse.json({message:"Incorrect password..."});
         
        }catch(err){
         return NextResponse.json({message:err.message});
        }
     }
     else
     {
      return NextResponse.json({message:"user not found..."});
     }
     
}
