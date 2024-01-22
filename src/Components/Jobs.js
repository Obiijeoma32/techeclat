import { Link } from "react-router-dom";
import Select from "react-select";
import React, { useState, useMemo } from "react";
import countryList from "react-select-country-list";
import HeaderForSignup from "./HeaderForSignup";

function Jobs() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
    setValue(value);
  };
  const customStyles = {
    menu: (base) => ({
      ...base,
      width: "420px",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#0A0A0A",
      opacity: "50%",
    }),
    control: (base) => ({
      ...base,
      height: 50,
      minHeight: 50,
      backgroundColor: "#fff",
      color: "rgba(10, 10, 10, 0.5)",
      paddingLeft: "7px",
      outline: "none",

      borderRadius: "2px",
      boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    }),
  };

  return (
    <>
      <div className=" bg-[#fff] md:w-[100%] 3xxl:w-[505px] h-[150vh]">
        <HeaderForSignup />
        <div className="md:pt-[7%] 1halfxl:ml-[28%] 820xxl:ml-[100px] 820xxl:pt-[200px] 3xxl:pt-[11rem] pb-[20px] 1xl:pt-[15%] md:ml-[30%] 3xl:ml-[33%] xl:pt-[10%] 3xl:pt-[10%] 2xl:pt-[10%] 3xxl:ml-[50px] 6xl:ml-[33%]   4xl:ml-[35%] 5xl:ml-[38%] ">
          <div className=" bg-white rounded-[5px] 3xxl:w-[380px]   shadow-lg md:w-[562px]  h-[636px] ">
            <div className=" pt-5 ">
              <h4 className=" text-[14px] text-center text-[#0A0A0A] opacity-40">
                Become An <span className=" text-[#38761D] ">ÉCLAT</span>
              </h4>
              <h1 className=" text-[36px] text-center text-[#38761D] font-[600] opacity-90">Sign Up</h1>
              <p className=" pt-4  text-[16px] text-center text-[#0A0A0A] opacity-40">Enter your details to continue</p>
              <form autoComplete="on" className="md:ml-[3rem] mt-7" action="">
                <input required className=" 3xxl:ml-[30px] 3xxl:w-[320px] md:w-[420px] mb-[15px] h-[50px] pl-[14px] bg-[#fff] outline-none rounded-[2px]  border-[1px]  shadow-lg " type="text" placeholder="First Name" />
                <br />
                <input required className=" 3xxl:ml-[30px] 3xxl:w-[320px] md:w-[420px] mb-[15px] h-[50px] pl-[14px] bg-[#fff] outline-none rounded-[2px]  border-[1px]  shadow-lg " type="text" placeholder="Last Name" />
                <br />
                <input required className=" 3xxl:ml-[30px] 3xxl:w-[320px] md:w-[420px] mb-[15px] h-[50px] pl-[14px] bg-[#fff] outline-none rounded-[2px]  border-[1px]  shadow-lg " type="tel" placeholder="Phone Number" />
                <br />
                <input required className=" 3xxl:ml-[30px] 3xxl:w-[320px] md:w-[420px] mb-[15px] h-[50px] pl-[14px] bg-[#fff] outline-none rounded-[2px]  border-[1px]  shadow-lg " type="email" placeholder="Email" />
                <br />
                <Select options={options} value={value} onChange={changeHandler} className="3xxl:ml-[30px] 3xxl:w-[320px] md:w-[420px]" required styles={customStyles} placeholder="Country" />

                <Link className="" to="/jobs2">
                  <div className="mt-[40px] tracking-[2px] 3xxl:ml-[30px] 3xxl:w-[320px] md:w-[420px] rounded-[2px] h-[50px] bg-[#38761D] text-center pt-[11px] opacity-90 text-[#fff]">
                    <h1>NEXT STEP</h1>
                  </div>
                </Link>
              </form>
              <h1 className=" text-center text-[14px] tracking-[1px] mt-4 text-[#121D0E]  ">
                Have an account?{" "}
                <Link className=" text-[#38761D] hover:underline " to="/loginuser">
                  Login
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* options={options} */}
    </>
  );
}

export default Jobs;
