import Link from "next/link";
import { headers } from "next/headers";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Not Found"
}

export default async function NotFound() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col place-content-center text-center space-y-4">
            <h1>404 Not Found :(</h1>
            <h2>Not Found Given URL Path</h2>
        </div>
    )
}