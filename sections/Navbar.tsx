"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="header flex justify-between items-center px-8 py-4 bg-gray-100">
      <Link
        href="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
      >
        <p className="blue-gradient_text">AZ</p>
      </Link>
      <nav className="flex text-lg gap-7 font-medium">
        <Link
          href="/about"
          className={`relative transition-all duration-300 ease-in-out hover:scale-105 ${
            pathname === "/about" ? "text-blue-600" : "text-black"
          } `}
        >
          About
        </Link>
        <Link
          href="/projects"
          className={`relative transition-all duration-300 ease-in-out hover:scale-105 ${
            pathname === "/projects" ? "text-blue-600" : "text-black"
          } `}
        >
          Projects
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
