import React from "react";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiMongodb,
  DiGithubBadge,
} from "react-icons/di";
import { SiTailwindcss, SiReact, SiRedux, SiAntdesign, SiExpress, SiAxios } from "react-icons/si";
import Reveal from "./Reveal";
import { LiaDotCircle } from "react-icons/lia";

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML", icon: <DiHtml5 className="text-orange-600 mx-2" /> },
      { name: "CSS", icon: <DiCss3 className="text-blue-600 mx-2" /> },
      {
        name: "JavaScript",
        icon: <DiJavascript1 className="text-yellow-600 mx-2" />,
      },
      { name: "React", icon: <DiReact className="text-blue-600 mx-2" /> },
      { name: "React Native", icon: <SiReact className="text-blue-600 mx-2" /> },
      { name: "Tailwind css", icon: <SiTailwindcss className="text-blue-400 mx-2" /> },
      { name: "Ant Design", icon: <SiAntdesign className="text-blue-600 mx-2" /> },
      { name: "Redux toolkit", icon: <SiRedux className="text-purple-400 mx-2" /> },
    ],
  },
  {
    category: "Fullstack",
    technologies: [
      { name: "MongoDB", icon: <DiMongodb className="text-green-600 mx-2" /> },
      { name: "Express Js", icon: <SiExpress className="text-purple-600 mx-2" /> },
      { name: "Axios", icon: <SiAxios className="text-blue-600 mx-2" /> },
      {
        name: "Node Js",
        icon: <DiNodejsSmall className="text-green-600 mx-2" />,
      },
      { name: "React", icon: <DiReact className="text-blue-600 mx-2" /> },
      {
        name: "GitHub",
        icon: <DiGithubBadge className="text-gray-600 mx-2" />,
      },
    ],
  },
];

// const otherFrontendTech = [
//   {}
// ]

const Skills = () => {
  return (
    <div
      className="flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12"
      id="skills"
    >
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">
          Skills and Technologies
        </h2>
        {/* <p className="text-center mb-8">
        I worked on various frontend and fullstack projects. Check them{" "}
        <a href="#" className="underline">
          there.
        </a>
      </p> */}
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 max-w-[1200px] lg:min-w-[1000px] mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2"
            >
              <h3 className="text-xl font-bold mb-4 text-center">
                {skill.category}
              </h3> 
              <div className="grid grid-cols-2 gap-4">
                {skill.technologies.map((tech, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="text-sm sm:text-lg">{tech.name}</span>
                  </div>
                ))}
              </div>
              {/* <div className="w-full mx-2 mt-4">
                {skill?.otherFrontendTech &&
                  skill?.otherFrontendTech.map((otherSkill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-4">
                      <LiaDotCircle />
                      <span key={skillIndex}>{otherSkill.name}</span>
                    </div>
                  ))}
              </div> */}
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default Skills;
