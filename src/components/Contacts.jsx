import { motion } from "framer-motion";
import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Contacts = () => {
  return (
    <div className="px-6 max-w-[1000px] mx-auto md:my-12" id="contact">
      <div className="grid md:grid-cols-2 place-items-center">
        <div>
          <div className="text-gray-300 my-3">
            <h3 className="text-4xl font-semibold mb-5">
              About <span>Me</span>
            </h3>
            <p className="text-justify leading-7 w-11/12 mx-auto">
              I'm a Full-Stack Developer with 2 years of experience building
              user-friendly and reliable applications. I work with front-end
              tools like HTML, CSS, JavaScript, React, and React Native, and
              back-end technologies like Node.js and Express. I'm experienced in
              working with databases like MongoDB, Firebase and MySQL, and I'm
              skilled in using Git, Azure, and API development. I love to
              up-to-date with new industry trends. I'm looking for a role where
              I can grow, solve challenges, and contribute to exciting projects
            </p>
          </div>

          <div className="flex mt-10 items-center gap-7">
            <div className="bg-gray-800/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                3 <span>+</span>
              </h3>
              <p className="text-xs md:text-base">
                <span>Projects</span>
              </p>
            </div>

            <div className="bg-gray-800/40 p-5 rounded-lg">
              <h3 className="md:text-4xl text-2xl font-semibold text-white">
                2 <span>+</span>
              </h3>
              <p className="text-xs md:text-base">
                <span>Years of experience</span>
              </p>
            </div>
          </div>
        </div>
        <form
          action="https://getform.io/f/bwnqgrla"
          method="POST"
          className="max-w-6xl p-5 md:p-12"
          id="form"
        >
          <p className="text-gray-100 font-bold text-xl mb-2">Let's connect!</p>
          <input
            type="text"
            id="name"
            placeholder="Your Name ..."
            name="name"
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
          />
          <input
            type="email"
            id="email"
            placeholder="Your Email ..."
            name="email"
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
          />
          <textarea
            id="textarea"
            placeholder="Your Message ..."
            name="email"
            cols="30"
            rows="4"
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
