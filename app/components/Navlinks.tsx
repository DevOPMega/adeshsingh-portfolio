"use client";
import Link from "next/link";

export default function Navlinks(props: any) {
  const navLinks = ["", "Services", "Projects", "About", "Login", "Signup"];

  const removeNavShow = () => {
    if (props.setNavShow) {
      props.setNavShow(false);
    }
    document.body.style.overflow = "visible";
  };

  return (
    <>
      {navLinks.map((link, index) => (
        <div key={index} onClick={removeNavShow}>
          <Link
            href={`/${link.toLowerCase()}`}
            className={`rounded-md
              ${
                  link === "Login" &&
                  "border px-2 py-1  hover:bg-white hover:text-black"
              }
              ${
                  link === "Signup" &&
                  "bg-blue-600 px-2 py-1  text-white border border-blue-600 hover:bg-transparent hover:border-white "
              }`}
          >
            {link ? link : "Home"}
          </Link>
        </div>
      ))}
    </>
  );
}
