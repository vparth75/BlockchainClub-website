import { useState } from "react";
import placeholderLogo from "../assets/placeholderLogo.svg";
import {HamburgerIcon} from "../assets/HamburgerIcon.jsx";

export const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return <div className="bg-zinc-800 h-12 text-white flex justify-between items-center w-full sm:px-8">
    <img src={placeholderLogo} className="h-12 p-3"></img>
    <div className="hidden sm:flex px-3 gap-8">
      <Button name={'Home'}/>  
      <Button name={'Events'}/>
      <Button name={'Gallery'}/>  
      <Button name={'Partners'}/>  
    </div>
    <div className="w-8 sm:hidden mx-3 cursor-pointer" onClick={() => setDropdownVisible(!dropdownVisible)}>
      <HamburgerIcon className="text-white w-8"/>
    </div>
    {dropdownVisible && <Dropdown/>}
  </div>
}

const Button = ({name}) => {
  return <button>
    {name}
  </button>
}

const Dropdown = () => {
  return <div className="absolute top-14 right-0 bg-zinc-800 w-1/4">
    hi
  </div>
}