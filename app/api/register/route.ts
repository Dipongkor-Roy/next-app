import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"
import {z} from "zod";

const schema=z.object({   //checking validation
    email:z.string().email(),
    password:z.string().min(5)
})
export async function POST(request:NextRequest){
    const body=await request.json();
    const validation=schema.safeParse(body);
    if(!validation.success){
        return NextResponse.json(validation.error.errors,{status:400})
    }
    const user=await prisma.user.findUnique({where:{email:body.email}}); //check user email in db exist or not
    if(user)
        return NextResponse.json({error:'User Already Exist'},{status:400});
    const hashedPassword=await bcrypt.hash(body.password,10) //long is better like 10
    const newUser= await prisma.user.create({
        data:{
            email:body.email,
            hashedPassword
        }
    });

    return NextResponse.json({email:newUser.email});
}