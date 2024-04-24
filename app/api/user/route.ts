import { PrismaClient } from "@prisma/client";
import {  NextResponse } from "next/server";

const client = new PrismaClient();

export function GET(){
    return Response.json({
        email:"yashpatel@gmail.com",
        name:"King"
    })
}
export async function POST(req:NextResponse){

    const body = await req.json();
    const response = await client.user.create({
        data:{
            username:body.username,
            password:body.password
        }
    })
    return NextResponse.json({
        body:response.id
    })
}