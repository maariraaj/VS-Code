import React from "react";
import emailIcon from "../assets/mailIcon.svg";
import linkedinIcon from "../assets/linkedInIcon.svg";
import githubIcon from "../assets/githubIcon.svg";

const Contact = () => {
  return (
    <div
      name="contact"
      className="contact w-full h-48 bg-black p-4 text-white"
    >
      <div className="p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
        </div>

        <div className="flex justify-center items-center space-x-6 mt-2">
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
