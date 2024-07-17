import type { FieldValues } from "react-hook-form";

const signupURI: string = process.env.NEXT_PUBLIC_API_REGISTER || "";


export const signupUser = async (data: FieldValues) => {
    const response = await fetch(signupURI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });
    return response;
}