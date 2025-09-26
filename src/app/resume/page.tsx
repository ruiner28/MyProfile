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
  FaGit,
  FaGithub,
  FaDocker,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiPython,
  SiFlask,
  SiPostman,
  SiMongodb,
  SiFirebase,
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
      duration: "12/2022 - 07/2024",
      description: [
        "Designed and developed new modules for an insurance e-application from scratch (using JS), managing the entire development lifecycle from conceptualization to deployment",
        "Resolved 50+ complex calculation issues by debugging and mitigating defects in a key insurance application, resulting in a 30% reduction in calculation error rates",
        "Integrated Jenkins and Bitbucket CI/CD pipelines, reducing deployment time by 25% and accelerating release cycles",
        "Refactored and streamlined critical e-application code, achieving a 40% boost in performance and cutting page load times by 20%",
        "Contributed to the full Agile SDLC, designing and developing application functionalities, creating learning materials, and handling deployments.",
      ],
    },
     {
      company: "@ Market EQ Digital",
      position: "Backend Engineering Intern 👨‍💻",
      duration: "06/2025 - 08/2024",
      description: [
      "Implemented QuickBooks (Intuit API) and Zapier for automated wire transfer invoicing and reconciliation workflows, reducing manual operations by 60% and ensuring real-time sync with internal systems.",
      "Built and integrated complete payment workflows using Stripe API for one-time and subscription payments, wallet functionality, and gift card support, handling over 5,000+ user transactions during the internship period.",
      "Designed and deployed a scalable microservices architecture on Render, containerizing services using Docker and migrating infrastructure and PostgreSQL databases from Heroku, improving deployment efficiency by 40%.",
      "Integrated DeepSource for continuous code quality checks and auto pull request merges, improving review time by 30%"
      ],
    },
    {
      company: "@ California State University Fullerton",
      position: "Teaching Assistant 👨‍🏫",
      duration: "08/2025 - 05/2026",
      description: [
      "Designed and maintained a comprehensive syllabus and detailed lecture presentations for the Compilers and Programming Languages course, catering to 40 students and integrating complex theoretical concepts with practical applications.",  
      "Assisted in the development and delivery of course materials for undergraduate computer science courses, enhancing student engagement and understanding.",
      "Conducted weekly lab sessions and office hours, providing one-on-one support to students and fostering a collaborative learning environment.",
      "Collaborated with faculty to design and implement innovative teaching strategies, resulting in improved student performance and satisfaction.",
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
      logo:"/assets/calstate.png",
    },
    {
      university: "Savitribai Phule Pune University (SPPU)",
      major: "BE Information Technology",
      duration: "2018-2022",
      logo: "/assets/sppu.png",
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
    { icon: <FaGit color="#F05032" />, name: "Git" },
    { icon: <FaGithub color="#181717" />, name: "GitHub" },
    { icon: <FaDocker color="#2496ED" />, name: "Docker" },
    { icon: <SiFirebase color="#FFCA28" />, name: "Firebase" },
    { icon: <FaHtml5 color="#E34F26" />, name: "HTML5" },
    { icon: <SiApachemaven color="#FFCA28" />, name: "Maven" },
    { icon: <FaNodeJs color="#000000" />, name: "NodeJS" },
    { icon: <FaCss3 color="#1572B6" />, name: "CSS3" },
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
                  className={`py-3 px-6 rounded-lg border-2 border-transparent transition-colors relative min-w-[300px] shadow-lg rounded-lg p-6 transition-all duration-300 bg-[#232329] transform hover:shadow-2xl hover:scale-105  ${
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

        <div className="container mx-auto px-4 py-12">
        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-left">
            <span className="border-b-4 inline-block">{skills.title}</span>
          </h2>

          <p className="text-left mb-6 text-white/70">{skills.description}</p>

          {/* Scrolling Animation */}
          <div className="overflow-hidden">
            <div className="flex gap-8 animate-scroll-left">
              {skills.skillList.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="bg-[#232329] p-4 rounded-full shadow-lg flex flex-col items-center justify-center min-w-[100px]"
                >
                  <div className="text-4xl">{skill.icon}</div>
                  <p className="mt-2 text-lg text-center">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
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
        className="min-w-[300px] shadow-lg rounded-lg p-6 transition-all duration-300 bg-[#232329] transform hover:shadow-2xl hover:scale-105 flex flex-col items-center text-center"
      >
        <img
          src={item.logo}
          alt={`${item.university} logo`}
          className="w-20 h-20 object-contain mb-4"
        />
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
