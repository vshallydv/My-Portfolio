import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Styles/styles.css";
import { BsFillSendFill } from "react-icons/bs";

function ContactForm({ onSelectSection }) {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL = `https://script.google.com/macros/s/AKfycbxkQ6Zj-Se5ew_Ln7t3sOxc_tKRHdLOH3uPv3M0KRISixvVXyE9vXLpShEty0A-7X1M/exec`;

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(e.target),
      });
      if (response.ok) {
        console.log("Form submitted successfully!");
        setFormData({
          fullname: "",
          email: "",
          message: "",
        });
        document.getElementById("success-message").style.display = "block";
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="contact-form bg-eerie-black-2 p-8 rounded-lg shadow-md my-10 mx-12 text-white max-h-custom overflow-y-auto">
      <Navbar onSelectSection={onSelectSection} />
      <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
      <div className="contact">
        <form
          name="submit-to-google-sheet"
          className="form"
          data-form
          onSubmit={handleSubmit}
        >
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="mt-4 p-3 w-full md:w-80 border border-gray-700 rounded-md bg-eerie-black-2 form-input mb-4"
              placeholder="Full name"
              required
              value={formData.fullname}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              className="mt-1 p-3 w-full md:w-80 border border-gray-700 rounded-md bg-eerie-black-2 form-input mb-4 ml-12 "
              placeholder="Email address"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            rows="8"
            className="form-input mt-12 p-2  textarea-small border  border-gray-700 rounded-md bg-eerie-black-2 "
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="form-btn mt-12 bg-blue-500 hover:bg-blue-700 text-orange-300 font-bold py-3 px-8 bg-zinc-800 border-2 border-zinc-900 rounded-lg shadow-xl flex items-center justify-center"
            data-form-btn
          >
            <ion-icon name="paper-plane" className="text-lg mr-2"></ion-icon>
            <span className="flex items-center">
              <BsFillSendFill className="text-lg mr-2" />
              Send Message
            </span>
          </button>
        </form>
      </div>

      {/* Success Message Div */}
      <div id="success-message" style={{ display: "none" }}>
        Thank you for your message. We will get back to you shortly.
      </div>
    </div>
  );
}

export default ContactForm;
