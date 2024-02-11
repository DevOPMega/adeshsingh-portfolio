import Image from "next/image"

export default function AboutPage(){

    const skills = [
        {skillName: "React JS", imgUrl: "reactjs"},
        {skillName: "Next JS", imgUrl: "nextjs"},
        {skillName: "Node JS", imgUrl: "nodejs"},
        {skillName: "Typescript", imgUrl: "typescript"},
        {skillName: "Tailwind CSS", imgUrl: "tailwindcss"},
        {skillName: "MongoDB", imgUrl: "mongodb"}

    ]

    return (
        <>
            <div className="w-5/6 my-16 mx-auto md:w-1/2">
                <h1 className="pb-8 text-5xl font-bold text-gray-100 flex items-center gap-4">About Myself
                <Image src="/img/myself.png" alt="skills" width="64" height="64"/>
                </h1>
                <p className="text-gray-300 text-lg">Greetings! I'm on the cusp of graduating with a Bachelor of Computer Application in 2024, and my heart beats for web development. <span className="bg-yellow-300 text-gray-700 px-2">The MERN stack (MongoDB, Express.js, React.js, and Node.js) is my playground</span>, where I conjure up dynamic and engaging web experiences. My journey isn't just academic; I've been actively honing my skills through diverse projects. <br /> <br />
                <span className="bg-yellow-300 text-gray-700 px-2">From building e-commerce platforms to orchestrating hackathons and showcasing my creativity in personal portfolio web applications</span>, I've embraced a hands-on approach. React JS, Next JS, Typescript, Node JS, Tailwind CSS, and MongoDB are my weapons of choice, and I wield them with precision and enthusiasm. I'm eager to leverage my knowledge and passion to collaborate on exciting projects and contribute to the ever-evolving world of web development.</p>
                <h2 className="py-8 font-bold text-3xl text-gray-100 flex items-center gap-4">My Skills
                <Image src="/img/skills.png" alt="skills" width="50" height="50"/>
                </h2>
                <div className="py-6 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
                    {skills.map((skill, i) => (
                        <div className="px-2 py-4 flex flex-col justify-center items-center bg-red-200 rounded-xl" key={i}>
                            <Image src={`/img/${skill.imgUrl}.png`} alt={skill.skillName} width="64" height="64"/> 
                            <p className="pt-2 text-lg font-medium text-gray-800">{skill.skillName}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}