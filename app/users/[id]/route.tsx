import schema from "@/app/api/products/schema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server"

export async function GET (request:NextRequest,{params}:{params:{id:string}}){
    const user=await prisma.user.findUnique({
        where:{id:parseInt(params.id)}
    })
    if(!user){
        return NextResponse.json({error:"user not found"},{status:404})
    }
    return NextResponse.json(user)
}
export async function PUT(request:NextRequest,{params}:{params:{id:number}}){

    const body=await request.json();
    const validation= schema.safeParse(body);
    if(!validation.success){
        return NextResponse.json(validation.error.errors,{status:404})
    }
    return NextResponse.json({id:2,name:body.name,price:body.price})
}
export function DELETE(request:NextRequest,{params}:{params:{id:number}}){
    if(params.id>10){
        return NextResponse.json({error:"user not found"},{status:404})
    }
    return NextResponse.json({},{status:200})

}