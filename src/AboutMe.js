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
      <div className="flex flex-col sm:flex-row items-center justify-between my-10">
        <div className="mx-auto relative max-w-md sm:h-36 flex flex-col justify-center text-blue-100 bg-blue-900 bg-opacity-50 rounded py-3 px-5">
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
          <div className="rounded bg-blue-800 bg-opacity-30 absolute inset-0 transition-all duration-500 ease-in-out hover:bg-opacity-0 z-40"></div>
          <div className="absolute border-2 rounded border-blue-300 h-60 w-60 left-2 top-2 z-0 bg-blue-900 bg-opacity-60"></div>
        </div>
      </div>
      <div className="mb-96 mt-5 sm:mt-12 p-5 text-base font-semibold text-yellow-300 bg-blue-900 bg-opacity-50">
        <h1>I speak JavaScript, among many other things:</h1>
      </div>
    </div>
  );
}

export default AboutMe;
