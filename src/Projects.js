import ProjectCard from "./ProjectCard";
import projects from "./projectsData";
import Navigation from "./Navigation";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function Projects(props) {
  const [projectsRef, projectsInView, entry] = useInView({ threshold: 0.3 });

  useEffect(() => {
    console.log(`Element visible: ${projectsInView}`);
  }, [projectsInView]);

  return (
    <div className="projects text-blue-200 text-xl relative inset-0 pt-3 pb-6 flex">
      <div className="relative max-w-xl mx-auto p-5 flex">
        <div ref={projectsRef}>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1>Some of my recent projects</h1>
            </div>
            <div className="w-full border-b-2 border-blue-400 border-opacity-20 ml-6 pt-1"></div>
          </div>
          <section id="projects">
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
        </div>
        <Navigation projectsInView={projectsInView} />
      </div>
    </div>
  );
}

export default Projects;
