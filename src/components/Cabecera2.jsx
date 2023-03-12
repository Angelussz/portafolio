import React, {useState} from "react";
import Logo from '../images/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
const menus = [
  { menu: "Main", link: "/" },
  { menu: "About Me", link: "/" },
  { menu: "My Cv", link: "/" },
  { menu: "Contact Me", link: "/" },
];
const Cabecera2 = () => {
  const [menuMostrar, setMenuMostrar] = useState(false)
  return (
    <nav>
      <div className="bg-header-color flex justify-between h-20 items-center   relative">
        <GiHamburgerMenu className="w-16 h-3/6 cursor-pointer " onClick={()=>{setMenuMostrar(!menuMostrar)}}/>
        <ul className={`absolute  bg-header-color w-full p-5 border-t-4 border-solid border-gray-400 font-bold leading-10 text-2xl transition-all duration-500 ease-in -z-10 ${menuMostrar?"top-20 opacity-100":"-top-96 opacity-0"}`}>
          {menus.map((menu)=>{
            return(
              <li key={menu.menu} >
              <a href={menu.link} className="hover:text-gray-400 duration-500 font-normal">{menu.menu}</a>
              </li>
            )
          })}
        </ul>
        <div className="flex items-center justify-center">
        <div className="w-24 h-14">
          <img src={Logo} alt="Logo" className="h-full" />
        </div>
        <div className="mr-3">
          <h2 className="font-bold">Angelo Perez</h2>
          <p className="text-xs text-center" >Web Developer</p>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Cabecera2;
