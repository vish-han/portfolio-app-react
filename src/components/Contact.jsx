import React from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/093d3382-c00f-4fb3-80f2-d9af561f187b"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <div className="sm:visible flex flex-row justify-around mt-5 ml-10  ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/vish-han"
            >
              <FaGithub size={30} />
            </a>{" "}
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://twitter.com/vishaldev09"
            >
              <FaTwitter size={30} />
            </a>{" "}
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://linkedin.com/in/vishaldev09"
            >
              <FaLinkedin size={30} />
            </a>{" "}
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://instagram.com/vishalch09"
            >
              <FaInstagram size={30} />
            </a>
          </div>
          <p className="text-gray-300 py-4">
            // Submit the form below or shoot me an email -
            vshlchauhab@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
