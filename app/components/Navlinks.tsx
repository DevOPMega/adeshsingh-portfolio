"use client";
import Link from "next/link";

export default function Navlinks(props:any) {
    const navLinks = ["", "Services", "Projects", "About"];

    return (
        <>
            {navLinks.map((link, index) => (
                <div  onClick={() => {
                    if (props.setNavShow) {
                        props.setNavShow(false);
                    }
                    document.body.style.overflow = "visible";
                }} >
                    <Link key={index} href={`/${link.toLowerCase()}`}>{link ? link : "Home"}</Link>
                </div>

            ))}
        </>
    )

}