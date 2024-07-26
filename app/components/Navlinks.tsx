"use client";
import { useContext } from "react";
import Link from "next/link";
import { User } from "@/context/context";

export default function Navlinks(props: any) {
  const { user } = useContext(User);
  let navlinks = ["About", "Projects", "Skills", "Contact"];

  const removeNavShow = () => {
    if (props.setNavShow) {
      props.setNavShow(false);
    }
    document.body.style.overflow = "visible";
  };

  return (
    <>
      {navlinks.map((link, index) => (
        <Link key={index} href={`#${link}`} onClick={removeNavShow}>
          {link}
        </Link>
      ))}
      <Link
        href="/login"
        className="w-20 rounded-md border text-center py-1 hover:bg-white hover:text-black"
      >
        Login
      </Link>
      <Link
        href="/signup"
        className="w-20 text-center rounded-md bg-blue-600 py-1 text-white border 
        border-blue-600 hover:bg-transparent hover:border-white"
      >
        Signup
      </Link>
      {user.email && (
        <Link
          href="/user"
          className="px-2 py-1 rounded-md bg-blue-600 text-white"
        >
          Profile
        </Link>
      )}
    </>
  );
}
