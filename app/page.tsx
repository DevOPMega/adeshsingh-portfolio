import Socialmedia from "./components/Socialmedia";
import Connectform from "./components/Connectform";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Introduction from "./components/Introduction";
import Name from "./components/Name";
import About from "./components/About";

export default function Page() {
  return (
    <>
      <div className="px-6 py-10 mx-auto md:w-9/12">
        <div className="pt-24 pb-20 grid grid-cols-1  justify-between gap-8 md:grid-cols-2 sm:pt-28">
          <Name />
          <Introduction />
        </div>

        <div className="px-6 py-10 mx-auto ">
          <About />
        </div>
        
        <div className="px-6 py-10 mx-auto ">
          <Projects />
        </div>

        <div className="px-6 py-10 mx-auto ">
          <Skills />
        </div>


        {/* Connect to me section */}
        <div id="Contact" className="py-10 ">
          <h2 className="pt-8 pb-12 underline text-5xl font-semibold text-center">
            Connect to Me
          </h2>
          <div className="grid grid-cols-1 gap-8 justify-between md:grid-cols-2">
            <div className="py-8 flex flex-col gap-4">
              <Socialmedia name={true} />
            </div>
            <div className="py-8 flex flex-col gap-4 md:items-center">
              <Connectform />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
