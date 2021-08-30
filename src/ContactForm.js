import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import { BeatLoader } from "react-spinners";
import { Transition } from "react-transition-group";

function ContactForm() {
  const user = process.env.REACT_APP_USER_ID;
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  init(user);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [messageSuccess, setMessageSuccess] = useState(false);
  const [messageFailed, setMessageFailed] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (messageSuccess) {
      const timer = () => setTimeout(() => setMessageSuccess(false), 3000);
      const timerId = timer();
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [messageSuccess]);

  useEffect(() => {
    if (messageFailed) {
      const timer = () => setTimeout(() => setMessageFailed(false), 3000);
      const timerId = timer();
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [messageFailed]);

  function sendEmail(e) {
    e.preventDefault();
    const emailInRightFormat = /\S+@\S+\.\S+/.test(email);
    if (!name || !email || !message) {
      alert("Seems like you haven't filled out all the details.");
    } else if (!emailInRightFormat) {
      alert("Please enter a valid email.");
    } else {
      setLoading(true);
      const templateParams = {
        user_name: name,
        user_email: email,
        message: message,
      };

      emailjs.send(serviceID, "template_7b74yth", templateParams).then(
        (response) => {
          setMessageSuccess(true);
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
        },
        (error) => {
          setMessageFailed(true);
          console.log("FAILED...", error);
          setLoading(false);
        }
      );
      setName("");
      setEmail("");
      setMessage("");
      e.target.reset();
    }
  }

  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 1,
  };

  const transitionStyles = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 0 },
  };

  function MessageFailed(props) {
    return (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[props.state],
        }}
        className="absolute transition-all rounded text-red-900 transform bg-red-400 text-center -translate-y-12 top-1/2 right-0 left-0 mx-auto w-44 py-4 text-lg font-bold"
      >
        Mail failed
      </div>
    );
  }

  function MessageSuccess(props) {
    return (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[props.state],
        }}
        className="absolute rounded text-green-800 transform bg-green-400 text-center -translate-y-12 top-1/2 right-0 left-0 mx-auto w-32 py-4 text-xl font-bold"
      >
        Mail sent!
      </div>
    );
  }

  return (
    <form
      className="flex flex-col text-base bg-blue-900 pt-5 px-5 pb-3 rounded relative z-50 text-white"
      onSubmit={(e) => sendEmail(e)}
    >
      <Transition in={messageSuccess} timeout={300}>
        {(state) => <MessageSuccess state={state} />}
      </Transition>
      <Transition in={messageFailed} timeout={300}>
        {(state) => <MessageFailed state={state} />}
      </Transition>
      {loading && (
        <div className="absolute transform text-center top-1/2 right-0 left-0 w-20 mx-auto">
          <BeatLoader color="aqua" loading={true} />
        </div>
      )}
      <div className="graybgdiv absolute inset-0 bg-gray-900 bg-opacity-10 rounded"></div>
      <div className="flex">
        <label for="name" className=""></label>
        <input
          type="text"
          id="name"
          name="user_name"
          className="w-full h-8 mt-1 px-2 rounded bg-gray-900 bg-opacity-30"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label for="email" className=""></label>
        <input
          type="text"
          id="email"
          name="user_email"
          className="w-full h-8 mt-1 ml-3 px-2 rounded bg-gray-900 bg-opacity-30"
          placeholder="Your email address"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>
      <label for="email" className=""></label>
      <textarea
        type="text"
        id="message"
        name="message"
        className="w-full h-8 mt-3 rounded p-2 h-60 bg-gray-900 bg-opacity-30"
        placeholder="Your message here..."
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button
        className="transition-all bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded mt-3 mx-auto flex font-semibold"
        type="submit"
      >
        SEND
      </button>
    </form>
  );
}

export default ContactForm;
