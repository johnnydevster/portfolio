import ProjectCard from "./ProjectCard";
import projects from "./projectsData";
import Navigation from "./Navigation";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import SocialBar from "./SocialBar";
import { GitHub, LinkedIn } from "./static/icons";
import { Hamburger } from "./static/icons";
import { useState, useRef, useEffect } from "react";
import { useInView, InView } from "react-intersection-observer";

function Main(props) {
  const [mainSectionInView, setMainSectionInView] = useState(false);

  const [projectsRef, projectsInView, projectsEntry] = useInView({
    threshold: 0.2,
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
  const [showSideBar, setShowSideBar] = useState(true);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target) && showSideBar) {
          setShowSideBar(false);
          console.log("Clicked outside sidebar.");
        }
      }

      function handleDragOutside(event) {
        if (ref.current && !ref.current.contains(event.target) && showSideBar) {
          setShowSideBar(false);
          console.log("Dragged outside sidebar.");
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("drag", handleDragOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
        document.addEventListener("drag", handleDragOutside);
      };
    }, [ref]);
  }

  const sidebarRef = useRef(null);
  useOutsideAlerter(sidebarRef);

  function scrollToProjects() {
    projectsEntry.target.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToAboutMe() {
    aboutMeEntry.target.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToContact() {
    contactEntry.target.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="-mt-12 md:mt-0 projects text-blue-50 text-xl relative inset-0 pt-3 pb-6 flex-col">
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
                onClick={() => setShowSideBar(!showSideBar)}
                className="hamburger md:hidden w-10 h-10 p-1 absolute right-5 top-1/2 transform -translate-y-1/2 hover:bg-blue-900 hover:bg-opacity-50 cursor-pointer rounded"
              >
                <Hamburger />
              </button>
              <ul
                className={`transition-all duration-300 ease-in-out transform ${
                  showSideBar ? "translate-x-0" : "translate-x-full"
                } sidebar fixed h-screen w-1/2 top-0 right-0 bg-gray-900 flex flex-col justify-center text-2xl`}
              >
                <li
                  onClick={scrollToProjects}
                  className={`${
                    projectsInView ? "bg-gray-800" : ""
                  } px-4 mb-3 duration-100 ease-in-out cursor-pointerhover:bg-blue-900 py-1 px-2 rounded`}
                >
                  Projects
                </li>
                <li
                  onClick={scrollToAboutMe}
                  className={`${
                    aboutMeInView && !projectsInView ? "bg-gray-800" : ""
                  } px-4 mb-3 duration-100 ease-in-out cursor-pointerhover:bg-blue-900 py-1 px-2 rounded`}
                >
                  About Me
                </li>
                <li
                  onClick={scrollToContact}
                  className={`${
                    contactInView && !aboutMeInView ? "bg-gray-800" : ""
                  } px-4 mb-3 duration-100 ease-in-out cursor-pointerhover:bg-blue-900 py-1 px-2 rounded`}
                >
                  Contact
                </li>
                <li
                  onClick={props.scrollToTop}
                  className={`px-4 duration-100 ease-in-out cursor-pointerhover:bg-blue-900 py-1 px-2 rounded`}
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
            className="relative md:-left-14 max-w-2xl mx-auto p-5 flex"
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
              <div ref={contactRef} className="h-96 mb-96">
                <Contact />
              </div>
              <div ref={backToTopRef} className="h-96 mb-96">
                Back to top
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
