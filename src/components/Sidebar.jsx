import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FcPhone, FcPlanner, FcFeedback } from "react-icons/fc";
import "./Styles/styles.css";

function Sidebar() {
  return (
    <div className="bg-eerie-black-2 text-white rounded-lg shadow-md flex flex-col items-center max-h-custom my-10 mx-10 p-6">
      <div className="my-6 flex items-center">
        <img
          src="\src\assets\my.jpg"
          alt="Profile"
          className="w-20 h-20 rounded-full mr-2"
        />
      </div>
      <div>
        <h2 className="text-lg font-bold">Vishal Yadav</h2>
        <p>Web Developer</p>
      </div>
      <div className="mb-4 flex items-center">
        <div className="border-2 border-gray-700 rounded-lg p-2 mr-4">
          <FcFeedback />
        </div>
        <div>
          <h3 className="text-lg font-bold">EMAIL</h3>
          <p>yadavvshall@gmail.com</p>
        </div>
      </div>
      <div className="mb-4 flex items-center">
        <div className="border-2 border-gray-700 rounded-lg p-2 mr-4">
          <FcPhone />
        </div>
        <div>
          <h3 className="text-lg font-bold">PHONE</h3>
          <p>8668279388</p>
        </div>
      </div>
      <div className="mb-4 flex items-center">
        <div className="border-2 border-gray-700 rounded-lg p-2 mr-4">
          <FcPlanner />
        </div>
        <div>
          <h3 className="text-lg font-bold">BIRTHDAY</h3>
          <p>July 03, 2001</p>
        </div>
      </div>
      <div className="mb-4 flex items-center">
        <div className="border-2 border-gray-700 rounded-lg p-2 mr-4">
          <FaMapMarkerAlt />
        </div>
        <div>
          <h3 className="text-lg font-bold">LOCATION</h3>
          <p>Nashik, Maharashtra, India</p>
        </div>
      </div>
      {/* Social Icons with Links */}
      <div className="flex space-x-4">
        <a href="https://www.facebook.com">
          <FaFacebook />
        </a>
        <a href="https://twitter.com/yadavvshall">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/in/vshall">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/vishalxy">
          <FaInstagram />
        </a>
        <a href="https://github.com/yadavvshall">
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
