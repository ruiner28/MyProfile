"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from 'react';  // Import useEffect
import Social from "@/components/ui/Social";


const Contact = () => {

    useEffect(() => {
        const timer = setTimeout(() => {
          window.scrollTo({
              top: document.body.scrollHeight, // Scroll to the bottom of the page
              behavior: 'smooth' // Smooth scrolling effect
          });
      }, 4000);
      return () => clearTimeout(timer);
    }
  ,     []); 

    return (
        <div className="flex flex-col justify-center items-center h-screen text-center container mx-auto">
            <p className="text-accent mb-4">What's Next?</p>
            <h1 className="h1 mb-6">Get In Touch</h1>
            {/* Container for the text */}
            <div className="max-w-lg p-4 mb-6 ">
                <p className="text-white/70">
                "I’m always excited to connect! Whether you have a question, a project idea, or want to say hello, I’d love to hear from you. 
                Feel free to reach out anytime—I'm open to discussing job opportunities, collaborations, or anything tech-related. 
                Let’s build something great together!"
                </p>
            </div>
            <a href="mailto:gauravpawar@csu.fullerton.edu">
                <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2"
                >
                    <span>Say Hello!</span>
                </Button>
            </a>

             
             {/* Social Media Links */}
             
             <div className="mb-12 xl:mb-12 mt-6">
                                <Social
                                    containerStyles="flex gap-6"
                                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                                />
            </div>  
               
        </div>

        
    );
};

export default Contact;

    


    