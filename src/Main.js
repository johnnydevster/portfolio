import ProjectCard from "./ProjectCard";
import projects from "./projectsData";
import Navigation from "./Navigation";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import SocialBar from "./SocialBar";
import { GitHub, LinkedIn, ArrowDown } from "./static/icons";
import { Hamburger } from "./static/icons";
import { useState, useRef, useEffect } from "react";
import { useInView, InView } from "react-intersection-observer";

function Main(props) {
  const [mainSectionInView, setMainSectionInView] = useState(false);

  const [projectsRef, projectsInView, projectsEntry] = useInView({
    threshold: 0.1,
  });
  const [aboutMeRef, aboutMeInView, aboutMeEntry] = useInView({
    threshold: 0.5,
  });
  const [contactRef, contactInView, contactEntry] = useInView({
    threshold: 0.5,
  });
  const [backToTopRef, backToTopInView, backToTopEntry] = useInView({
    threshold: 0.5,
  });

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          props.setShowSideBar(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const sidebarRef = useRef(null);
  useOutsideAlerter(sidebarRef);

  function scrollToProjects() {
    projectsEntry.target.scrollIntoView({ behavior: "smooth" });
    props.setShowSideBar(false);
  }

  function scrollToAboutMe() {
    aboutMeEntry.target.scrollIntoView({ behavior: "smooth" });
    props.setShowSideBar(false);
  }

  function scrollToContact() {
    contactEntry.target.scrollIntoView({ behavior: "smooth" });
    props.setShowSideBar(false);
  }

  return (
    <div className="-mt-12 md:mt-0 projects text-blue-50 text-xl relative inset-0 pt-3 flex-col">
      <header
        className={`transform transition-all duration-400 ease-in-out w-full top-0 ${
          mainSectionInView ? "md:-translate-y-12" : ""
        } h-12 fixed flex items-center`}
      >
        <div className="flex w-full justify-between fill-current text-yellow-300">
          <div className="ml-5 flex items-center">
            <a
              href="https://github.com/johnnydevster"
              target="_blank"
              rel="noreferrer"
              className="w-6 fill-current cursor-pointer hover:text-yellow-200 text-yellow-300"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/johnny-backlund-3b8221179/"
              target="_blank"
              rel="noreferrer"
              className="w-6 ml-5 fill-current text-yellow-300 cursor-pointer hover:text-yellow-200"
            >
              <LinkedIn />
            </a>
          </div>

          <nav>
            {/*Medium size or larger navbar */}
            <ul className="text-lg w-80 mr-20 flex flex-nowrap hidden md:flex transition-all transform text-base text-white font-semibold justify-between">
              <li
                onClick={scrollToProjects}
                className="duration-100 ease-in-out cursor-pointer hover:bg-blue-900 hover:bg-opacity-50 py-1 px-2 rounded"
              >
                Projects
              </li>
              <li
                onClick={scrollToAboutMe}
                className="duration-100 ease-in-out cursor-pointer hover:bg-blue-900 hover:bg-opacity-50 py-1 px-2 rounded"
              >
                About Me
              </li>
              <li
                onClick={scrollToContact}
                className="duration-100 ease-in-out cursor-pointer hover:bg-blue-900 hover:bg-opacity-50 py-1 px-2 rounded"
              >
                Contact
              </li>
            </ul>
            {/*Mobile friendly navbar */}
            <div ref={sidebarRef}>
              <button
                onClick={() => props.setShowSideBar(!props.showSideBar)}
                className={`${
                  props.showSideBar ? "rotate-90" : ""
                } transition-all duration-200 ease-in-out hamburger md:hidden w-10 h-10 p-1 absolute right-5 top-1/2 transform -translate-y-1/2 hover:bg-blue-900 hover:bg-opacity-50 cursor-pointer rounded`}
              >
                <Hamburger />
              </button>
              <ul
                className={`transition-all duration-300 ease-in-out transform ${
                  props.showSideBar ? "translate-x-0" : "translate-x-full"
                } sidebar fixed h-screen w-1/2 top-0 right-0 flex flex-col justify-center text-2xl`}
              >
                <li
                  onClick={scrollToProjects}
                  className={`${
                    projectsInView ? "bg-yellow-400" : ""
                  } px-4 mb-3 duration-100 ease-in-out cursor-pointer hover:bg-yellow-300 hover:bg-opacity-30 bg-opacity-30 py-1 px-2 rounded`}
                >
                  Projects
                </li>
                <li
                  onClick={scrollToAboutMe}
                  className={`${
                    aboutMeInView && !projectsInView ? "bg-yellow-400" : ""
                  } px-4 mb-3 duration-100 ease-in-out cursor-pointer hover:bg-yellow-300 bg-opacity-30 hover:bg-opacity-30 py-1 px-2 rounded`}
                >
                  About Me
                </li>
                <li
                  onClick={scrollToContact}
                  className={`${
                    contactInView && !aboutMeInView ? "bg-yellow-400" : ""
                  } px-4 mb-3 duration-100 ease-in-out cursor-pointer hover:bg-yellow-300 bg-opacity-30 hover:bg-opacity-30 py-1 px-2 rounded`}
                >
                  Contact
                </li>
                <li
                  onClick={props.scrollToTop}
                  className={`px-4 duration-100 ease-in-out cursor-pointer hover:bg-yellow-300 hover:bg-opacity-30 py-1 px-2 rounded`}
                >
                  Back to top
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <InView
        threshold={0.15}
        onChange={(inView, entry) => {
          setMainSectionInView(inView);
        }}
      >
        {({ inView, ref, entry }) => (
          <div
            ref={ref}
            className="relative md:-left-14 max-w-2xl mx-auto px-3 pt-3 sm:px-5 sm:pt-5 flex"
          >
            <SocialBar mainSectionInView={mainSectionInView} />
            <div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1>Some of my recent projects</h1>
                </div>
                <div className="w-full border-b-2 border-blue-400 border-opacity-20 ml-6 pt-1"></div>
              </div>
              <section ref={projectsRef} id="projects">
                {projects.map((project, i) => {
                  return (
                    <ProjectCard
                      key={i}
                      projectNo={i}
                      name={project.name}
                      description={project.description}
                      paragraph={project.paragraph}
                      src={project.src}
                      tech={project.tech}
                      repolink={project.repolink}
                      website={project.website}
                    />
                  );
                })}
              </section>
              <div ref={aboutMeRef}>
                <AboutMe />
              </div>
              <div ref={contactRef} className="">
                <Contact />
              </div>
              <div
                ref={backToTopRef}
                className="mt-5 flex-col flex items-center justify-center"
              >
                <button
                  onClick={props.scrollToTop}
                  className="text-yellow-300 hover:text-yellow-200"
                >
                  <div className="transform rotate-180">
                    <ArrowDown className="transition-all mx-auto mb-12 duration-400 ease-in-out bg-blue-700 bg-opacity-20 hover:bg-opacity-60 rounded-full p-2 fill-current text-yellow-400 cursor-pointer animate-bounce" />
                  </div>
                  <h1 className="text-center relative -top-6">Back to top</h1>
                </button>
              </div>
            </div>
            <Navigation
              mainSectionInView={mainSectionInView}
              projectsInView={projectsInView}
              aboutMeInView={aboutMeInView}
              contactInView={contactInView}
              backToTopInView={backToTopInView}
              scrollToProjects={scrollToProjects}
              scrollToAboutMe={scrollToAboutMe}
              scrollToContact={scrollToContact}
              scrollToTop={props.scrollToTop}
            />
          </div>
        )}
      </InView>
    </div>
  );
}

export default Main;
