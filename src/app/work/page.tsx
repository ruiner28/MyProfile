"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useEffect } from "react"; // Import useEffect
import Social from "@/components/ui/Social";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/ruiner28",
  },
];

const projects = [
  {
    title: "Self-Driving Car Service",
    description: [
      "Developed a web app for self-driving and rental car services using the Flask framework.",
      "Built the back-end in Python and the front-end with HTML, CSS, and JavaScript.",
      "Coded CRUD operations on a local database for managing car service data.",
    ],
    link: "https://github.com/ruiner28/DriveMe-Final",
    technologies: "python, javascript, flask",
    socials: [{ icon: <FaGithub /> }],
  },
  {
    title: "Employee Management System",
    description: [
      "Implemented a Java-based microservice using Spring Boot.",
      "Deployed the application on Amazon EC2, demonstrating expertise in cloud deployment.",
      "Coded front-end web pages using React.js and utilized React hooks for logic extraction.",
    ],
    link: "",
    technologies: "Java, Springboot, React",
    socials: [{ icon: <FaGithub /> }],
  },
  {
    title: "Vision-Based Social Distance Monitoring System",
    description: [
      "Implemented YOLO algorithm for real-time object detection.",
      "Achieved 50% faster and more accurate results compared to other market algorithms.",
      "Utilized MobileNet-SSD framework to identify humans in video sequences.",
    ],
    link: "",
    technologies: "python, flask",
    socials: [{ icon: <FaGithub /> }],
  },
];

const Work = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 bg-[#232329]"
          >
            <h3 className="text-2xl font-semibold mb-2">
              {project.title}
            </h3>

            <ul className="list-disc ml-5 mb-4 text-white/70">
              {project.description.map((bullet, bulletIndex) => (
                <li key={bulletIndex}>{bullet}</li>
              ))}
            </ul>

            <p className="text-white/70 mb-4 text-col-black">
              {project.technologies}
            </p>

            <div className="flex space-x-4">
              {project.socials.map((item, socialIndex) => (
                <Link legacyBehavior key={socialIndex} href={project.link}>
                  <a className=" hover:text-gray-500 text-3xl">
                    {item.icon}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
