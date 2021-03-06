import { GitHub, Link } from "./static/icons";
import ModalImage from "react-modal-image";

function ProjectCard(props) {
  const isEven = props.projectNo % 2 === 0;
  return (
    <div className="my-8 bg-blue-900 bg-opacity-40 p-4 mx-auto rounded">
      <div>
        <div className={``}>
          <h1 className="uppercase font-semibold text-yellow-300">
            {props.name}
          </h1>
          <h2 className="lowercase text-base">{props.description}</h2>
        </div>
      </div>
      <div className={`relative md:flex ${isEven && "justify-end"}`}>
        <div className="mt-3 md:mt-5 mb-2 md:w-4/5">
          <div className="overflow-hidden">
            <ModalImage
              className="rounded w-full h-96 transition-all duration-500 ease-in-out object-cover hover:filter-none md:filter saturate-0 transform hover:scale-110 cursor-pointer"
              small={props.src}
              medium={props.src}
              alt={props.description}
              hideDownload={true}
              hideZoom={true}
            />
          </div>
        </div>
        <div
          className={`md:rounded -mx-4 mb-2 mt-4 md:m-0 md:w-72 bg-blue-900 md:absolute transform md:-translate-y-1/2 md:top-1/2 shadow-xl ${
            isEven ? "left-0" : "right-0"
          } m-auto text-sm px-5 pb-3 pt-3`}
        >
          {props.paragraph.map((paragraph, i) => {
            return (
              <p key={i} className="pt-2">
                {paragraph}
              </p>
            );
          })}
          <div className="mt-3 text-sm font-semibold flex">
            <a
              href={props.repolink}
              target="_blank"
              rel="noreferrer"
              className="flex text-yellow-300 py-1 hover:text-yellow-200 bg-gray-900 bg-opacity-50 rounded-full p-2"
            >
              <p>code</p>
              <GitHub className="w-6 ml-2 fill-current" />
            </a>

            {props.website && (
              <a
                href={props.website}
                target="_blank"
                rel="noreferrer"
                className="flex text-yellow-300 py-1 px-2 hover:text-yellow-200 bg-gray-900 bg-opacity-50 rounded-full p-2 ml-1"
              >
                <p>site</p>
                <span className="w-6 ml-2 fill-current material-icons">
                  link
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
      <div
        className={`flex-wrap items-center font-semibold text-sm flex flex-wrap ${
          isEven && "justify-end"
        }`}
      >
        {props.tech.map((tech, i) => {
          return (
            <div
              key={i}
              className="mt-2 transition-all duration-400 ease-in-out h-9 bg-indigo-600 mx-1 px-3 rounded pt-2 hover:px-5 hover:bg-indigo-500 hover:text-white"
            >
              {tech}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectCard;
