"use server"

import { PrismaClient } from "@prisma/client"

const client = new PrismaClient();

export async function signUp(email:string,password:string){
    try{
        await client.user.create({
            data:{
                username: email,
                password: password
            }
        })
        return true
    }catch(e){
        return false
    }

}