"use client"
import Image from "next/image";
import { motion } from "framer-motion";

const skillBoxVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate:(index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index*0.05
    }
  }),
  hover: {
    y: [0, -5, 0, 5, 0],
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 1.6,
      repeat: Infinity
    }
  }
};

export default function Skills() {
  const skills = [
    "HTML", "CSS", "JavaScript", "ReactJS", "NextJS", "Redux", "Bootstrap", "Tailwind CSS", "TypeScript", "NodeJS", "ExpressJS", "MongoDB", "SQL"
  ]

  return (
    <>
      <div id="Skills" className="mx-auto">
        <h1 className="pb-8 text-5xl font-bold text-gray-100 flex items-center gap-4">
          My Skills
          <Image src="/img/skills.png" alt="skills" width="64" height="64" />
        </h1>
        <div className="py-6 flex justify-center flex-wrap gap-4">
          {skills.map((skill, i) => (
            <motion.div
              variants={skillBoxVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true
              }}
              whileHover="hover"
              custom={i}
              key={i}
              className="px-[3px] py-[8px] rounded-[10px] bg-gradient-to-r from-indigo-700 via-lime-600 to-emerald-700 cursor-pointer"
            >
              <span
                className="rounded-[7px] bg-black px-3 py-2 "
              >{skill}</span>              
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
