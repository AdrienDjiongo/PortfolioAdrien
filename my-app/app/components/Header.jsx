"use client";
import "@fontsource/fira-code/400.css"; // Regular weight
import "@fontsource/fira-code/700.css"; // Bold weight (optional)

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex justify-between items-center p-5   text-white">
      <p className="text-xl">Adrien</p>
      <div className="sm:hidden ">
        {menuOpen ? (
          <X size={30} onClick={toggleMenu} />
        ) : (
          <Menu size={30} onClick={toggleMenu} />
        )}
      </div>
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-16 right-0 w-fit  sm:bg-transparent bg-gray-800 sm:static sm:block sm:w-auto`}
      >
        <ul className="flex flex-col sm:flex-row sm:gap-8 text-[#ABB2BF] p-5 sm:p-0">
          <li>
            <Link href="/">
              <p className="block py-2 sm:py-0">
                <span className="text-[#C778DD]">#</span>Home
              </p>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <p className="block py-2 sm:py-0">
                <span className="text-[#C778DD]">#</span>Projects
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
