import Image from "next/image";
import { Metadata } from "next";
import { techStacks, projects } from "./data";

export const metadata: Metadata = {
    title: "Projects",
    description: "Projects created by Adesh Singh"
}

export default function ProjectsPage() {
    const backgrounds = ["bghackathon", "bgamazon"];

    return (
        <>
            <div className="w-5/6 my-16 mx-auto md:w-1/2">
                <h1 className="pb-8 text-5xl font-bold text-gray-100 flex items-center gap-4">Projects
                    <Image src="/img/project.png" alt="skills" width="64" height="64" />
                </h1>
                <p className="text-gray-300 text-lg">
                    I{`'`}ve used the MERN(MongoDB, Express JS, React JS, Node JS) tech stack for building my projects. Let{`'`}s see its benefit before seeing my projects that utilize this modern, secure and responsive technology.
                </p>
                <h2 className="pt-10 text-2xl font-bold text-gray-100 flex items-center gap-4">Tech Stacks
                    <Image src="/img/techstack.png" alt="skills" width="32" height="32" />
                </h2>
                <ul className="pt-4 flex flex-col gap-4">
                    {techStacks.map((techstack, i) => (
                        <li key={i}>
                            <span className="font-semibold  text-lg">{techstack.tech} : </span>
                            <span className="text-gray-300 text-lg">
                                {techstack.info}
                            </span>
                        </li>
                    ))}
                </ul>
                <h2 className="pt-10 text-2xl font-bold text-gray-100">My Projects</h2>
                <div className="py-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {projects.map((project, i) => (
                        <div key={i} className="border border-slate-900 rounded-lg overflow-hidden">
                            <div className={`w-full h-48 bg-[url('/img/${project.background}.png')] flex justify-center items-center`}>
                                <Image src={`/img/${project.img}.png`} alt="skills" width="256" height="256" />
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
                                <a href={`${project.url}`} target="_blank" className="text-red-500">Github</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hidden">
                <div className="bg-[url('/img/bgamazon.png')]"></div>
                <div className="bg-[url('/img/bghackathon.png')]"></div>
            </div>
        </>
    )
}