import { motion } from "framer-motion";
import React from "react";

const experiences = [
  {
    experienceType: "Work Experience",
    places: [
      {
        place: "SYNAPSYS LTD",
        period: "Feb 2023 - Present",
        title: "Associate Software Engineer",
      },
      {
        place: "Bittbash (Pvt) Limitted",
        period: "May 2022 - Dec 2022",
        title: "Software Engineer Intern",
      },
    ],
  },
  {
    experienceType: "Education",
    places: [
      {
        // place: "Sri Lanka Institute of Information Technology",
        place: "SLIIT Campus",
        period: "Feb 2019 - Dec 2022",
        title:
          "BSc (Hons) in Information Technology Specialising in Software Engineering",
      },
      {
        place: "Wayamba University of Sri Lanka",
        period: "2019 - 2020",
        title: "Diploma in Software Engineer",
      },
    ],
  },
];

const listVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.3 }, // Staggered effect
  }),
};

const Experience = () => {
  return (
    <div className="lg:px-0 px-8 pb-14 w-full">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
        Experience
      </h1>
      <motion.div
        className="lg:mx-48 md:mx-2 flex lg:flex-row flex-col items-center justify-center gap-8"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {experiences.map((experienceType, singleIndex) => (
          <div
            key={singleIndex}
            className="flex flex-col justify-center items-start w-full border-l-2 pl-2"
          >
            <h2 className="md:text-2xl text-2xl mb-4 text-white">
              {experienceType.experienceType}
            </h2>
            {experienceType.places.map((singlePlace, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-start w-full p-2 border border-purple-900 bg-purple-900/20 mb-2 rounded-lg cursor-pointer"
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
              >
                <div className="flex flex-row items-center justify-between w-full">
                  <span className="text-white">{singlePlace.place}</span>
                  <span className="text-gray-400 text-sm">
                    {singlePlace.period}
                  </span>
                </div>
                <span className="text-gray-300 mt-3">{singlePlace.title}</span>
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
