import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className=" w-[65px]  h-[25px]">
      <Link onClick={handleButtonClick} to="" className="mt-[45px]  text-[16px] ">
        <div className=" flex w-[70px]  items-center justify-between opacity-80 font-[600] text-[#38761D]">
          <h3>Login</h3>{" "}
          <svg className="" width="20" height="6" viewBox="0 0 20 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.173 1.65898L16.8797 0.0898438L9.99961 4.79727L3.11953 0.0898438L0.826172 1.65898L9.99961 7.93555L19.173 1.65898Z" fill="currentColor" />
          </svg>
        </div>
      </Link>

      {isOpen && (
        <div className="w-[140px]  pt-[10px] fixed shadow-lg opacity-90 rounded-[5px] right-[27px] mt-2 z-[99] bg-[#fafafa] grid h-[100px] 4xl:right-[70px] 5xl:right-[120px]">
          <Link className="opacity-80 hover:bg-[#F4F4F6] w-[120px] pl-[5px] ml-[10px] rounded-[5px] pt-[4px] font-[600] text-[#38761D] mt-1 h-[35px]" to="/loginuser">
            User Login
          </Link>
          <Link onClick={handleScrollToTop} className="opacity-80 hover:bg-[#F4F4F6] w-[120px] pl-[5px] ml-[10px] rounded-[5px] pt-[4px] font-[600] text-[#38761D] mt-1 h-[30px]" to="/loginadmin">
            Admin Login
          </Link>
        </div>
      )}
    </div>
  );
}
