"use client";
import { useState, useContext } from "react";
import { motion } from "framer-motion";
import Navlinks from "./Navlinks";
import Link from "next/link";
import { User } from "@/context/context";
import { enablePageScroll, disablePageScroll } from "scroll-lock";

const logoVariants = {
  hidden: {
    opacity: 0,
    x: 80
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.2,
      duration: 0.8,
      stiffness: 140
    }
  }
}

const sidebarVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw"
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.8
    }
  }
}

const Navbar = () => {
  const [navShow, setNavShow] = useState(false);
  const { user } = useContext(User);

  const handleOnClick = () => {
    console.log(navShow)
    setNavShow(navShow => !navShow);
    if (!navShow) disablePageScroll(); 
    if (navShow) enablePageScroll();
  }
  
  return (
    <div className="bg-slate-900 px-10 pt-7 pb-6  text-white flex justify-between">
      <motion.div
        variants={logoVariants}
        initial="hidden"
        animate="visible"
      >
        <Link href="/">
          <h1 className="text-2xl font-semibold underline lg:pl-20">
            Adesh Singh
          </h1>
        </Link>
      </motion.div>
      <div
        className="flex flex-col gap-1 sm:hidden cursor-pointer"
        onClick={() => {
            handleOnClick()}}
      >
        <span className="w-8 h-1 bg-white rounded-sm"></span>
        <span className="w-8 h-1 bg-white rounded-sm"></span>
        <span className="w-8 h-1 bg-white rounded-sm"></span>
      </div>

      <div className="justify-end items-center gap-8 hidden sm:flex ">
        <Navlinks />     
      </div>
      
      <motion.div
        variants={sidebarVariants}
        initial="hidden"
        animate="visible"
        className={`${
          navShow ? "display" : "hidden"
        } pt-20 px-4 z-10 absolute left-0 top-0 w-64 h-screen bg-slate-950 sm:hidden`}
      >
        <div className="flex flex-col gap-7 text-center">
          <h1 className="text-3xl font-semibold underline">Adesh Singh</h1>
          <Navlinks setNavShow={setNavShow} />
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
