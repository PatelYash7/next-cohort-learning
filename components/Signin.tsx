"use client"

import { signUp } from "@/app/action/user";
import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";

export const SigninComponent = ()=>{
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");
    return <div className="h-screen flex justify-center flex-col">
    <div className="flex justify-center">
    <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
            <div>
                <div className="px-10">
                    <div className="text-3xl font-extrabold">
                        Sign in
                    </div>
                </div>
                <div className="pt-2">
                    <LabelledInput setter={setUsername} label="Username" placeholder="harkirat@gmail.com" />
                    <LabelledInput setter={setPassword} label="Password" type={"password"} placeholder="123456" />
                    <button onClick={()=>{signUp(username,password)}} type="button" className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign in</button>
                </div>
            </div>
        </a>
    </div>
</div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
    setter: Dispatch<SetStateAction<string>>;
}

function LabelledInput({ label, placeholder, type,setter }: LabelledInputType) {
    return <div>
        <label  className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input onChange={(e)=>(setter(e.target.value))} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}