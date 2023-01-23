import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenu] = useState(false);
  const closeMenu = () => setMobileMenu(false);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full h-2.5 bg-main-yellow"></div>
      <div className="w-full px-2 lg:w-4/5 lg:px-0 flex flex-row mt-5 lg:mt-8 m-auto justify-between">
        <h3 className="flex flex-row font-roboto font-medium text-2xl lg:text-3xl gap-2 items-center text-white">
          URANOS
          <span className="h-min rounded bg-main-yellow text-center text-base px-2 leading-6 text-black">
            PSD
          </span>
        </h3>
        <div className="hidden lg:flex flex-row gap-5 items-center">
          <NavLink>Home</NavLink>
          <NavLink selected={true}>About Us</NavLink>
          <NavLink>Our Team</NavLink>
          <NavLink>Portfolio</NavLink>
          <NavLink>Contact</NavLink>
        </div>
        <div
          className="flex lg:hidden items-center justify-center w-10 h-10 rounded-full cursor-pointer p-2 bg-main-yellow"
          onClick={() => setMobileMenu((i) => !i)}
        >
          {isMobileMenuOpen ? <VscChromeClose /> : <FiMenu />}
        </div>
      </div>
      <div className="flex lg:hidden items-center justify-center">

      </div>
    </div>
  );
};

export default Header;

export const NavLink = ({ children, selected }) => {
  return (
    <a
      className={`text-center font-roboto font-medium text-base uppercase rounded text-white py-2 ${selected ? "bg-main-yellow px-3 text-black" : ""}`}
    >
      {children}
    </a>
  );
};
