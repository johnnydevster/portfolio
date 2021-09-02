import { motion, AnimatePresence } from "framer-motion";

function Navigation(props) {
  const list = {
    visible: {
      opacity: 1,
      transition: { ease: "easeInOut", duration: 0.6 },
    },
    hidden: {
      opacity: 1,
      height: 0,
      transition: { ease: "easeInOut", duration: 0.6 },
    },
  };

  const initial = {
    opacity: 0,
    x: "200%",
    height: 0,
    transition: { ease: "easeOut", duration: 0.4 },
  };

  const animate = {
    opacity: 1,
    x: 0,
    transition: { ease: "easeOut", duration: 0.4 },
  };

  //${
  //  !props.mainSectionInView ? "hidden " : "visible "
  //}

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return (
    <div className={`hidden md:block sticky h-20 top-1/2 text-sm`}>
      <AnimatePresence>
        {props.mainSectionInView && (
          <motion.div
            key="1"
            animate={animate}
            initial={initial}
            exit={initial}
            className={`absolute left-5 w-28`}
            variants={list}
          >
            <motion.div
              onClick={props.scrollToProjects}
              className={`${
                props.projectsInView
                  ? "font-semibold text-lg bg-blue-900 py-5 "
                  : ""
              }h-8 border-l-4 pl-2 my-2 flex items-center border-blue-500 cursor-pointer transition-all duration-400 ease-in-out hover:bg-blue-900`}
              variants={item}
            >
              Projects
            </motion.div>
            <motion.div
              onClick={props.scrollToAboutMe}
              className={`${
                props.aboutMeInView && !props.projectsInView
                  ? "font-semibold text-lg bg-blue-900 py-5 "
                  : ""
              }h-8 border-l-4 pl-2 my-2 flex items-center border-blue-500 cursor-pointer transition-all duration-400 ease-in-out hover:bg-blue-900`}
              variants={item}
            >
              About Me
            </motion.div>
            <motion.div
              onClick={props.scrollToContact}
              className={`${
                props.contactInView && !props.aboutMeInView
                  ? "font-semibold text-lg bg-blue-900 py-5 "
                  : ""
              }h-8 border-l-4 pl-2 my-2 flex items-center border-blue-500 cursor-pointer transition-all duration-400 ease-in-out hover:bg-blue-900`}
              variants={item}
            >
              Contact
            </motion.div>
            <motion.div
              onClick={props.scrollToTop}
              className={`${
                props.backToTopInView && !props.contactInView
                  ? "font-semibold text-lg bg-blue-900 py-5 "
                  : ""
              }h-8 border-l-4 pl-2 my-2 flex items-center border-blue-500 cursor-pointer transition-all duration-400 ease-in-out hover:bg-blue-900`}
              variants={item}
            >
              Back to top
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navigation;
