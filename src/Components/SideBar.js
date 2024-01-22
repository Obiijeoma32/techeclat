import { NavLink } from "react-router-dom";
import { useState } from "react";
import "../App.css";

function SideBar({ children }) {
  const [side, setSideBar] = useState(false);
  const handleSideBar = () => {
    setSideBar(!side);
  };
  const closeSideBar = () => {
    setSideBar(false);
  };
  const secondMenu = [
    {
      path: "/eclatjobs",
      name: "Basic Info",
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30.2898" r="30" fill="currentColor" fillOpacity="0.8" />
          <path
            d="M30 33.0398C34.1421 33.0398 37.5 29.6819 37.5 25.5398C37.5 21.3977 34.1421 18.0398 30 18.0398C25.8579 18.0398 22.5 21.3977 22.5 25.5398C22.5 29.6819 25.8579 33.0398 30 33.0398Z"
            stroke="white"
            strokeWidth="1.4"
            strokewiterlimit="10"
          />
          <path
            d="M18.6309 39.6012C19.7835 37.6062 21.4408 35.9495 23.4363 34.7978C25.4319 33.6461 27.6954 33.0398 29.9995 33.0398C32.3035 33.0398 34.567 33.6462 36.5626 34.798C38.5581 35.9497 40.2154 37.6064 41.3679 39.6014"
            stroke="white"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      path: "/resourcedetails",
      name: "Resource Details",
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30.2898" r="30" fill="currentColor" fillOpacity="0.8" />
          <path d="M28.125 28.4148H35.625" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28.125 32.1648H35.625" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M39.375 19.9773H20.625C20.1072 19.9773 19.6875 20.397 19.6875 20.9148V39.6648C19.6875 40.1826 20.1072 40.6023 20.625 40.6023H39.375C39.8928 40.6023 40.3125 40.1826 40.3125 39.6648V20.9148C40.3125 20.397 39.8928 19.9773 39.375 19.9773Z"
            stroke="white"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M24.375 19.9773V40.6023" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];
  return (
    <>
      <div className=" sidebar-container 3xxl:hidden 1halfxl:block 820xxl:hidden fixed mt-[12%]">
        {secondMenu.map((item, index) => (
          <NavLink
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            to={item.path}
            key={index}
            className={({ isActive }) =>
              isActive ? " items-center text-[16px] m-[43px] text-left font-[400] flex justify-between w-[300px] text-[#b6d7a8]" : " items-center text-[16px] m-[43px]  text-left font-[400] flex justify-between w-[300px] text-[#38761d] "
            }
          >
            <div className=" item-center text-right  justify-between flex">
              <div className="  ">{item.icon}</div>

              <h2 className=" mt-[19px] tracking-[1px] ml-[30px] ">{item.name}</h2>
            </div>
          </NavLink>
        ))}
      </div>
      <div className=" w-[220px] 3xxl:hidden  h-[460px] 1halfxl:hidden border-r-[1px] border-r-[#38761d] 820xxl:block hidden fixed mt-[12%]">
        {secondMenu.map((item, index) => (
          <NavLink
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            to={item.path}
            key={index}
            className={({ isActive }) => (isActive ? " items-center text-[14px]  text-left font-[400] flex justify-between  text-[#b6d7a8]" : " items-center text-[16px]  text-left font-[400] flex justify-between  text-[#38761d] ")}
          >
            <div className=" items-center m-[10px] w-[150px] justify-between flex">
              <div className=" w-[40px]  ">{item.icon}</div>

              <h2 className=" ml-[30px] ">{item.name}</h2>
            </div>
          </NavLink>
        ))}
      </div>
      <div className=" 3xxl:block hidden 820xxl:hidden w-[80px] pl-[20px] mt-[15%]">
        <div>
          <svg onClick={handleSideBar} width="35" height="30" viewBox="0 0 45 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.5 27.5H42.5M2.5 15H42.5M2.5 2.5H42.5" stroke="#38761D" strokeWidth="3.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {side && (
          <div className=" w-[414px] fixed z-40  top-0 left-0 h-[150vh] bg-[#000] bg-opacity-40">
            <div className=" w-[300px] pt-[130px] pl-[20px] h-[150vh] bg-[#fff]">
              <div className=" flex w-[240px] h-[80px] justify-end">
                <svg onClick={closeSideBar} width="24" height="24" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 2L35.75 35.75" stroke="black" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M2 35.75L35.75 2" stroke="black" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              {secondMenu.map((item, index) => (
                <NavLink
                  onClick={closeSideBar}
                  className={({ isActive }) => (isActive ? " items-center text-[16px]  text-left font-[400] flex justify-between  text-[#b6d7a8]" : " items-center text-[16px]   text-left font-[400] flex justify-between  text-[#38761d] ")}
                  to={item.path}
                  key={index}
                >
                  <div className=" items-center mb-[40px]   justify-between flex">
                    <div className=" w-[40px]   ">{item.icon}</div>

                    <h2 className=" ml-[30px] whitespace-nowrap ">{item.name}</h2>
                  </div>
                </NavLink>
              ))}
            </div>
            {/* <div className={`h-[100vh]  bg-[#fff] fixed  pl-[20px]  z-50 inset-y-0 left-0 w-64 transition duration-300 transform ${side ? "translate-x-0" : "-translate-x-full"}`}>
                {secondMenu.map((item, index) => (
                  <NavLink
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    className={({ isActive }) => (isActive ? " items-center text-[16px]  text-left font-[400] flex justify-between  text-[#b6d7a8]" : " items-center text-[16px]   text-left font-[400] flex justify-between  text-[#38761d] ")}
                    to={item.path}
                    key={index}
                  >
                    <div className=" items-center mb-[40px]   justify-between flex">
                      <div className=" w-[40px]   ">{item.icon}</div>

                      <h2 className=" ml-[30px] whitespace-nowrap ">{item.name}</h2>
                    </div>
                  </NavLink>
                ))}
              </div> */}
          </div>
        )}
      </div>

      <main>{children}</main>
    </>
  );
}

export default SideBar;
