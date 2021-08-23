function Navigation(props) {
  return (
    <div
      className={`${
        !props.mainSectionInView && "hidden "
      } sticky h-20 top-1/2 text-sm`}
    >
      <div className="absolute left-5 w-28">
        <div
          className={`${
            props.projectsInView
              ? "font-semibold text-lg bg-blue-900 py-5 "
              : ""
          }h-8 border-l-4 pl-2 my-2 flex items-center border-blue-500 cursor-pointer transition-all duration-400 ease-in-out hover:bg-blue-900`}
        >
          Projects
        </div>
        <div
          className={`${
            props.aboutMeInView && !props.projectsInView
              ? "font-semibold text-lg bg-blue-900 py-5 "
              : ""
          }h-8 border-l-4 pl-2 my-2 flex items-center border-blue-500 cursor-pointer transition-all duration-400 ease-in-out hover:bg-blue-900`}
        >
          About Me
        </div>
        <div
          className={`${
            props.contactInView && !props.aboutMeInView
              ? "font-semibold text-lg bg-blue-900 py-5 "
              : ""
          }h-8 border-l-4 pl-2 my-2 flex items-center border-blue-500 cursor-pointer transition-all duration-400 ease-in-out hover:bg-blue-900`}
        >
          Contact
        </div>
        <div
          className={`${
            props.backToTopInView && !props.contactInView
              ? "font-semibold text-lg bg-blue-900 py-5 "
              : ""
          }h-8 border-l-4 pl-2 my-2 flex items-center border-blue-500 cursor-pointer transition-all duration-400 ease-in-out hover:bg-blue-900`}
        >
          Back to top
        </div>
      </div>
    </div>
  );
}

export default Navigation;
