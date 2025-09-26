"use client";

import { useEffect } from 'react';  // Import useEffect
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Social from "@/components/ui/Social";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";
import Work from './work/page';
import Resume from './resume/page';
import Contact from './contact/page';

const Home = () => {

   {/*
     // Scroll to bottom when the component loads
    useEffect(() => {
      const timer = setTimeout(() => {
        window.scrollTo({
            top: document.body.scrollHeight, // Scroll to the bottom of the page
            behavior: 'smooth' // Smooth scrolling effect
        });
    }, 4000);
    return () => clearTimeout(timer);
  }
,     []);  // Empty dependency array ensures this runs only once on component load
    */}

    return (
        <section className="h-full">
            <div className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                    {/* Text content */}
                    <div className="text-center xl:text-left order-2 xl:order-none">
                        <span className="text-xl">Software Engineer</span>
                        <h1 className="h1 mb-6">
                            Hello I'm <br /> <span className="text-accent">Gaurav Pawar</span>
                        </h1>
                        <p className="max-w-[500px] mb-9 text-white/80">
                            I excel as a full-stack developer, crafting dynamic user experiences with React in the front end and powering the back end with Java and Python's versatility.
                            I'm actively seeking a summer 2025 internship role where I can contribute my skills in coding and finding efficient solutions.
                            Together, we can build the code of tomorrow!
                        </p>
                        
                        {/* Button and Social Media Links */}
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            {/* Download CV Button */}
                            <a href="https://drive.google.com/file/d/1BK6HexHqAjsSM28DrcssaN0GCgFYW472/view?usp=sharing"
                               target='_blank'
                               rel='noopener noreferrer'>
                            <Button
                                variant="outline"
                                size="lg"
                                className="uppercase flex items-center gap-2"
                            >
                                <span>Download Resume</span>
                                <FiDownload className="text-xl" />
                            </Button>
                            </a> 

                            {/* Social Media Links */}
                            <div className="mb-8 xl:mb-0">
                                <Social
                                    containerStyles="flex gap-6"
                                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Photo Component */}
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </div>

            {/* Stats Component */}
                <Stats />
            
            <div className="py-16">
                {/* Resume Component */}
                <Resume />
            </div>

            <div className="py-16 bg-gray-900">
                {/* Work Component */}
                <Work />
            </div>

            <div className="py-12 bg-gray-900">
                {/* Contact Component */}
                <Contact />
            </div>
        </section>
    );
};

export default Home;