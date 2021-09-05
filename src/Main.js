import ProjectCard from "./ProjectCard";
import projects from "./projectsData";
import Navigation from "./Navigation";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import SocialBar from "./SocialBar";
import { GitHub, LinkedIn } from "./static/icons";
import { useState } from "react";
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
    <div className="projects text-blue-50 text-xl relative inset-0 pt-3 pb-6 flex-col">
      <header
        className={`transform transition-all duration-400 ease-in-out w-full top-0 ${
          mainSectionInView ? "md:-translate-y-12" : ""
        } h-12 fixed flex items-center`}
      >
        <div className="flex w-full justify-between fill-current text-yellow-300">
          <div className="flex items-center mx-14">
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
            <ul className="flex text-base text-blue-100 font-semibold justify-between w-72 mx-14">
              <li
                onClick={scrollToProjects}
                className="transition-all duration-100 ease-in-out cursor-pointer hover:bg-blue-900 px-2 py-1 rounded"
              >
                Projects
              </li>
              <li
                onClick={scrollToAboutMe}
                className="transition-all duration-100 ease-in-out cursor-pointer hover:bg-blue-900 px-2 py-1 rounded"
              >
                About Me
              </li>
              <li
                onClick={scrollToContact}
                className="transition-all duration-100 ease-in-out cursor-pointer hover:bg-blue-900 px-2 py-1 rounded"
              >
                Contact
              </li>
            </ul>
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
