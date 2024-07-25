"use client"
import { motion } from "framer-motion";

const introVariants = {
    hidden: {
        opacity: 0,
        y: 180
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

export default function Introduction() {
  return (
    <motion.div
      variants={introVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.4, duration: 1.2}}
      className="h-full w-full text-black bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30">
      <div className="flex gap-4 px-5 py-4 mb-4 bg-slate-900 rounded-t-md">
        <span className="w-4 h-4 rounded-full bg-red-500"></span>
        <span className="w-4 h-4 rounded-full bg-green-500"></span>
        <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
      </div>
      <p className="px-5 pb-8 text-lg text-gray-200">
        Hello, I{`'`}m a passionate self-taught full-stack web developer
        dedicated to crafting high-quality digital experiences. With a keen
        interest in modern web technologies, I{`'`}ve honed my skills across
        various domains to build fast, responsive, and secure web applications.
      </p>
    </motion.div>
  );
}
