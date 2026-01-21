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
    title: "IntervYou",
    description: [
    "Developed “IntervYou” — a multimodal AI interview coach that analyzes a candidate’s resume and job description to auto-generate role-specific behavioral and technical questions.",
    "System Design - Practice questions on system design we have Excalidraw integrated into our application."
    ],
    link: "https://interview-ai-umber.vercel.app/",
    technologies: "React, Next.js, Tailwind CSS",
    socials: [{ icon: <FaGithub /> }],
  },
  {
    title: "Lumora",
    description: [
    "Launched LLM therapy chatbot with persistent memory and multilingual support.",
    "Enabled empathetic, real-time conversations with cross-session context carryover.",
    "Built auth (login/signup + SSO) and a journaling workspace (streaks, mood tags, history).",
    "Shipped therapist portal & scheduling; flagged at-risk users and matched licensed therapists."
    ],
    link: "http://lumoraa.app/",
    technologies: "React, Next.js, Tailwind CSS",
    socials: [{ icon: <FaGithub /> }],
  },
  {
    title: "Portfolio Project",
    description: [
      "Developed an interactive portfolio website using React, Next.js, and Tailwind CSS",
      "Implemented smooth animations and transitions for a polished user experience while ensuring responsive design across devices.",
    ],
    link: "https://github.com/ruiner28/MyProfile",
    technologies: "React, Next.js, Tailwind CSS",
    socials: [{ icon: <FaGithub /> }],
  },
  {
    title: "AI Article Summarizer",
    description: [
      "Engineered an AI-driven web application for faster article summarization.",
      "Introduced a history feature with local storage for easy summary management; added 'copy to clipboard' for user convenience",
    ],
    link: "https://url-summary.vercel.app/",
    technologies: "JavaScript, Node.js, Redux, React, RapidAPI",
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
];

const Work = () => {
  return (
    <div className="container mx-auto px-4">
      <h3 className="text-4xl font-bold mb-8 text-left">
        <span className="border-b-4 inline-block pb-2">Projects</span>
      </h3>
      <p className="text-left mb-6 text-white/70">Some Things I’ve Built</p>

      <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex-none w-[300px] shadow-lg rounded-lg p-6 transition-all duration-300 bg-[#232329] transform hover:shadow-2xl hover:scale-105"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>

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
                  <a className="hover:text-gray-500 text-3xl">{item.icon}</a>
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
