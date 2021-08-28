import { useState } from "react";
import { PaperPlane } from "./static/icons";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";

function ContactForm() {
  const user = process.env.REACT_APP_USER_ID;
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  init(user);

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(serviceID, "template_7b74yth", e.target, user).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    e.target.reset();
  }

  return (
    <form
      className="flex flex-col text-base bg-blue-900 pt-5 px-5 pb-3 rounded relative z-50 text-white"
      onSubmit={(e) => sendEmail(e)}
    >
      <div className="graybgdiv absolute inset-0 bg-gray-900 bg-opacity-10 rounded"></div>
      <div className="flex">
        <label for="name" className=""></label>
        <input
          type="text"
          id="name"
          name="user_name"
          className="w-full h-8 mt-1 px-2 rounded bg-gray-900 bg-opacity-30"
          placeholder="Name"
        ></input>
        <label for="email" className=""></label>
        <input
          type="text"
          id="email"
          name="user_email"
          className="w-full h-8 mt-1 ml-3 px-2 rounded bg-gray-900 bg-opacity-30"
          placeholder="Your email address"
        ></input>
      </div>
      <label for="email" className=""></label>
      <textarea
        type="text"
        id="message"
        name="message"
        className="w-full h-8 mt-3 rounded p-2 h-60 bg-gray-900 bg-opacity-30"
        placeholder="Your message here..."
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
