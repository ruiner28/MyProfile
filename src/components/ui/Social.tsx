import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaInstagram, FaPhone } from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path:"https://github.com/ruiner28"},
    {icon: <FaLinkedinIn />, path:"https://www.linkedin.com/in/gaurav-pawar-10/"},
    {icon: <FaInstagram />, path:"https://www.instagram.com/instagram/?hl=en"},
    {icon: <FaPhone />, path:"tel:+17145197299"},
];

const Social = ({containerStyles, iconStyles}) => {
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