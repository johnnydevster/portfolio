import ProjectCard from "./ProjectCard";
import projects from "./projectsData";
import Navigation from "./Navigation";
import AboutMe from "./AboutMe";
import SocialBar from "./SocialBar";
import { useEffect, useState, useRef } from "react";
import { useInView, InView } from "react-intersection-observer";

function Projects(props) {
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
              <div ref={aboutMeRef} className="">
                <AboutMe />
              </div>
              <div ref={contactRef} className="h-96 mb-96">
                Contact section
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

export default Projects;
