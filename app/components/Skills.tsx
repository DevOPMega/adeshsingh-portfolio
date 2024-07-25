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
    { skillName: "Typescript", class: "bg-red-800 text-white" },
    { skillName: "Tailwind CSS", class: "bg-blue-700 text-white" },
    { skillName: "React JS", class: "bg-yellow-500 text-black" },
    { skillName: "Next JS", class: "bg-green-500 text-black" },
    { skillName: "Node JS", class: "bg-cyan-500 text-black" },
    { skillName: "MongoDB", class: "bg-purple-800 text-white" },
  ];

  return (
    <>
      <div className="mx-auto">
        <h1 className="pb-8 text-5xl font-bold text-gray-100 flex items-center gap-4">
          My Skills
          <Image src="/img/skills.png" alt="skills" width="64" height="64" />
        </h1>
        <div className="py-6 flex justify-center flex-wrap gap-8">
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
              className={`${skill.class} px-4 py-3 rounded-md font-bold text-xl cursor-pointer`}
            >
              {skill.skillName}
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
