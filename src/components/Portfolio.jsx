import React from "react";
import lms_admin from "../assets/Projects/LMS_admin.png";
import lms_student from "../assets/Projects/LMS_student.png";
import octoplex from "../assets/Projects/octoplex.png";
import smartScience from "../assets/Projects/smartScience.png";
import tripHeaven from "../assets/Projects/tripHeaven.png";
import { AiFillGithub, AiOutlineGithub } from "react-icons/ai";

const projects = [
  {
    img: smartScience,
    title: "Smart Science Lab",
    client: "Smart Science Lab",
    service: "Frontend Developer",
    description:
      "As an Associate Software Engineer at Synapsys, I contributed to the Smart Science Lab, an innovative virtual science platform transforming how students engage with physics, chemistry, and biology. This web-based system allows students to conduct interactive experiments, breaking traditional learning barriers. My role focused on enhancing functionality, improving user experience, and ensuring seamless performance, enabling students to explore scientific concepts dynamically. Collaborating with the UI/UX team, we refined the platform to provide an intuitive and immersive learning environment, making science education more accessible and engaging.",
    links: {
      site: "https://smartsciencelab.com/smartscience/",
      github: null,
    },
  },
  {
    img: octoplex,
    title: "OCTOPLEX",
    client: "DFCC head office",
    service: "Frontend Developer",
    description:
      "As a Frontend Developer on the OCTOPLEX project, I am contributing to the revamp of DFCC Bank Head Office's existing system by leveraging modern frontend technologies. My role involves building a scalable and maintainable React architecture, utilizing Redux for efficient state management, and ensuring component reusability to enhance development efficiency. I focus on implementing best practices such as modular design, and performance optimizations. This modernization effort aims to improve the platform’s usability, maintainability, and overall performance, ensuring a future-ready digital experience.",
    links: {
      site: null,
      github: null,
    },
  },
  {
    img: tripHeaven,
    title: "TRIPHEAVEN",
    client: null,
    service: "Fullstack Developer",
    description:
      "TripHeaven is my personal project. It’s a travel platform built using best practices for both frontend and backend development. The backend is powered by Node.js with MongoDB as the database, ensuring scalability and efficiency, while the frontend is developed with React for a dynamic and responsive user experience. The platform allows users to explore and share destinations, organizing them by cities with interactive maps highlighting locations and nearby restaurants. Travelers can post feedback, making it a community-driven space for discovering and reviewing places. The goal is to provide an engaging and seamless experience for users to navigate and share their travel experiences.",
    links: {
      site: "https://triphaven.pages.dev/",
      github: "https://github.com/lahiruSanjeewa2971/TripHaven",
    },
  },
];

const Portfolio = () => {
  return (
    <div className="max-w-[1500px] flex flex-col justify-center items-center p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>

      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row ${
            index % 2 !== 0 ? " lg:flex-row-reverse" : ""
          } mb-12`}
        >
          <div className="w-full lg:w-1/2 p-4">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg shadow-lg border"
            />
          </div>
          <div className="w-full lg:w-1/2 p-4 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex space-x-4 items-center">
              {project?.links?.site && (
                <a
                  href={project?.links?.site}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                >
                  View Site
                </a>
              )}
              {project?.links?.github && (
                <a
                  href={project?.links?.github}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300"
                >
                  <AiOutlineGithub className="w-6 h-6" />
                </a>
              )}
              {project.client && (
                <span>
                    <span className="text-white">Client : </span> {project.client}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
