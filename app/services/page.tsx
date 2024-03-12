import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Service",
    description: "Service provided by Adesh Singh"
}

export default function ServicePage() {

    const services = [
        {serviceName: "Web Development", imgName: "website-development"},
        {serviceName: "Digital Marketing", imgName: "digital-marketing"},
        {serviceName: "Graphic Design", imgName: "graphic-design"},        
    ]

    return (
        <>
            <div className="w-5/6 my-16 mx-auto md:w-1/2">
                <h1 className="pb-8 text-5xl font-bold text-gray-100">Services</h1>
                <p className="text-gray-300 text-lg">Need a fresh, engaging website? Want to skyrocket your online presence? Look no further. We offer a full spectrum of digital solutions, from crafting eye-catching interfaces through frontend development to tailoring targeted marketing campaigns. Our backend developers build robust, secure frameworks, while our graphic designers conjure up brand identities that leave a lasting impression. Say goodbye to one-size-fits-all packages – we collaborate closely with you, understanding your unique needs and crafting solutions that drive success. Whether you{`'`}re a budding startup or an established corporation, our versatile skillset catapults your online presence to new heights. So, skip the endless hiring hassle and tap into our on-demand expertise. Let{`'`}s turn your digital vision into reality, together.</p>
                <h2 className="py-8 font-semibold text-3xl text-gray-100">Provide services such as</h2>
                <div className="grid grid-cols-21 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, i) => (
                        <div className="p-2 flex flex-col items-center border-4 border-gray-700 rounded-lg bg-sky-300 shadow-lg shadow-slate-500" key={i}>
                            <Image src={`/img/${service.imgName}.png`} alt={service.imgName} width="128" height="128"/>
                            <p className="pt-2 text-lg font-medium text-gray-700">{service.serviceName}</p>
                        </div>
                    ))}
                    
                </div>
            </div>
        </>
    )
}