import ContactForm from "./ContactForm";
import { LinkedIn, GitHub } from "./static/icons";

function Contact() {
  return (
    <div>
      <div className="flex items-center mt-12">
        <div className="flex-shrink-0">
          <h1>Contact</h1>
        </div>
        <div className="w-full border-b-2 border-blue-400 border-opacity-20 ml-6 pt-1"></div>
      </div>
      <div className="flex flex-col bg-blue-900 w-5/6 sm:4/6 px-7 py-6 sm:px-4 sm:py-6 mx-auto my-10 bg-opacity-50 rounded justify-around">
        <div className="sm:flex items-center justify-around">
          <h1 className="text-base text-white sm:w-4/6">
            If you'd like to contact me, please feel free to message me on
            LinkedIn or use the contact form below to send an email.
          </h1>
          <a
            href="https://www.linkedin.com/in/johnny-backlund-3b8221179/"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:block w-10 mx-4 fill-current text-yellow-300 cursor-pointer hover:text-yellow-200"
          >
            <LinkedIn className="w-10" />
          </a>
        </div>
        <div className="border-t mx-2 sm:mx-5 my-4 border-blue-600 border-opacity-30"></div>
        <div className="sm:flex items-center justify-around">
          <h1 className="text-base text-white sm:w-4/6">
            Also, follow me on GitHub to keep track of my new and exciting
            projects!
          </h1>

          <a
            href="https://github.com/johnnydevster"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:block w-10 mx-4 fill-current cursor-pointer hover:text-yellow-200 text-yellow-300"
          >
            <GitHub />
          </a>
        </div>
        <div className="sm:hidden border-t mx-2 sm:mx-5 mt-4 border-blue-600 border-opacity-30"></div>
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
