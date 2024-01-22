import { Link } from "react-router-dom";
import HeaderForSignup from "./HeaderForSignup";

function ForgotPassword() {
  return (
    <>
      <div className=" bg-[#fff] w-[100%] h-[100vh]">
        <HeaderForSignup />
        <div className="pt-[10%] 1halfxl:ml-[28%] 1halfxl:pt-[100px] 820xxl:ml-[160px] 820xxl:pt-[150px] pb-[20px] 4xl:ml-[35%] 1xl:pt-[15%] 3xl:ml-[33%] 3xl:pt-[10%] 5xl:ml-[40%] 6xl:ml-[33%]  ml-[30%]">
          <div className="w-[512px]  h-[636px] ">
            <div className=" pt-5 ">
              <h4 className=" text-[30px] text-center text-[#1E2757] ">Forgot Password</h4>
              <p className=" w-[300px] ml-[100px] mt-[20px] text-center text-[#7D90B8] text-[16px] ">Enter the email address associated with your account</p>
              <form autoComplete="on" className="ml-[3rem] mt-[40px]" action="">
                <label className=" text-[16px] text-[#1E2757]" htmlFor="CEmail">
                  Email Address
                </label>
                <br />
                <input required className=" w-[420px] mt-[11px]  mb-[15px] h-[50px] pl-[14px] border-[#DCDDE5] outline-none rounded-[5px]  border-[1px]   " type="email" placeholder="" />

                <Link className="" to="/otp">
                  <div className="mt-[20px] tracking-[2px] w-[420px] rounded-[8px] h-[50px] bg-[#38761E] text-center pt-[11px] opacity-90 text-[#fff]">
                    <h1>Continue</h1>
                  </div>
                </Link>
              </form>
            </div>
          </div>
        </div>
        {/* <Link className="" to="/createpassword"> */}
      </div>
    </>
  );
}

export default ForgotPassword;
