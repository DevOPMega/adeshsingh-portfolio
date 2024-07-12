import Navlinks from "./Navlinks"
import Socialmedia from "./Socialmedia"

export default function Footer() {
    return (
        <footer className="w-full bg-slate-900">
            <div className="grid grid-cols-1 w-9/12 py-12 mx-auto gap-10  text-white md:grid-cols-3">
                <div>
                    <h1 className="text-2xl font-bold">Adesh Singh</h1>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-lg font-semibold">Go To</h2>
                    <div className="flex flex-col gap-3">
                        <Navlinks />
                    </div>
                </div> 
                <div className="flex flex-col gap-4">
                    <h2 className="text-lg font-semibold">Social Media</h2>
                    <div className="flex flex-col gap-2">
                        <Socialmedia name={true} />
                    </div>
                </div>
            </div>
        </footer>
    )
}