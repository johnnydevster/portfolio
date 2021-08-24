import "./index.css";
import { ArrowDown, GitHub, LinkedIn } from "./static/icons";
import Projects from "./Projects";
import { useRef } from "react";

function App() {
  const projectsRef = useRef();
  const topRef = useRef();

  function scrollToTop() {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  function scrollToProjects() {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div>
      <div ref={topRef} className="main h-screen w-full absolute z-0">
        <header className="w-full h-12 z-20 absolute flex items-center justify-between">
          <div className="flex fill-current text-yellow-300">
            <a
              href="https://github.com/johnnydevster"
              target="_blank"
              className="w-6 ml-12 fill-current cursor-pointer hover:text-yellow-200 text-yellow-300"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/johnny-backlund-3b8221179/"
              target="_blank"
              className="w-6 ml-5 fill-current text-yellow-300 cursor-pointer hover:text-yellow-200"
            >
              <LinkedIn />
            </a>
          </div>
        </header>
        <div className="h-full md:h-full md:flex items-center">
          <div className="h-1/2 md:h-full relative md:w-2/5  pt-12 bg-blue-900 bg-opacity-80 flex items-center">
            <div className="text-white w-22 mx-auto p-4 flex flex-col">
              <h2 className="mb-1 text-blue-50">hi there, i'm</h2>
              <h1 className="mb-2 text-4xl sm:text-6xl">Johnny Backlund</h1>
              <h1 className="text-3xl sm:text-4xl xl:text-right">
                <span className="text-yellow-300">
                  front end web developer.
                </span>
              </h1>
              <button className="transition-all ease-in-out duration-400 hover:bg-indigo-500 py-3 px-4 text-sm my-6 rounded-3xl bg-indigo-700 font-semibold self-center">
                Contact me
              </button>
            </div>
          </div>
          <div className="h-1/2 md:h-full md:w-3/5 text-white pt-12 flex items-center">
            <div className="mx-auto">
              <p>I'm a developer currently based in Sundsvall, Sweden.</p>
            </div>
          </div>
          <div
            onClick={scrollToProjects}
            className="absolute text-yellow-500 bottom-6 left-0 right-0 mx-auto w-20"
          >
            <h1 className="text-yellow-300 relative -top-6">Projects</h1>
            <ArrowDown className="transition-all duration-400 ease-in-out bg-blue-700 bg-opacity-20 hover:bg-opacity-60 rounded-full p-2 fill-current text-yellow-400 cursor-pointer animate-bounce" />
          </div>
        </div>
        <div ref={projectsRef}>
          <Projects scrollToTop={scrollToTop} />
        </div>
      </div>
    </div>
  );
}

export default App;
