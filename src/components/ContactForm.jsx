// ContactForm.js
import React, { useState } from "react";
import Navbar from "./Navbar";

function ContactForm({ onSelectSection }) {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-zinc-800 p-8 rounded-lg shadow-md my-10 mx-5">
      <Navbar onSelectSection={onSelectSection} />
      <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 p-2 w-full md:w-80 border rounded-md bg-zinc-800" // Adjust width here
            />
          </div>
          <div>
            <label
              htmlFor="emailAddress"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              placeholder="Email Address"
              value={formData.emailAddress}
              onChange={handleChange}
              className="mt-1 p-2 w-full md:w-80 border rounded-md  bg-zinc-800" // Adjust width here
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md bg-zinc-800" // Full width for textarea
            ></textarea>
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-orange-300 font-bold py-2 px-4 bg-zinc-800 border-2 border-zinc-900 rounded-lg shadow-xl"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
