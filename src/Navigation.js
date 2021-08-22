function Navigation(props) {
  return (
    <div
      className={`${
        !props.projectsInView && "hidden "
      } sticky h-20 top-1/2 text-sm`}
    >
      <div className="absolute left-5 w-24">
        <div className="h-8 border-l-4 pl-2 my-2 flex items-center border-blue-500 cursor-pointer transition-all duration-400 ease-in-out hover:bg-blue-900">
          Projects
        </div>
        <div className="h-8 border-l-4 pl-2 my-2 flex items-center border-blue-500 cursor-pointer transition-all duration-400 ease-in-out hover:bg-blue-900">
          About Me
        </div>
        <div className="h-8 border-l-4 pl-2 my-2 flex items-center border-blue-500 cursor-pointer transition-all duration-400 ease-in-out hover:bg-blue-900">
          Contact
        </div>
        <div className="h-8 border-l-4 pl-2 my-2 flex items-center border-blue-500 cursor-pointer transition-all duration-400 ease-in-out hover:bg-blue-900">
          Back to top
        </div>
      </div>
    </div>
  );
}

export default Navigation;
