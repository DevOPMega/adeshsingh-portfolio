"use client";
import { useState } from "react";
import Navlinks from "./Navlinks"

const Navbar = () => {
    const [navShow, setNavShow] = useState(false);

    return (
        <div className="bg-slate-900 px-10 pt-7 pb-6  text-white flex justify-between">
            <div>
                <h1 className="text-2xl font-semibold underline lg:pl-20">Adesh Singh</h1>
            </div>  
            <div className="flex flex-col gap-1 sm:hidden cursor-pointer" onClick={() => {
                setNavShow(navShow => !navShow);
                document.body.style.overflow = navShow?"visible":"hidden";
            }}>
                <span className="w-8 h-1 bg-white rounded-sm"></span>
                <span className="w-8 h-1 bg-white rounded-sm"></span>
                <span className="w-8 h-1 bg-white rounded-sm"></span>
            </div>
            
            <div className="justify-end items-center gap-8 hidden sm:flex ">
                <Navlinks />
            </div>
            <div className={`${navShow?"display":"hidden"} pt-20 px-4 z-10 absolute left-0 top-0 w-1/2 h-screen bg-slate-950 sm:hidden`}>
                <div className="flex flex-col gap-7 text-center">
                    <h1 className="text-3xl font-semibold underline">Adesh Singh</h1>
                    <Navlinks setNavShow={setNavShow}/>
                </div>
            </div>
        </div>
    )
};

export default Navbar;