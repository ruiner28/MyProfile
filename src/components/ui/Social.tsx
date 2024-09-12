import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram, FaPhone } from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path:"https://github.com/ruiner28"},
    {icon: <FaLinkedinIn />, path:"https://www.linkedin.com/in/gaurav-pawar-10/"},
    {icon: <FaInstagram />, path:"https://www.instagram.com/_gaurav__28?igsh=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr"},
    {icon: <FaPhone />, path:"tel:+17145197299"},
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
