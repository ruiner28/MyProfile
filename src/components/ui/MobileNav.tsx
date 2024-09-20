"use client";

import { useState } from "react"; // Import useState
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects", // Projects
    path: "/work",
  },
  {
    name: "About", // this was resume
    path: "/resume",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // Create state to control Sheet visibility

  const handleClose = () => setIsOpen(false); // Function to close the Sheet

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-28 mb-28 flex justify-center item-center">
          <Link href="/">
            <img
              src="/assets/gp_coloured.svg"
              alt="Logo"
              className="w-14 h-14" // Adjust width and height as needed
              onClick={handleClose} // Attach the handleClose function to the img tag
            />
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-10">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
                onClick={handleClose} // Close the Sheet when a link is clicked
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
