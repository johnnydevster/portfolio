import ContactForm from "./ContactForm";
import { LinkedIn, GitHub } from "./static/icons";
import { useState } from "react";

function Contact() {
  const [hoveringOverLinkedIn, setHoveringOverLinkedIn] = useState(false);
  const [hoveringOverGithub, setHoveringOverGithub] = useState(false);
  return (
    <div>
      <div className="flex items-center mt-12">
        <div className="flex-shrink-0">
          <h1>Contact</h1>
        </div>
        <div className="w-full border-b-2 border-blue-400 border-opacity-20 ml-6 pt-1"></div>
      </div>
      <div className="flex flex-col w-5/6 p-4 sm:px-4 sm:py-6 mx-auto my-8 justify-around">
        <a
          href="https://www.linkedin.com/in/johnny-backlund-3b8221179/"
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <div
            onMouseOver={() => setHoveringOverLinkedIn(true)}
            onMouseOut={() => setHoveringOverLinkedIn(false)}
            className={`table cursor-pointer`}
          >
            <div
              className={`transition-all duration-500 ease-in-out relative z-40 rounded-l table-cell ${
                hoveringOverLinkedIn ? "contactbox-light" : "contactbox"
              } border-2 border-blue-600 border-opacity-70 align-center`}
            >
              <h1 className="text-base text-white p-4">
                If you'd like to connect, please feel free to message me on
                LinkedIn or use the contact form below to send an email.
              </h1>
            </div>

            <div
              className={`relative contactblock transition-all duration-500 ease-in-out table-cell text-center align-middle w-28 border-2 border-blue-600 border-opacity-70 rounded-r-3xl transform ${
                hoveringOverLinkedIn ? "-translate-x-1" : "translate-x-6"
              }`}
            >
              <div className="absolute pin top-7 -left-3 w-4 h-2 bg-blue-700 opacity-50"></div>
              <div className="absolute pin bottom-7 -left-3 w-4 h-2 bg-blue-700 opacity-50"></div>
              <LinkedIn
                className={`ml-7 w-12 fill-current ${
                  hoveringOverLinkedIn ? "glow" : "text-yellow-300"
                }`}
              />
            </div>
          </div>
        </a>
        <a
          href="https://github.com/johnnydevster/"
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <div
            onMouseOver={() => setHoveringOverGithub(true)}
            onMouseOut={() => setHoveringOverGithub(false)}
            className={`table cursor-pointer mt-8`}
          >
            <div
              className={`transition-all duration-500 ease-in-out relative z-40 rounded-l table-cell ${
                hoveringOverGithub ? "contactbox-light" : "contactbox"
              } border-2 border-blue-600 border-opacity-70 align-center`}
            >
              <h1 className="text-base text-white px-4 py-7">
                Also, follow me on GitHub to keep track of my new and exciting
                projects!
              </h1>
            </div>

            <div
              className={`relative contactblock transition-all duration-500 ease-in-out table-cell text-center align-middle w-28 border-2 border-blue-600 border-opacity-70 rounded-r-3xl transform ${
                hoveringOverGithub ? "-translate-x-1" : "translate-x-6"
              }`}
            >
              <div className="absolute pin top-7 -left-3 w-4 h-2 bg-blue-700 opacity-50"></div>
              <div className="absolute pin bottom-7 -left-3 w-4 h-2 bg-blue-700 opacity-50"></div>
              <GitHub
                className={`ml-7 w-12 fill-current rounded-full ${
                  hoveringOverGithub ? "glow" : "text-yellow-300"
                }`}
              />
            </div>
          </div>
        </a>
        <div className="sm:hidden border-t mt-6 mx-6 mb-3 sm:mx-5 border-blue-600 border-opacity-30"></div>
        <div className="sm:hidden flex mt-6 mb-2 justify-center">
          <a
            href="https://www.linkedin.com/in/johnny-backlund-3b8221179/"
            target="_blank"
            rel="noreferrer"
            className="w-10 fill-current text-yellow-300 cursor-pointer hover:text-yellow-200"
          >
            <LinkedIn className="w-10" />
          </a>
          <a
            href="https://github.com/johnnydevster"
            target="_blank"
            rel="noreferrer"
            className="w-10 ml-3 fill-current cursor-pointer hover:text-yellow-200 text-yellow-300"
          >
            <GitHub className="w-10" />
          </a>
        </div>
      </div>
      <h1 className="mb-3 mt-14 text-center">Send me a mail!</h1>
      <ContactForm />
    </div>
  );
}

export default Contact;
