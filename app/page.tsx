"use client";
import {useReducer, useEffect} from "react";
import Image from "next/image";
import Socialmedia from "./components/Socialmedia";
import Connectform from "./components/Connectform";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

type RoleObject = {
  role: string; 
  index: number;
}

const roles = ["Frontend Developer", "Backend Developer", "Fullstack Developer"];

const reducer = (state:RoleObject, action:{type: string}):RoleObject => {
  switch(action.type) {
    case "roleIncrement":
      return {...state, role: roles[state.index]}; 
    case "indIncrement":
      return {...state, index: (state.index == 2)?0:state.index+1};
  }
  return state;
}

export default function Page() {
  
  const [state, dispatch] = useReducer(reducer, {role: "Frontend Developer", index: 1});
  
  useEffect(() => {
    const intervalID = setInterval(() => {
      dispatch({type:"roleIncrement"});
      dispatch({type:"indIncrement"});
    }, 3000);

    return () =>  clearInterval(intervalID);
  }, [state]);

  return (
    <>      
      <div className="px-6 py-10 mx-auto md:w-9/12">
        <div className="pt-24 pb-20 grid grid-cols-1  justify-between gap-8 md:grid-cols-2 sm:pt-28">
          <div>
            <h1 className="text-7xl font-semibold">
              <span className="text-5xl flex gap-4 items-center">
                I{`'`} am
              <Image src="/img/myself.png" alt="skills" width="64" height="64"/>
              </span>
              <span className="uppercase block py-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 via-sky-300 to-teal-600 animate-pulse">Adesh Singh</span>
            </h1>
            <h3 className="text-2xl font-medium ">{state.role}</h3>
            <div className="mt-5">
              <a 
               className="bg-blue-600 text-white text-lg rounded-md px-4 py-2"
                href="/resume.pdf" download="cv">Resume</a>
            </div>
          </div>
          <div className="rounded-lg border-8 border-slate-900 bg-stone-900">
            <div className="flex gap-4 px-5 py-4 mb-4 bg-slate-900">
              <span className="w-4 h-4 rounded-full bg-red-500"></span>
              <span className="w-4 h-4 rounded-full bg-green-500"></span>
              <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
            </div>
            <p className="px-5 pb-8 text-lg text-gray-300">
            Hello, I{`'`}m a passionate self-taught full-stack web developer dedicated to crafting high-quality digital experiences. With a keen interest in modern web technologies, I{`'`}ve honed my skills across various domains to build fast, responsive, and secure web applications.
            </p>
          </div>
        </div>

        <div className="px-6 py-10 mx-auto ">
          <Projects />          
        </div>

        <div className="px-6 py-10 mx-auto ">
          <Skills />          
        </div>

        {/* Connect to me section */}
        <div className="py-10 ">
          <h2 className="pt-8 pb-12 underline text-5xl font-semibold text-center">Connect to Me</h2>
          <div className="grid grid-cols-1 gap-8 justify-between md:grid-cols-2">
            <div className="py-8 flex flex-col gap-4">
              <Socialmedia name={true}/>
            </div>
            <div className="py-8 flex flex-col gap-4 md:items-center">
              <Connectform />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
