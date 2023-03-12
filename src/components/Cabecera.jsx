import React, { useState } from "react";
import logo from "../images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const menus = [
  { menu: "Main", link: "/" },
  { menu: "About Me", link: "/" },
  { menu: "My Cv", link: "/" },
  { menu: "Contact Me", link: "/" },
];

const Cabecera = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = (e) => {
    setOpen(!open);
  };
  return (
    <header className="shadow-sm w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-header-color py-8 md:px-10 px-7">
        
        <div className="font-bold text-2x1 cursor-pointer flex items-center relative">
          <img src={logo} alt="logo" className="w-20 h-12" />
          <div>
            <p>Angelo Perez</p>
            <p className="text-xs">Web Developer</p>
          </div>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 bg-header-color absolute w-full left-0 md:static md:z-auto z-[-1] md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open?'top-28 opacity-100': '-top-96 opacity-0'} `}>
          {menus.map((link)=>(
            <li key={link.menu} className="md:ml-8 text-xl md:my-0 my-7">
              <a href={link.link} className = "text-font-color-1 hover:text-gray-400 duration-500">{link.menu}</a>
            </li>
          ))}
        </ul>
        <div className="text-3xl absolute right-8 top-10 cursor-pointer" onClick={handleMenu}>
          {open ? <AiOutlineClose /> :<GiHamburgerMenu />}
        </div>
      </div>
    </header>
  );
};

export default Cabecera;
