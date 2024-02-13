import React from "react";
import Navbar from "./Navbar";

function AboutMeSection({ onSelectSection }) {
  return (
    <div className="bg-zinc-800 p-8 rounded-lg shadow-md my-10 mx-5 ">
      <Navbar onSelectSection={onSelectSection} />
      <h2 className="text-2xl text-white font-bold mb-4">About Me</h2>
      <p className="mb-4 text-gray-300">
        Dedicated Instrumentation Engineer skilled in Java, C++, and SQL, with a
        strong foundation in web development and automation. Capgemini-trained
        in Java, Spring, and React, eager to contribute innovative solutions.
      </p>
      <div className="border-t border-gray-200 pt-4 text-white">
        <div className="flex items-center mb-4">
          <img
            src="design-icon.png"
            alt="Design Icon"
            className="w-8 h-8 mr-2"
          />
          <div>
            <h3 className="font-semibold">Web Design</h3>
            <p className="text-sm text-gray-300">
              The most modern and high-quality design made at a Beginner level.
            </p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <img
            src="web-development-icon.png"
            alt="Web Development Icon"
            className="w-8 h-8 mr-2"
          />
          <div>
            <h3 className="font-semibold">Web Development</h3>
            <p className="text-sm text-gray-300">
              High-quality development of sites at the intermediate level.
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src="photography-icon.png"
            alt="Photography Icon"
            className="w-8 h-8 mr-2"
          />
          <div>
            <h3 className="font-semibold">Photography</h3>
            <p className="text-sm text-gray-300">
              I make high-quality photos of any category at a Beginner level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMeSection;
