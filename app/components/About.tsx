
"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const aboutVariants = {
  hidden: {
    x: -400,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
    }
  }
}

export default function About() {
  return (
    <>
      <motion.div
        variants={aboutVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        id="About"
        className="mx-auto bg-black/55 py-12 px-4 rounded-lg">
        <h1 className="pb-8 text-5xl font-bold text-gray-100 flex items-center gap-4">
          About Myself
          <Image src="/img/myself.png" alt="skills" width="64" height="64" />
        </h1>
        <p className="text-gray-300 tracking-wide leading-7">
        I graduated with a Bachelor of Computer Applications (BCA) in 2024. As a passionate and self-taught full-stack developer,
        <span className="bg-yellow-300 text-gray-700 px-2">
         I specialize in React.js, Next.js, Node.js, Express.js, and MongoDB.
          </span> My journey in the tech world is marked by a continuous drive to create innovative projects that solve real-world problems. I thrive on learning new skills and integrating them into my work, ensuring that my development toolkit is always up-to-date and versatile.<br /><br />
          Beyond my personal projects, I actively participate in hackathons and contribute to various open-source initiatives. These experiences have honed my problem-solving abilities and provided me with a platform to collaborate with like-minded individuals. Whether working on team projects or individual endeavors, my goal is to build high-quality software that can enhance user experiences and drive technological advancement.
        </p>
      </motion.div>
    </>
  );
}
