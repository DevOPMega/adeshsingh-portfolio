"use client";
import { useState } from "react";
export default function Connectform() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        console.log(email + " " + message);
        setEmail("");
        setMessage("");
    }

    return (
        <>
            <input type="email" 
                className=" p-2 border border-gray-500 rounded-md outline-blue-600 text-gray-800  text-lg placeholder:text-gray-500 md:w-4/5 "
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email.."
            />
            <textarea className="h-24 p-2 border border-gray-500 rounded-md outline-blue-600 text-gray-800 text-lg placeholder:text-gray-500 md:w-4/5"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="message.."
            >                
            </textarea>
            <input type="submit" value="Submit"
                className="text-lg py-2 cursor-pointer rounded-lg bg-blue-800 text-white hover:bg-blue-700 md:w-4/5"
                onClick={handleSubmit}
            />
        </>
    )
}