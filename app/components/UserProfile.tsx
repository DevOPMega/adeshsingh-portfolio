"use client";
import { User } from "@/context/context";
import { useContext, useEffect } from "react";

export default function UserProfile() {
  const { user, setUser } = useContext(User);

  const userInfoURI = process.env.NEXT_PUBLIC_API_USERINFO || "";

  useEffect(() => {
    const getUserInfo = async () => {
      const response = await fetch(userInfoURI, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const parseResponse = await response.json();
      console.log(parseResponse)
      setUser({
        ...user,
        email: parseResponse.email,
        name: parseResponse.name,
        phoneNo: parseResponse.phoneNo
      })
    };
    getUserInfo();
  }, []);

  return (
    <div>
      <span>{user.email}</span>
      <span>{user.name}</span>
      <span>{user.phoneNo}</span>
    </div>
  ) 
}
