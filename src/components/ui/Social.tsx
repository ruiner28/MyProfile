import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaEnvelope, FaInstagram, FaPhone } from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path:"https://github.com/ruiner28"},
    {icon: <FaLinkedinIn />, path:"https://www.linkedin.com/in/gaurav-pawar-10/"},
    {icon: <FaEnvelope />, path:"mailto:gauravpawar@csu.fullerton.edu"},
];

interface SocialProps {
    containerStyles: string;
    iconStyles: string;  
  }

const Social: React.FC<SocialProps> = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
        {socials.map((item, index) => {
            return(
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            );
        })}
        </div>
    );
};

export default Social; 
