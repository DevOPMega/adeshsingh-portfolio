import type { FieldValues } from "react-hook-form";

const loginURI: string = process.env.NEXT_PUBLIC_API_LOGIN || "";


export const loginUser = async (data: FieldValues) => {
    const response = await fetch(loginURI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
    return response;
}