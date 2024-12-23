import React from "react";
import HeroImage from "../assets/heroImage.png";
import Type from "./Type";
import resume from "../assets/resume.pdf";
import waving from "../assets/waving.svg"

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-black home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between h-full px-4">
        <div className="block md:hidden mb-4">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-1/2"
          />
        </div>
        <div className="flex flex-col justify-center h-full md:w-1/2 text-center md:text-left">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl mb-3 md:text-4xl font-bold text-white">Hi</h1>
            <img src={waving} alt="waving" className="w-10 h-10 mb-auto" />
          </div>
          <h1 className="text-2xl mb-16 md:text-4xl font-bold text-white">I'm Muthuprabha</h1>
          <h2 className="text-xs mb-8 md:text-4xl font-bold text-cyan-400">
            <Type />
          </h2>
          {/* <p className="text-gray-500 py-4 max-w-md mx-auto md:mx-0">
            I have 2 years of experience building websites and designing software.
            I love to work on web applications using technologies like
            React, Tailwind, Next JS, and GraphQL.
          </p> */}
          <a
            href={resume}
            className="flex justify-center items-center w-fit mx-auto md:mx-0 text-white px-6 py-3 my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 transition-transform duration-200"
            download={true}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </div>
        <div className="hidden md:block md:w-1/2">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;