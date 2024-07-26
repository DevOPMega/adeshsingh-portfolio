"use client";
import Image from "next/image";
import Role from "./Role";
import { motion } from "framer-motion";
import { DownloadSVG } from "./Svg";

const nameVariants = {
  hidden: {
    opacity: 0,
    y: -180,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 1.2,
    },
  },
};

export default function Name() {
  return (
    <motion.div variants={nameVariants} initial="hidden" animate="visible">
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
      <div className="mt-6">
        <a
          className="relative bg-black text-gray-100 rounded-lg px-4 py-2 group"
          href="/resume.pdf"
          download="cv"
        >
          <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-emerald-500 to-indigo-600 bg-pink-600 -z-10 blur-sm transition duration-500 animate-tilt group-hover:blur"></div>
          <div className="inline-flex divide-x">
            <span className="pr-6 text-gray-100">Resume</span>
            <span className="flex items-center space-x-1 pl-6 text-indigo-500 group-hover:text-gray-100 transition duration-200">
              <span>Download</span>
              <DownloadSVG />
            </span>
          </div>
        </a>
      </div>
    </motion.div>
  );
}
