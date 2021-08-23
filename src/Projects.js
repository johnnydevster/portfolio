import ProjectCard from "./ProjectCard";
import projects from "./projectsData";
import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import { useInView, InView } from "react-intersection-observer";

function Projects(props) {
  const [mainSectionInView, setMainSectionInView] = useState(false);
  const [projectsSectionInView, setProjectsSectionInView] = useState(false);
  const [aboutMeSectionInView, setAboutMeSectionInView] = useState(false);
  const [contactRef, contactInView, entry] = useInView({ threshold: 0.5 });

  useEffect(() => {
    console.log(`Contact section inView: ${contactInView}`);
  }, [contactInView]);

  return (
    <div className="projects text-blue-200 text-xl relative inset-0 pt-3 pb-6 flex-col">
      <InView
        threshold={0.2}
        onChange={(inView, entry) => {
          console.log("Main section Inview:", inView);
          setMainSectionInView(inView);
        }}
      >
        {({ inView, ref, entry }) => (
          <div ref={ref} className="relative max-w-xl mx-auto p-5 flex">
            <div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1>Some of my recent projects</h1>
                </div>
                <div className="w-full border-b-2 border-blue-400 border-opacity-20 ml-6 pt-1"></div>
              </div>
              <InView
                threshold={0.2}
                onChange={(inView, entry) => {
                  console.log("Projects section Inview:", inView);
                  setProjectsSectionInView(inView);
                }}
              >
                {({ inView, ref, entry }) => (
                  <section ref={ref} id="projects">
                    {projects.map((project, i) => {
                      return (
                        <ProjectCard
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
                )}
              </InView>
              <InView
                threshold={0.5}
                onChange={(inView, entry) => {
                  console.log("About me section Inview:", inView);
                  setAboutMeSectionInView(inView);
                }}
              >
                {({ inView, ref, entry }) => (
                  <div ref={ref} className="h-96 mb-96">
                    About me section
                  </div>
                )}
              </InView>
              <div ref={contactRef} className="h-96 mb-96">
                Contact section
              </div>
            </div>
            <Navigation mainSectionInView={mainSectionInView} />
          </div>
        )}
      </InView>
    </div>
  );
}

export default Projects;
