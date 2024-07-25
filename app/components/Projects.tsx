"use client";
import Image from "next/image";
import { techStacks, projects } from "../projects/data";
import { motion } from "framer-motion";

const projectVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.8,
      when: "beforeChildren",
    }
  }
}

const cardVariants = {
  hidden: {
    y: 200,
    scale: 0,
    opacity: 1
  },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.8
    }
  },
  
}

export default function Projects() {
  const backgrounds = ["bghackathon", "bgamazon"];

  return (
    <>
      <motion.div
        variants={projectVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true
        }}
        className="mx-auto">
        <h1
         className="pb-8 text-5xl font-bold text-gray-100 flex items-center gap-4">
          Projects
          <Image src="/img/project.png" alt="skills" width="64" height="64" />
        </h1>
        <div className="py-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              key={i}
              className="border border-slate-900 rounded-lg overflow-hidden"
            >
              <div
                className={`w-full h-48 bg-[url('/img/${project.background}.png')] flex justify-center items-center`}
              >
                <Image
                  src={`/img/${project.img}.png`}
                  alt="skills"
                  width="256"
                  height="256"
                />
              </div>
              <div className="py-4 px-2 bg-slate-900">
                <h3 className="text-xl font-semibold text-gray-200">
                  {project.name}
                </h3>
                <p className="py-2 text-gray-300">
                  {project.techstack.map((tech, i) => (
                    <span key={i}>{tech}, </span>
                  ))}
                </p>
                <a
                  href={`${project.url}`}
                  target="_blank"
                  className="text-red-500"
                >
                  Github
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="hidden">
        <div className="bg-[url('/img/bgamazon.png')]"></div>
        <div className="bg-[url('/img/bghackathon.png')]"></div>
      </div>
    </>
  );
}
