import { motion, AnimatePresence } from "framer-motion";

import { GitHub, LinkedIn } from "./static/icons";

function SocialBar(props) {
  const initial = {
    opacity: 0,
    x: "-200%",
    height: 0,
    transition: { ease: "easeOut", duration: 0.4 },
  };

  const animate = {
    opacity: 1,
    x: 0,
    transition: { ease: "easeOut", duration: 0.4 },
  };

  return (
    <div className={`hidden lg:block sticky h-20 top-1/2 text-sm`}>
      <AnimatePresence>
        {false && (
          <motion.div
            key="1"
            animate={animate}
            initial={initial}
            exit={initial}
            className={`absolute right-5`}
          >
            <a
              className={`w-5 my-3 flex fill-current text-blue-300 hover:text-blue-100 transition-all`}
              href="https://github.com/johnnydevster"
              rel="noreferrer"
              target="_blank"
            >
              <GitHub />
            </a>
            <a
              className={`w-5 my-3 flex fill-current text-blue-300 hover:text-blue-100 transition-all`}
              href="https://www.linkedin.com/in/johnny-backlund-3b8221179/"
              rel="noreferrer"
              target="_blank"
            >
              <LinkedIn />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SocialBar;
