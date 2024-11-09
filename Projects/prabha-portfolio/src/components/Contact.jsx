import React from "react";
import emailIcon from "../assets/mailIcon.svg";
import linkedinIcon from "../assets/linkedInIcon.svg";
import githubIcon from "../assets/githubIcon.svg";

const Contact = () => {
  return (
    <div
      name="contact"
      className="contact w-screen h-screen bg-black p-4 text-white"
    >
      <div className="p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
        </div>
        <h2 className="pb-6 pt-12 text-center mt-10 text-3xl tracking-wider lg:text-5xl">
          Get In Touch
        </h2>
        <p className="font-poppins mx-auto mt-5 mb-10 px-2 pb-6 text-center text-xl tracking-wider lg:w-[50%]">
          I'd love to connect and explore exciting opportunities with you!
          Whether you have interesting projects, creative ideas, or just want to
          chat, please don't hesitate to reach out. My inbox is open 24/7!
        </p>
        <div className="flex justify-center items-center space-x-6">
          <a
            href="mailto:prabhathangam507@hotmail.com"
            className="hover:text-blue-400 transition duration-200"
            aria-label="Email"
            title="Email"
          >
            <img src={emailIcon} alt="Email" className="w-12 h-12" />
          </a>
          <a
            href="https://www.linkedin.com/in/muthuprabha/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition duration-200"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-12 h-12" />
          </a>
          <a
            href="https://github.com/MuthuprabhaT"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-200"
            aria-label="GitHub"
            title="GitHub"
          >
            <img src={githubIcon} alt="GitHub" className="w-12 h-12" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;