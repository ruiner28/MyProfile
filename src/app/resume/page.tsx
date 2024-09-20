"use client";

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaJs,
  FaCoffee,
  FaDatabase,
  FaAws,
  FaLeaf,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiFlask,
  SiPostman,
  SiMongodb,
  SiApachemaven,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useState } from "react";

const about = {
  title: "About me",
  description: "Debugging by day, deploying by night.",
  info: [
    {
      fieldValue:
        "I excel as a full-stack developer, crafting dynamic user experiences with React in the front end and powering the back end with Java and Python's versatility.",
    },
    {
      fieldValue:
        "I'm actively seeking summer 2025 internship roles where I can contribute my skills in coding and finding efficient solutions.",
    },
    {
      fieldValue: "Together, we can build the code of tomorrow!",
    },
  ],
};

const experience = {
  title: "Experience",
  items: [
    {
      company: "@ Accenture",
      position: "Software Engineer 👨‍💻",
      duration: "2022-2024",
      description: [
        "Designed and developed new modules for an insurance e-application from scratch (using JS), managing the entire development lifecycle from conceptualization to deployment",
        "Resolved 50+ complex calculation issues by debugging and mitigating defects in a key insurance application, resulting in a 30% reduction in calculation error rates",
        "Integrated Jenkins and Bitbucket CI/CD pipelines, reducing deployment time by 25% and accelerating release cycles",
        "Refactored and streamlined critical e-application code, achieving a 40% boost in performance and cutting page load times by 20%",
        "Contributed to the full Agile SDLC, designing and developing application functionalities, creating learning materials, and handling deployments.",
      ],
    },
  ],
};

const education = {
  title: "Education",
  items: [
    {
      university: "California State University Fullerton",
      major: "MS Computer Science",
      duration: "2024-2026",
    },
    {
      university: "Savitribai Phule Pune University (SPPU)",
      major: "BE Information Technology",
      duration: "2018-2022",
    },
  ],
};

const skills = {
  title: "Skills",
  description: "Here's a rundown of the technologies I'm familiar with!",
  skillList: [
    { icon: <SiPython color="#3776AB" />, name: "Python" },
    { icon: <SiFlask color="#000000" />, name: "Flask" },
    { icon: <FaCoffee color="#007396" />, name: "Java" },
    { icon: <FaLeaf color="#6DB33F" />, name: "Spring Boot" },
    { icon: <FaAws color="#FF9900" />, name: "AWS" },
    { icon: <FaJs color="#F7DF1E" />, name: "JavaScript" },
    { icon: <FaReact color="#61DAFB" />, name: "React.js" },
    { icon: <SiNextdotjs color="#000000" />, name: "Next.js" },
    { icon: <SiTailwindcss color="#38BDF8" />, name: "Tailwind CSS" },
    { icon: <FaDatabase color="#4479A1" />, name: "SQL" },
    { icon: <SiMongodb color="#47A248" />, name: "MongoDB" },
    { icon: <SiPostman color="#FF6C37" />, name: "Postman" },
  ],
};

const Resume = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
      className="min-h-[100vh] bg-[#1c1c1e] text-white"
    >
      <div className="container mx-auto px-4 py-12 ">
        {/* About Section */}
        <section className="mb-16 text-left  flex flex-col">
          <h3 className="text-4xl font-bold mb-4 text-left ">
            <span className="border-b-4  inline-block">{about.title}</span>
          </h3>
          <p className="text-lg mb-4">{about.description}</p>
          <ul className="text-white/70 space-y-3">
            {about.info.map((item, index) => (
              <li key={index}>{item.fieldValue}</li>
            ))}
          </ul>
        </section>

        {/* Experience Section */}

        <section className="mb-16">
          <h3 className="text-4xl font-bold mb-4 text-left ">
            <span className="border-b-4  inline-block">{experience.title}</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Side: Button List */}
            <div className="flex flex-col gap-4">
              {experience.items.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedExperience(index)}
                  className={`py-3 px-6 rounded-lg border-2 border-transparent transition-colors relative  ${
                    selectedExperience === index
                      ? "border-accent"
                      : "border-gray-800"
                  } hover:border-accent`}
                >
                  {item.position} - {item.company}
                </button>
              ))}
            </div>

            {/* Right Side: Experience Details */}
            <div className="text-white">
              <div className="mb-6">
                <h4 className="text-2xl text-accent font-bold">
                  {experience.items[selectedExperience].position} -{" "}
                  {experience.items[selectedExperience].company}
                </h4>
                <p className="text-lg mb-2">
                  {experience.items[selectedExperience].duration}
                </p>
                <ul className="list-disc pl-5 space-y-2 text-white/70">
                  {experience.items[selectedExperience].description.map(
                    (desc, idx) => (
                      <li key={idx}>{desc}</li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-left">
            <span className="border-b-4 inline-block">{skills.title}</span>
          </h2>

          <p className="text-left mb-6 text-white/70">{skills.description}</p>
          <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            {skills.skillList.map((skill, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-[#232329] p-4 rounded-full shadow-lg flex flex-col items-center justify-center"
              >
                <div className="text-4xl">{skill.icon}</div>
                <p className="mt-4 capitalize text-lg">{skill.name}</p>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Education Section */}
        <section>
          <h3 className="text-4xl font-bold mb-8 text-left">
            <span className="border-b-4 inline-block pb-2">
              {education.title}
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {education.items.map((item, index) => (
              <div
                key={index}
                className="bg-[#232329] p-6 rounded-lg shadow-lg hover:bg-[#35353a] transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.university}
                </h3>
                <p className="text-accent">{item.major}</p>
                <p className="text-white/70">{item.duration}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Resume;
