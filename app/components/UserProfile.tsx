"use client"
import { User } from "@/context/context"
import { useContext } from "react"

export default function UserProfile() {
    const {user} = useContext(User);
  return (
    <div>
      {user.email}
    </div>
  )
}
