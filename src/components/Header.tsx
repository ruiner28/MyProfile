import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./ui/MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <img
            src="/assets/gp_coloured.svg"
            alt="Logo"
            className="w-14 h-14" // Adjust width and height as needed
          />
        </Link>

        {/* desktop nav & hire button*/}
        <div className="hidden xl:flex item-center gap-8">
          <Nav />
          {/*  uncomment this code for hire button
                
                <Link href= "/contact">
                  <Button>Hire me</Button>
                </Link>

                */}
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

{
  /** */
}
