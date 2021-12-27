import me from "./static/Portrait2.PNG";
import { Screen, Database } from "./static/icons";
//
function AboutMe(props) {
  const frontEndSkills = [
    "HTML",
    "CSS",
    "React",
    "Sass",
    "Tailwind",
    "Next.js",
  ];
  const backEndSkills = [
    "Node.js",
    "MySQL",
    "Express.js",
    "Python",
    "Firebase",
    "Headless CMS",
  ];

  return (
    <div>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <h1>About Me</h1>
        </div>
        <div className="w-full border-b-2 border-blue-400 border-opacity-20 ml-6 pt-1"></div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between mt-10">
        <div className="mx-auto relative max-w-md sm:h-36 flex flex-col justify-center text-white bg-blue-900 bg-opacity-50 rounded py-3 px-5">
          <p className="text-sm">
            I'm a web developer based in Sundsvall, Sweden.
          </p>
          <p className="text-sm pt-2">
            I love creating{" "}
            <span className="font-semibold">
              beautiful, seamless web experiences
            </span>{" "}
            on the front end especially, but I also enjoy building out entire
            full stack applications!
          </p>
          <div className="hidden sm:block triangle absolute -right-6 z-50"></div>
          <div className="triangledown sm:hidden absolute -bottom-6 left-1/2 z-50"></div>
        </div>
        <div className="mx-auto sm:mx-3 mt-3 sm:mt-0 h-60 w-60 relative z-20 bg-blue-300 rounded  flex-shrink-0">
          <img
            className="filter brightness-125 h-60 object-cover rounded relative z-30"
            src={me}
          />
          <div className="rounded bg-blue-800 bg-opacity-0 md:bg-opacity-30 absolute inset-0 transition-all duration-500 ease-in-out hover:bg-opacity-0 z-40"></div>
          <div className="absolute border-2 rounded border-blue-300 h-60 w-60 left-2 top-2 z-0 bg-blue-900 bg-opacity-60"></div>
        </div>
      </div>
      <h1 className="text-base text-white text-center mt-10 sm:mt-14">
        I speak <span className="font-bold">JavaScript</span>, among many other
        things:
      </h1>
      <div className="mt-12 sm:mt-16 max-w-sm mx-auto p-5 text-base font-semibold bg-gray-900 bg-opacity-50 rounded border border-blue-600 border-opacity-70">
        <div id="skillscontainer" className="flex justify-around">
          <div
            id="frontendskills"
            className="text-base w-1/2 mr-3 flex flex-col items-center relative"
          >
            <div className="absolute -top-11 w-10">
              <Screen className="fill-current text-yellow-300" />
            </div>
            <h2 className="mb-4 text-white text-lg">Front end</h2>
            <ul className="text-white">
              {frontEndSkills.map((skill, i) => {
                return (
                  <li key={i} className="mb-1 py-1 px-2 rounded bg-blue-600">
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="border-l border-blue-600 border-opacity-30"></div>
          <div
            id="backendskills"
            className="text-base w-1/2 ml-3 flex flex-col items-center relative"
          >
            <div className="absolute -top-10 w-7">
              <Database className="fill-current text-yellow-300" />
            </div>
            <h2 className="mb-4 text-white text-lg">Back end</h2>
            <ul className="text-white">
              {backEndSkills.map((skill, i) => {
                return (
                  <li key={i} className="mb-1 py-1 px-2 rounded bg-purple-600">
                    {skill}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
