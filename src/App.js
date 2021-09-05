import "./index.css";
import { ArrowDown, GitHub, LinkedIn, Xbutton } from "./static/icons";
import ContactForm from "./ContactForm";
import Main from "./Main";
import { useEffect, useRef, useState } from "react";
import { Transition } from "react-transition-group";
import SwedenAnimation from "./SwedenAnimation";

function App() {
  const projectsRef = useRef();
  const topRef = useRef();
  const [showContactForm, setShowContactForm] = useState(false);
  const [fireAnimation, setFireAnimation] = useState(true);
  const [showIntroOverlay, setShowIntroOverlay] = useState(false);

  function scrollToTop() {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  function scrollToProjects() {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (
          ref.current &&
          !ref.current.contains(event.target) &&
          showContactForm
        ) {
          setShowContactForm(false);
        }
      }

      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  function ContactFormPopup(props) {
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    const duration = 200;

    const defaultStyle = {
      transition: `all ${duration}ms ease-in-out`,
      opacity: 1,
      left: 10 + "%",
    };

    const transitionStyles = {
      entering: { opacity: 0 },
      entered: { opacity: 1, left: 0 },
      exiting: { opacity: 1, left: 0 },
      exited: { opacity: 0, left: 10 + "%", width: 0 },
    };

    return (
      <div
        ref={wrapperRef}
        id="contactformcontainer"
        style={{ ...defaultStyle, ...transitionStyles[props.state] }}
        className="absolute transform z-40 top-1/2 -translate-y-1/2 right-0 md:w-3/5 lg:w-2/3 xl:w-1/2 mx-auto"
      >
        <div
          onClick={() => setShowContactForm(false)}
          className="transition-all hover:bg-blue-400 xbutton absolute w-8 h-8 rounded-full bg-blue-500 cursor-pointer right-0 md:-right-4 -top-4 text-indigo-900 leading-7 text-center"
        >
          <Xbutton />
        </div>
        <ContactForm />
      </div>
    );
  }

  return (
    <div>
      <div ref={topRef} className="main h-screen w-full absolute z-0">
        <header className="w-full h-12 z-20 absolute flex items-center justify-end">
          <div className="flex fill-current text-yellow-300">
            <a
              href="https://github.com/johnnydevster"
              target="_blank"
              rel="noreferrer"
              className="w-6 ml-12 fill-current cursor-pointer hover:text-yellow-200 text-yellow-300"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/johnny-backlund-3b8221179/"
              target="_blank"
              rel="noreferrer"
              className="w-6 ml-5 fill-current text-yellow-300 cursor-pointer hover:text-yellow-200"
            >
              <LinkedIn />
            </a>
            <button
              onClick={() => setFireAnimation(!fireAnimation)}
              className="px-2 bg-blue-500 mx-10"
            >
              Fire animation
            </button>
            <p>Fire animation is: </p>
            <p>{String(fireAnimation)}</p>
          </div>
        </header>
        <Transition in={showContactForm} timeout={0}>
          {(state) => <ContactFormPopup state={state} />}
        </Transition>

        <div className="h-full md:h-full md:flex items-center">
          <div className="introframe bg-opacity-50 h-1/3 md:h-full relative md:w-2/5  pt-12 flex items-center">
            <div className="text-white w-22 mx-auto p-4 flex flex-col">
              <h1 className="mb-2 text-4xl sm:text-6xl">Johnny Backlund</h1>
              <h1 className="text-3xl sm:text-4xl xl:text-right">
                <span className="text-yellow-300">
                  front end web developer.
                </span>
              </h1>

              <button
                onClick={() => setShowContactForm(true)}
                className="transition-all ease-in-out duration-400 hover:bg-indigo-500 py-3 px-4 text-sm my-6 rounded-3xl bg-indigo-700 font-semibold self-center"
              >
                Contact me
              </button>
            </div>
          </div>
          <div className="relative h-2/3 md:h-full md:w-3/5 text-white pt-12 flex items-center">
            <SwedenAnimation
              fireAnimation={fireAnimation}
              setShowIntroOverlay={setShowIntroOverlay}
            />
            <div
              className={`${
                showIntroOverlay ? "opacity-100" : "opacity-0"
              } transition-all ease-in-out duration-500 relative bottom-10 introoverlay mx-auto text-gray-200 bg-gray-900 p-2 bg-opacity-80 rounded`}
            >
              <p>
                I'm a developer currently based in{" "}
                <span className="text-white font-semibold">
                  Sundsvall, Sweden
                </span>
                .
              </p>
            </div>
          </div>
          <div
            onClick={scrollToProjects}
            className="absolute text-yellow-500 bottom-6 left-0 right-0 mx-auto w-20"
          >
            <h1 className="text-yellow-300 relative -top-6">Projects</h1>
            <ArrowDown className="transition-all duration-400 ease-in-out bg-blue-700 bg-opacity-20 hover:bg-opacity-60 rounded-full p-2 fill-current text-yellow-400 cursor-pointer animate-bounce" />
          </div>
        </div>
        <div ref={projectsRef}>
          <Main scrollToTop={scrollToTop} />
        </div>
      </div>
    </div>
  );
}

export default App;
