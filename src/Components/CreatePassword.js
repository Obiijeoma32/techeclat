import { Link } from "react-router-dom";
import HeaderForSignup from "./HeaderForSignup";

function CreatePassword() {
  return (
    <>
      <div className=" bg-[#fff] w-[100%] h-[150vh]">
        <HeaderForSignup />
        <div className="pt-[10%] 1halfxl:ml-[32%] 1halfxl:pt-[10%] 820xxl:ml-[150px] 820xxl:pt-[15%] pb-[20px] 6xl:ml-[33%] 1xl:pt-[15%] 3xl:ml-[33%] 3xl:pt-[10%] 4xl:ml-[35%] ml-[30%]">
          <div className="w-[512px]  h-[636px] ">
            <div className=" pt-5 ">
              <h4 className=" text-[30px] text-center text-[#1E2757] ">Create Password</h4>
              <p className="  mt-[20px] text-center text-[#7D90B8] text-[16px] ">Please create a new password</p>
              <form autoComplete="on" className="ml-[3rem] mt-[40px]" action="">
                <label className=" text-[16px] text-[#1E2757]" htmlFor="Epassword">
                  Create New Password
                </label>
                <br />
                <input required className=" w-[420px] mt-[11px]  mb-[15px] h-[50px] pl-[14px] border-[#DCDDE5] outline-none rounded-[5px]  border-[1px]   " type="password" placeholder="" />
                <label className=" text-[16px] text-[#1E2757]" htmlFor="Epassword">
                  Confirm New Password
                </label>
                <br />
                <input required className=" w-[420px] mt-[11px]  mb-[15px] h-[50px] pl-[14px] border-[#DCDDE5] outline-none rounded-[5px]  border-[1px]   " type="password" placeholder="" />

                <Link className="" to="/eclatjobs">
                  <div className="mt-[20px] tracking-[2px] w-[420px] rounded-[8px] h-[50px] bg-[#38761E] text-center pt-[11px] opacity-90 text-[#fff]">
                    <h1>Continue</h1>
                  </div>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreatePassword;
