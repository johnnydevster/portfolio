import me from "./static/Portrait2.PNG";

function AboutMe(props) {
  return (
    <div>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <h1>About Me</h1>
        </div>
        <div className="w-full border-b-2 border-blue-400 border-opacity-20 ml-6 pt-1"></div>
      </div>
      <div className="flex justify-between my-8">
        <div className="text-blue-100 bg-blue-900 bg-opacity-50 rounded py-3 px-5">
          <h1 className="text-lg">Nice to meet you!</h1>
          <p className="text-sm pt-5">
            I'm a web developer based in Sundsvall, Sweden.
          </p>
          <p className="text-sm pt-2">
            I love creating{" "}
            <span className="font-semibold">
              beautiful, seamless web experiences
            </span>{" "}
            on the front end especially, but I also quite enjoy building full
            stack applications.
          </p>
        </div>
        <div className="h-60 w-60 relative z-20 bg-blue-300 rounded mx-3 flex-shrink-0">
          <img className="h-60 object-cover rounded relative z-30" src={me} />
          <div className="rounded bg-blue-800 bg-opacity-30 absolute inset-0 transition-all duration-500 ease-in-out hover:bg-opacity-0 z-40"></div>
          <div className="absolute border-2 rounded border-blue-300 h-60 w-60 left-2 top-3 z-0 bg-blue-900 bg-opacity-60"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
