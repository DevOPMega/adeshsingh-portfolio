"use client"
import Image from "next/image";
import Role from "./Role";
import { motion } from "framer-motion";

const nameVariants = {
    hidden: {
        opacity: 0,
        y: -180
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2,
            duration: 1.2
        }
    }
}

export default function Name() {
  return (
    <motion.div
        variants={nameVariants}
        initial="hidden"
        animate="visible"
    >
      <h1 className="text-7xl font-semibold">
        <span className="text-5xl flex gap-4 items-center">
          I{`'`} am
          <Image src="/img/myself.png" alt="skills" width="64" height="64" />
        </span>
        <span className="uppercase block py-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 via-sky-300 to-teal-600 animate-pulse">
          Adesh Singh
        </span>
      </h1>
      <Role />
      <div className="mt-5">
        <motion.a
          className="bg-blue-600 text-white text-lg rounded-md px-4 py-2"
          href="/resume.pdf"
          download="cv"
        >
          Resume
        </motion.a>
      </div>
    </motion.div>
  );
}
