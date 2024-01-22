import { useState } from "react";
import { Link } from "react-router-dom";
import HeaderForSignup from "./HeaderForSignup";

function SignUpCompany() {
  const [terms, setTerms] = useState(false);
  const [privacy, setPrivacy] = useState(false);

  return (
    <>
      <div className=" bg-[#fff] 6xl:w-[100%] w-[100%] 4xxl:w-[510px] h-[200vh]">
        <HeaderForSignup />
        <div className="  bg-[#fff]  ">
          <div className="pt-[7%] 4xl:pl-[35%] 4xxl:h-[180vh] 4xxl:pt-[150px]    pb-[20px] md:pl-[30%]">
            <div className="w-[512px]   h-[636px] ">
              <div className=" pt-5 ">
                <h4 className=" text-[30px] text-center text-[#1E2757] ">Join the Network</h4>
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
                  <label className=" text-[16px]  text-[#1E2757]" htmlFor="fname">
                    Full Name
                  </label>
                  <br />
                  <input required className=" w-[420px] mt-[11px] mb-[15px] h-[50px] pl-[14px] border-[#DCDDE5] outline-none rounded-[5px]  border-[1px]  " type="text" placeholder="" />
                  <br />
                  <label className=" text-[16px]  text-[#1E2757]" htmlFor="cname">
                    Company Name
                  </label>
                  <br />
                  <input required className=" w-[420px] mt-[11px] mb-[15px] h-[50px] pl-[14px] border-[#DCDDE5] outline-none rounded-[5px]  border-[1px]  " type="text" placeholder="" />
                  <br />
                  <label className=" text-[16px] text-[#1E2757]" htmlFor="CEmail">
                    Company Email Address
                  </label>
                  <br />
                  <input required className=" w-[420px] mt-[11px]  mb-[15px] h-[50px] pl-[14px] border-[#DCDDE5] outline-none rounded-[5px]  border-[1px]   " type="email" placeholder="" />
                  <br />
                  <label className=" text-[16px]  text-[#1E2757]" htmlFor="Phone">
                    Phone Number
                  </label>
                  <br />
                  <input required className=" w-[420px] mt-[11px] mb-[15px] h-[50px] pl-[14px] border-[#DCDDE5] outline-none rounded-[5px]  border-[1px]   " type="tel" placeholder="" /> <br />
                  <label className=" text-[16px]  text-[#1E2757]" htmlFor="cname">
                    Password
                  </label>
                  <br />
                  <input required className=" w-[420px] mt-[11px] mb-[15px] h-[50px] pl-[14px] border-[#DCDDE5] outline-none rounded-[5px]  border-[1px]   " type="password" placeholder="" /> <br />
                  <div className=" mt-[40px] mb-5 ml-[-2px] flex justify-between w-[420px] items-center ">
                    <input className="w-[20px] h-[20px] border-[#568B3F] border-[1px] " type="checkbox" required />
                    <label className="text-[#1E2757]   w-[380px]  text-[14px]   " htmlFor="privacy and Terms">
                      I accept to the
                      <span
                        onClick={() => {
                          setTerms(true);
                        }}
                        className="ml-[5px] underline cursor-pointer text-[#568B3F]"
                      >
                        Terms and Conditions
                      </span>
                      ,and I agree to the terms of
                      <span
                        onClick={() => {
                          setPrivacy(true);
                        }}
                        className="underline cursor-pointer text-[#568B3F]"
                      >
                        {"  "}
                        Privacy Policy
                      </span>
                    </label>
                  </div>
                  <Link
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                    className=""
                    to="/signup2company"
                  >
                    <div className="mt-[30px] tracking-[2px] w-[420px] rounded-[8px] h-[50px] bg-[#568B3F] text-center pt-[11px] opacity-90 text-[#fff]">
                      <h1>Register</h1>
                    </div>
                  </Link>
                </form>
                <h1 className=" text-center text-[14px] tracking-[1px] mt-4 text-[#121D0E]  ">
                  Already a member?{" "}
                  <Link className=" text-[#38761D] hover:underline " to="/loginuser">
                    Login
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {terms && (
        <div className="w-[100%] 4xxl:w-[390px]  h-[150vh] fixed bg-[rgb(0,0,0,0.4)] top-0 left-0 z-0 ">
          <div className="mt-[85px] flex cursor-pointer mr-2 justify-end">
            <svg
              onClick={() => {
                setTerms(false);
              }}
              width="25"
              height="25"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M38.55 3.55L35 0L19.275 15.75L3.55 0L0 3.55L15.75 19.275L0 35L3.55 38.55L19.275 22.8L35 38.55L38.55 35L22.8 19.275L38.55 3.55Z" fill="#fff" />
            </svg>
          </div>

          <div className="bg-[#fff] 4xxl:w-[300px] overflow-y-scroll ml-[15%] w-[900px] h-[500px] pb-[40px] rounded-[10px] 4xl:ml-[25%] 4xl:mt-[7%] 5xl:ml-[35%] ">
            <div className="pt-[50px] pl-[40px]">
              <h3 className=" text-[#38761D] text-[30px] text-center mb-[30px] mr-[10px] font-[600] opacity-80 ">Terms and Conditions</h3>
              <div className=" text-[#1E2757] font-[300] tracking-[2px] flex justify-between mb-[4px] w-[800px] 4xxl:w-[300px]  text-[14px] ">
                <span className=" text-[20px] mr-[10px] ">&#x2022;</span>
                <p>
                  “Third Party” means any party other than TechEclat, its holding and subsidiary companies or agents. Notwithstanding the foregoing, you may disclose Confidential information to TechEclat’s holding and subsidiary companies, or agents,
                  professional partners and advisers on a need-to-know basis only.
                </p>
              </div>
              <div className=" mt-[20px] text-[#1E2757] font-[300] tracking-[2px] flex justify-between mb-[4px] w-[800px] 4xxl:w-[300px] text-[14px] ">
                <span className=" text-[20px] mr-[10px] ">&#x2022;</span>
                <p>
                  All information and data provided to you by TechEclat shall be used exclusively for the purposes arising from this engagement. You shall prevent the use of TechEclat’s information, data, computers, equipment and other properties by
                  third parties. Also, you shall notify TechEclat without undue delay of any misuse of TechEclat’s information, data, computers, equipment and other properties.{" "}
                </p>
              </div>
              <div className=" mt-[20px] text-[#1E2757] font-[300] tracking-[2px] flex justify-between mb-[4px] w-[800px] 4xxl:w-[300px]  text-[14px] ">
                <span className=" text-[20px] mr-[10px] ">&#x2022;</span>
                <p>
                  You shall not copy, reproduce, modify, alter, disassemble, reverse engineer or decompile any Confidential Information unless expressly permitted in writing by TechEclat. Also, you shall not print or copy, in whole or in part, any
                  documents or other media containing any Confidential Information without the written consent of TechEclat other than copies for its officers, directors, employees, investors, consultants, advisors or partners who are working on the
                  program or any transaction relating thereto.{" "}
                </p>
              </div>
              <div className=" mt-[20px] text-[#1E2757] font-[300] tracking-[2px] flex justify-between mb-[4px] w-[800px] 4xxl:w-[300px]  text-[14px] ">
                <span className=" text-[20px] mr-[10px] ">&#x2022;</span>
                <p>
                  You shall protect Confidential Information in your possession using the same standard of care that TechEclat applies to safeguard its own proprietary, secret or confidential information and you shall ensure that Confidential
                  Information is stored and handled in such a way as to prevent any unauthorized disclosure or use thereof. Where there is a possible breach of Confidential Information, you will immediately inform your Partner Experience
                  representative.
                </p>
              </div>
              <div className=" mt-[20px] text-[#1E2757] font-[300] tracking-[2px] flex justify-between mb-[4px] w-[800px] 4xxl:w-[300px] text-[14px] ">
                <span className=" text-[20px] mr-[10px] ">&#x2022;</span>
                <p>
                  Where you are compelled by applicable regulatory and/or fiscal authorities and any other valid order carrying the force of law to disclose any confidential or proprietary information, you shall promptly notify TechEclat of such
                  obligation to enable it to limit or mitigate the disclosure as may be practicable.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {privacy && (
        <div className="w-[100%]  h-[150vh] fixed bg-[rgb(0,0,0,0.4)] top-0 left-0 z-0 ">
          <div className="mt-[85px] flex cursor-pointer mr-2 justify-end">
            <svg
              onClick={() => {
                setPrivacy(false);
              }}
              width="25"
              height="25"
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M38.55 3.55L35 0L19.275 15.75L3.55 0L0 3.55L15.75 19.275L0 35L3.55 38.55L19.275 22.8L35 38.55L38.55 35L22.8 19.275L38.55 3.55Z" fill="#fff" />
            </svg>
          </div>

          <div className="bg-[#fff] overflow-y-scroll ml-[15%] w-[900px] h-[500px] pb-[40px] rounded-[10px] 4xl:ml-[25%] 4xl:mt-[7%] 5xl:ml-[35%] ">
            <div className="pt-[50px] pl-[40px]">
              <h3 className=" text-[#38761D] text-[30px] text-center mb-[30px] mr-[10px] font-[600] opacity-80 "> Privacy Agreement</h3>
              <div className=" text-[#1E2757] font-[300] tracking-[2px] flex justify-between mb-[4px] w-[800px]  text-[14px] ">
                <span className=" text-[20px] mr-[10px] ">&#x2022;</span>
                <p>
                  TechEclat Clients. We also may receive PII from TechEclat Clients to perform services for them. Any PII used for such purposes will be limited to access by only those who require it given their job function at TechEclat, and except
                  as otherwise provided herein, we only share the PII back with our respective Clients. TechEclat does not retain, use, or disclose any Personal Information collected on behalf of our Clients for any purpose (including any commercial
                  purpose) other than the specific purpose of performing the services as specified in the applicable Master Services Agreement with the Client.{" "}
                </p>
              </div>
              <div className=" mt-[30px] text-[#38761D] font-[400] tracking-[2px] ml-[10px]  mb-[4px] w-[800px]  text-[16px] ">
                <p>We use the Personal Information we collect: </p>
              </div>
              <div className=" mt-[20px] text-[#1E2757] font-[300] tracking-[2px] flex justify-between mb-[4px] w-[550px]  text-[14px] ">
                <span className=" text-[22px] mr-[10px] ">&#x2022;</span>
                <p>To provide, maintain, improve, and enhance our Services. </p>
              </div>
              <div className=" mt-[20px] text-[#1E2757] font-[300] tracking-[2px] flex justify-between mb-[4px] w-[800px]  text-[14px] ">
                <span className=" text-[22px] mr-[10px] ">&#x2022;</span>
                <p>To communicate with you, provide you with updates and other information relating to our Services, provide information that you request, respond to comments and questions, and otherwise provide customer service and support.</p>
              </div>
              <div className=" mt-[20px] text-[#1E2757] font-[300] tracking-[2px] flex justify-between mb-[4px] w-[800px]  text-[14px] ">
                <span className=" text-[22px] mr-[10px] mt-[-5px] ">&#x2022;</span>
                <p>
                  For marketing purposes, such as developing and providing promotional and advertising materials that may be useful, relevant, valuable, or otherwise of interest to you, to market events, promotions, competitions, webinars, reports,
                  our services, news, or relevant industry updates.{" "}
                </p>
              </div>
              <div className=" mt-[20px] text-[#1E2757] font-[300] tracking-[2px] flex justify-between mb-[4px] w-[800px]  text-[14px] ">
                <span className=" text-[22px] mr-[10px] mt-[-5px] ">&#x2022;</span>
                <p>To personalize your experience on our Services such as presenting tailored content. </p>
              </div>
              <div className=" mt-[20px] text-[#1E2757] font-[300] tracking-[2px] flex justify-between mb-[4px] w-[800px]  text-[14px] ">
                <span className=" text-[22px] mr-[10px] mt-[-5px] ">&#x2022;</span>
                <p>To conduct research to understand and analyze how you use our Services and develop new products, services, and features.</p>
              </div>
              <div className=" mt-[20px] text-[#1E2757] font-[300] tracking-[2px] flex justify-between mb-[4px] w-[280px]  text-[14px] ">
                <span className=" text-[22px] mr-[10px] mt-[-5px] ">&#x2022;</span>
                <p>To process job applications.</p>
              </div>
              <div className=" mt-[20px] text-[#1E2757] font-[300] tracking-[2px] flex justify-between mb-[4px] w-[800px]  text-[14px] ">
                <span className=" text-[22px] mr-[10px] mt-[-5px] ">&#x2022;</span>
                <p>To process your submissions, including to become our talent, client or partner, join the TechEclat Learning Community, to download e-books, or attend webinars or events.</p>
              </div>
              <div className=" mt-[20px] text-[#1E2757] font-[300] tracking-[2px] flex justify-between mb-[4px] w-[765px]  text-[14px] ">
                <span className=" text-[22px] mr-[10px] mt-[-5px] ">&#x2022;</span>
                <p>To find and prevent fraud and respond to trust and safety issues that may arise.</p>
              </div>
              <div className=" mt-[20px] text-[#1E2757] font-[300] tracking-[2px] flex justify-between mb-[4px] w-[765px]  text-[14px] ">
                <span className=" text-[22px] mr-[10px] mt-[-5px] ">&#x2022;</span>
                <p>For compliance purposes, including enforcing our legal rights, or as may be required by applicable laws and regulations or requested by any judicial process or governmental agency.</p>
              </div>
              <div className=" mt-[20px] text-[#1E2757] font-[300] tracking-[2px] flex justify-between mb-[4px] w-[765px]  text-[14px] ">
                <span className=" text-[22px] mr-[10px] mt-[-5px] ">&#x2022;</span>
                <p>
                  To enforce and comply with the law, including to conduct an investigation, to protect the property and rights of TechEclat or a third party, to protect the safety of the public or any person, or to prevent or stop activity we may
                  consider to be, or to pose a risk of being, illegal, fraudulent, unethical or legally actionable activity.{" "}
                </p>
              </div>
              <div className=" mt-[20px] text-[#1E2757] font-[300] tracking-[2px] flex justify-between mb-[4px] w-[765px]  text-[14px] ">
                <span className=" text-[22px] mr-[10px] mt-[-5px] ">&#x2022;</span>
                <p>For other purposes for which we provide specific notice at the time the Personal Information is collected.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SignUpCompany;
