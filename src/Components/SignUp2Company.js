import { Link } from "react-router-dom";
import HeaderForSignup from "./HeaderForSignup";

function SignUp2Company() {
  return (
    <>
      <div className=" bg-[#fff] 6xl:w-[100%] w-[100%] 4xxl:w-[510px] h-[130vh]">
        <HeaderForSignup />
        <div className="pt-[7%] 4xl:pl-[35%] 4xxl:h-[180vh] 4xxl:pt-[150px]    pb-[20px] md:pl-[30%]">
          <div className="w-[512px]  h-[636px] ">
            <div className=" pt-5 ">
              <h4 className=" text-[30px] text-center text-[#1E2757] ">Sign in to the Network</h4>
              <div className=" w-[420px]   mt-[20px] mb-[20px] h-[50px]  border-[#DCDDE5]  ml-[50px]   rounded-[5px]  border-[1px] ">
                <div className=" w-[230px] ml-[90px] h-[50px] flex items-center justify-evenly">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22.5006 12.2336C22.5006 11.3702 22.4291 10.7402 22.2744 10.0869H12.2148V13.9835H18.1196C18.0006 14.9519 17.3577 16.4102 15.9291 17.3902L15.909 17.5207L19.0897 19.9354L19.3101 19.9569C21.3339 18.1253 22.5006 15.4302 22.5006 12.2336Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12.214 22.4996C15.1068 22.4996 17.5354 21.5662 19.3092 19.9562L15.9283 17.3894C15.0235 18.0078 13.8092 18.4395 12.214 18.4395C9.38069 18.4395 6.97596 16.6079 6.11874 14.0762L5.99309 14.0866L2.68583 16.595L2.64258 16.7128C4.40446 20.1428 8.02349 22.4996 12.214 22.4996Z"
                      fill="#34A853"
                    />
                    <path
                      d="M6.12096 14.0764C5.89476 13.4231 5.76387 12.7231 5.76387 11.9998C5.76387 11.2764 5.89477 10.5764 6.10905 9.9231L6.10306 9.78397L2.75435 7.23535L2.64479 7.28643C1.91862 8.70975 1.50195 10.3081 1.50195 11.9998C1.50195 13.6915 1.91862 15.2897 2.64479 16.7131L6.12096 14.0764Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12.214 5.55997C14.2259 5.55997 15.583 6.41164 16.3569 7.12335L19.3807 4.23C17.5236 2.53834 15.1069 1.5 12.214 1.5C8.02357 1.5 4.40447 3.85665 2.64258 7.28662L6.10686 9.92332C6.97599 7.39166 9.38077 5.55997 12.214 5.55997Z"
                      fill="#EB4335"
                    />
                  </svg>
                  <h3 className=" text-[#97A6C6] text-[14px] ">Sign up with Google</h3>
                </div>
              </div>
              <div className="w-[466px] rounded-[4px] mt-[20px] items-center flex justify-between">
                <h3 className=" w-[200px] border-[1px] h-[0px] ml-[50px] border-[#DCDDE5] ">{/* intentional break */}</h3>
                <h4 className=" text-[#181819] m-[7px] text-opacity-[42%] text-[14px]">OR</h4>
                <h3 className=" w-[200px] border-[1px] h-[0px] border-[#DCDDE5] ">{/* intentional break */}</h3>
              </div>
              <form autoComplete="on" className="ml-[3rem] mt-7" action="">
                <label className=" text-[16px] text-[#1E2757]" htmlFor="CEmail">
                  Email Address
                </label>
                <br />
                <input required className=" w-[420px] mt-[11px]  mb-[15px] h-[50px] pl-[14px] border-[#DCDDE5] outline-none rounded-[5px]  border-[1px]   " type="email" placeholder="" />
                <br />
                <label className=" text-[16px]  text-[#1E2757]" htmlFor="cname">
                  Password
                </label>
                <br />
                <input required className=" w-[420px] mt-[11px]  mb-[15px] h-[50px] pl-[14px] border-[#DCDDE5] outline-none rounded-[5px]  border-[1px]   " type="password" placeholder="" />
                <br />
                <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  to="/forgot-password"
                >
                  <div className="w-[420px] flex justify-end">
                    <h3 className=" text-[#38761E] text-[14px]">Forgot Password</h3>
                  </div>
                </Link>
                <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className=""
                  to="/pagefortalentrequest"
                >
                  <div className="mt-[20px] tracking-[2px] w-[420px] rounded-[8px] h-[50px] bg-[#38761E] text-center pt-[11px] opacity-90 text-[#fff]">
                    <h1>Sign In</h1>
                  </div>
                </Link>
              </form>
              <h1 className=" text-center text-[14px] tracking-[1px] mt-4 text-[#121D0E]  ">
                Don’t have an account?{" "}
                <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className=" text-[#38761D] hover:underline "
                  to="/signupcompany"
                >
                  Register
                </Link>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp2Company;
