import { NextRequest } from "next/server";


export function GET(){
    return Response.json({
        email:"yashpatel@gmail.com",
        name:"King"
    })
}
export function POST(req:NextRequest){

    return Response.json({
        message:"You are Logged In"
    })
}