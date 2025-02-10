import { motion } from "framer-motion";
import React from "react";

// const experiences = [
//   {
//     company: "SYNAPSYS LTD",
//     period: "Feb 2023 - Present",
//     role: "Associate Software Engineer",
//   },
//   {
//     company: "Bittbash (Pvt) Limitted",
//     period: "May 2022 - Dec 2022",
//     role: "Software Engineer Intern",
//   },
// ];

const experiences = [
  {
    experienceType: "Work Experience",
    places: [
      {
        company: "SYNAPSYS LTD",
        period: "Feb 2023 - Present",
        role: "Associate Software Engineer",
      },
      {
        company: "Bittbash (Pvt) Limitted",
        period: "May 2022 - Dec 2022",
        role: "Software Engineer Intern",
      },
    ],
  },
  {
    experienceType: "Education",
    places: [
      {
        place: "Sri Lanka Institute of Information Technology",
        period: "Feb 2019 - Dec 2022",
        education:
          "BSc (Hons) in Information Technology Specialising in Software Engineering",
      },
      {
        place: "Wayamba University of Sri Lanka",
        period: "2019 - 2020",
        education: "Diploma in Software Engineer",
      },
    ],
  },
];

const Experience = () => {
  return (
    <div className="p-8 w-full">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
        Experience
      </h1>
      <motion.div
        className="lg:mx-48 md:mx-2 flex md:flex-row flex-col items-center justify-center gap-4"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {experiences.map((experienceType, singleIndex) => (
          <div key={singleIndex} className="flex flex-col justify-center items-center bg-yellow-300 w-full">
            <h2>{experienceType.experienceType}</h2>
          </div>
        ))}
        {/* {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="flex flex-col w-full mx-auto border border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10"
            // className="max-w-[600px] mx-auto border border-purple-600 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bgpurple700/10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-gray-100 text-xl font-semibold">
              {experience.company}
            </h2>
            <span className="text-gray-400 text-base">{experience.period}</span>
            <span className="text-gray-400 text-base mt-4">
              {experience.role}
            </span>
          </motion.div>
        ))} */}
      </motion.div>
    </div>
  );
};

export default Experience;
