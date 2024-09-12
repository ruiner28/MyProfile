"use client";

import { Description } from "@radix-ui/react-dialog";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaJs } from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//about data
const about = {
  title: "About me",
  description: "Debugging by day, deploying by night.",
  info: [
    {
        fieldName: "",
        fieldValue: "I excel as a full-stack developer, crafting dynamic user experiences with React in the front end and powering the back end with Java and Python's versatility.",
    },
    {
        fieldName: "",
        fieldValue: "I'm actively seeking summer 2025 internship roles where I can contribute my skills in coding and finding efficient solutions. ",
    },
    {
        fieldName: "",
        fieldValue: "Together, we can build the code of tomorrow!",
    },
  ],
};

//experience data
const experience = {
  icon: "assets/resume/badge.svg",
  title: "My experience",

  items: [
    {
      company: "Accenture  (Associate Software Engineer)",
      position: "Associate Software Engineer",
      duration: "2022-2024",
      description:
        "I excelled at debugging and resolving complex calculations, effectively mitigated defects, and crafted and developed new modules for an insurance e-application. I oversaw the entire development lifecycle from conceptualization to deployment, delivering highly efficient and robust solutions to meet client needs.",
    },
  ],
};

//education data
const education = {
  icon: "assets/resume/cap.svg",
  title: "My education",
  description: "🎓 Master's in Computer Science",
  items: [
    {
      University: "Savitribai Phule Pune University - (SPPU)",
      Major: "BE Information Technology",
      duration: "2018-2022",
    },

    {
      University: "California State University Fullerton",
      Major: "MS Computer Science",
      duration: "2024-2026",
    },
  ],
};

//skills data
const skills = {
  title: "My skills",
  description: "Here's a rundown of the technologies I'm proficient in!",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";
import { describe } from "node:test";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {" "}
                    {/* lg:grid-cols-2  add this to make two cols. */}
                    {experience.items.map((items, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[400px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <div className="flex items-center gap-2">
                            {/* dot */}
                            <span className="w-[8px] h-[8px] rounded-full bg-accent"></span>
                            <p className=" text-xl">{items.company}</p>
                          </div>
                          {/*  <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-white/80'>{items.position}                                                    
                                                </h3> */}
                          <span className="text-accent">{items.duration}</span>
                          <p className="max-w-[600px] text-white/50 mx-auto xl:mx-0">
                            {items.description}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((items, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{items.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {items.University}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{items.Major}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">  
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                        <TooltipProvider delayDuration={100}>
                            <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ">
                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="capitalize">{skill.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </li>;
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="h2 text-white/70">{about.description}</p>
                <ul className="grid grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                    {about.info.map((item,index) => {
                        return (
                            <li key={index}>
                                <span>{item.fieldName}</span>
                                <span className="text-white/60">{item.fieldValue}</span>
                            </li>
                        );
                    })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
