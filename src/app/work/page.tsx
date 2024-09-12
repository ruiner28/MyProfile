"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useEffect } from "react"; // Import useEffect
import Social from "@/components/ui/Social";

const socials = [
    { 
    icon: <FaGithub />, 
    path: "https://github.com/ruiner28" 
   }];

const projects = [
  {
    title: "Self-Driving Car Service",
    description:
      "Developed a web app for self-driving and rental car services using the Flask framework, building the back-end in Python and the front-end with HTML, CSS, and JavaScript.  Coded CRUD operations on a local database for managing car service data.",
    link: "https://github.com/ruiner28/DriveMe-Final",
    technologies: "python, javascript flask",
    socials: [{ icon: <FaGithub /> }],
  },
  {
    title: "Employee Managment System",
    description:
      "Implemented a Java-based microservice using Spring Boot, and adapted its deployment on Amazon EC2, demonstrating expertise in Java, Spring Boot, microservices architecture, cloud deployment, and infrastructure management. \n Coded front-end web pages using React.js and utilized the power of React hooks to extract logic from different components Utilized MobileNet-SSD framework to identify humans in video sequences, processing images at 155 frames per second (FPS).",
    link: "/projects/banking-chatbot",
    technologies: "python, javascript flask",
    socials: [{ icon: <FaGithub /> }],
  },
  {
    title: "Vision Based Social Distance Monitoring System",
    description:
      "Implemented YOLO algorithm for real-time object detection, achieving 50% faster and more accurate results compared to other market algorithms in surveillance systems. Utilized MobileNet-SSD framework to identify humans in video sequences, processing images at 155 frames per second (FPS)",
    link: "/projects/object-detection",
    technologies: "python, javascript flask",
    socials: [{ icon: <FaGithub /> }],
  },
];

{/*
    const Work = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="shadow-lg rounded-lg p-6 hover:shadow-4xl transition-shadow duration-300 bg-white/50"
          >
            <h3 className="text-2xl font-semibold text-white/70 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a href={project.link} className=" hover:underline text-4xl">
            {socials.map((item, index) => {
                return (
                  <Link key={index} href={project.link}>
                    {item.icon}
                  </Link>
                );
              })}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
    */}

    const Work = () => {
        return (
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 bg-white/50"
                >
                  <h3 className="text-2xl font-semibold text-white/70 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                  <p className="text-gray-700 mb-4 text-col-black">{project.technologies}</p>
      
                  <div className="flex space-x-4">
                    {project.socials.map((item, socialIndex) => (
                      <Link legacyBehavior key={socialIndex} href={project.link}>
                        <a className="text-gray-800 hover:text-gray-500 text-3xl">
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
