// Sidebar.js
import React from "react";

function Sidebar() {
  return (
    <div className="bg-zinc-800 text-white border-radius: 0.25rem f-screen w-64 rounded-lg shadow-md flex flex-col  items-center my-10 mx-10 ">
      <div className="my-16">
        <img
          src="\src\assets\my.jpg"
          alt="Profile"
          className="w-20 h-20 rounded-full mr-2"
        />
        <div className="mb-4">
          <h2 className="text-lg font-bold">Vishal Yadav</h2>
          <p>Web Developer</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold">EMAIL</h3>
          <p>yadavvshall@gmail.com</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold">PHONE</h3>
          <p>8668279388</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-bold">BIRTHDAY</h3>
          <p>July 03, 2001</p>
        </div>
        <div>
          <h3 className="text-lg font-bold">LOCATION</h3>
          <p>Nashik, Maharashtra, India</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
