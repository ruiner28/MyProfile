"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "Projects", // Projects
    path: "/work"
  },
  {
    name: "About", // This was resume
    path: "/resume"
  },
  {
    name: "Contact",
    path: "/contact"
  }
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname &&
              "text-accent border-b-2 border-accent" // Matching accent color for border and text
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
