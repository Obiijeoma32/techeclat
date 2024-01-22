import { useState } from "react";
import { Link } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";

function TalentRequest2() {
  const [request, setRequest] = useState(false);
  const [successfullRequest, setSuccessfullRequest] = useState(false);

  function handleRequest() {
    setRequest(true);
  }
  function handleCancelRequest() {
    setRequest(false);
  }
  function handleSuccessfullRequest() {
    setRequest(false);
    setSuccessfullRequest(true);
  }
  function handleClickOut() {
    setRequest(false);
    setSuccessfullRequest(false);
  }

  return (
    <>
      <div className="bg-[#fff] w-[100%] h-[150vh] ">
        <AdminSideBar />
        <div className=" ml-[18rem] pt-[30px] ">
          <h1 className=" text-[#38761D] text-[30px] font-[300px] ">Talent Request</h1>

          <div className="w-[950px] ml-1 mt-[19px] h-[620px]  rounded-[5px] border-[#E3E7EB] border-[1px] 5xl:w-[2000px] 6xl:w-[1300px] 4xl:w-[1500px]">
            <div className="w-[920px] flex justify-between ml-[20px] mt-[19px] h-[60px]  rounded-[5px] bg-[#F4F4F6] 5xl:w-[1950px] 6xl:w-[1250px] 4xl:w-[1450px]">
              <div className="w-[650px] pl-3 h-[40px] bg-[#fff] justify-between rounded-[4px] ml-[10px] mt-[10px] flex items-center border-[#E3E7EB] border-[1px] 5xl:w-[1700px] 6xl:w-[1050px] 4xl:w-[1200px]">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.60938 14.8438C12.0525 14.8438 14.8438 12.0525 14.8438 8.60938C14.8438 5.16622 12.0525 2.375 8.60938 2.375C5.16622 2.375 2.375 5.16622 2.375 8.60938C2.375 12.0525 5.16622 14.8438 8.60938 14.8438Z"
                    stroke="#38761D"
                    stroke-opacity="0.8"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M13.0176 13.0176L16.6247 16.6247" stroke="#38761D" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <input
                  className=" w-[590px] h-[36px]  outline-none placeholder:text-[#38761D] placeholder:tracking-[0.8px] placeholder:text-[14px] font-[300] 5xl:w-[1620px] 6xl:w-[920px] 4xl:w-[1120px] "
                  type="text"
                  placeholder="Search for applicants, skills, job role etc..."
                />
              </div>
              <div>
                <div className="w-[110px] h-[40px] ml-4 mr-2 text-[#38761D] mt-[10px] bg-[#fff] justify-evenly text-[14px] rounded-[4px] flex items-center border-[#E3E7EB] border-[1px] ">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 10H15" stroke="#38761D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M1.875 6.25H18.125" stroke="#38761D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8.125 13.75H11.875" stroke="#38761D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <h3>Filters</h3>
                </div>
              </div>
              <div className="w-[110px] h-[40px] text-[#38761D] mr-3 mt-[10px] bg-[#fff] justify-evenly text-[14px] rounded-[4px] flex items-center border-[#E3E7EB] border-[1px] ">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.71875 4.53039L10 1.25L13.2812 4.53039" stroke="#38761D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10 9.99965V1.25195" stroke="#38761D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                  <path
                    d="M13.75 7.5H15.625C15.7908 7.5 15.9497 7.56585 16.0669 7.68306C16.1842 7.80027 16.25 7.95924 16.25 8.125V16.25C16.25 16.4158 16.1842 16.5747 16.0669 16.6919C15.9497 16.8092 15.7908 16.875 15.625 16.875H4.375C4.20924 16.875 4.05027 16.8092 3.93306 16.6919C3.81585 16.5747 3.75 16.4158 3.75 16.25V8.125C3.75 7.95924 3.81585 7.80027 3.93306 7.68306C4.05027 7.56585 4.20924 7.5 4.375 7.5H6.25"
                    stroke="#38761D"
                    stroke-width="1.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h3>Export</h3>
              </div>
            </div>

            <table className="w-[920px] table ml-[17px] mt-[30px] text-center h-[450px] 5xl:w-[1950px] 6xl:w-[1250px] 4xl:w-[1450px]">
              <thead className="text-[15px] pb-[10px] opacity-90 font-[400px] text-[#38761D]">
                <tr className="w-[920px] flex justify-between  items-center border-b-[#E3E7EB] border-b-[1px] 5xl:w-[1950px] 6xl:w-[1250px]  4xl:w-[1450px]">
                  <th className="flex pb-[10px] items-center">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                    </svg>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.0965 4.35649C10.0681 4.28797 10.02 4.2294 9.95834 4.1882C9.89667 4.14699 9.82417 4.125 9.75 4.125H2.25C2.17583 4.125 2.10333 4.14699 2.04166 4.1882C1.97999 4.22941 1.93193 4.28797 1.90354 4.3565C1.87516 4.42502 1.86774 4.50042 1.88221 4.57317C1.89668 4.64591 1.9324 4.71273 1.98484 4.76517L5.73484 8.51516C5.76966 8.54998 5.811 8.57761 5.8565 8.59645C5.90199 8.6153 5.95076 8.625 6 8.625C6.04925 8.625 6.09801 8.6153 6.14351 8.59645C6.189 8.57761 6.23034 8.54998 6.26516 8.51516L10.0152 4.76517C10.0676 4.71273 10.1033 4.64591 10.1178 4.57316C10.1323 4.50042 10.1248 4.42502 10.0965 4.35649Z"
                        fill="#E3E7EB"
                      />
                    </svg>
                  </th>
                  <th className="pb-[10px] pr-[10px] 5xl:pl-[40px] ">Applicant</th>
                  <th className="pb-[10px] 5xl:pl-[100px]">Role</th>
                  <th>{/* intentional */}</th>
                  <th className="pb-[10px]">Skills</th>
                  <th>{/* intentional */}</th>
                  <th className="pb-[10px] pl-[15px]">Skills </th>

                  <th onClick={handleRequest} className=" cursor-pointer w-[140px] h-[40px] bg-[#38761D] rounded-[5px] text-[13px] whitespace-nowrap  mb-[10px] text-[#fff] text-center pt-[10px]">
                    Send to recruiter
                  </th>
                </tr>
              </thead>
              <tbody className="text-[13px] w-[920px] whitespace-nowrap opacity-90 font-[400px] text-[#4D708D] 5xl:w-[1950px] 6xl:w-[1250px] 4xl:w-[1450px]">
                <tr className="w-[920px] flex justify-between items-center h-[50px] 5xl:w-[1950px] 6xl:w-[1250px] 4xl:w-[1450px] ">
                  <td className="">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                    </svg>
                  </td>
                  <td className="">Orofin Oluwaseun</td>
                  <td className="text-[#38761D]">Senior UI/UX Specialist</td>
                  <td className=""> React-Js, React-Js, React-Js, </td>
                  <td className="">Amet minim mollit non...</td>

                  <td className="pr-[30px]">
                    <svg className="h-[40px]" width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2" cy="2" r="2" fill="#38761D" />
                      <circle cx="11" cy="2" r="2" fill="#38761D" />
                      <circle cx="20" cy="2" r="2" fill="#38761D" />
                    </svg>
                  </td>
                </tr>
                <tr className="h-[50px] w-[920px] flex justify-between items-center   bg-[#F9F9FA] 5xl:w-[1950px] 6xl:w-[1250px] 4xl:w-[1450px]">
                  <td>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                    </svg>
                  </td>
                  <td>Orofin Oluwaseun</td>
                  <td className="text-[#38761D]">Senior UI/UX Specialist</td>
                  <td> React-Js, React-Js, React-Js, </td>
                  <td>Amet minim mollit non...</td>

                  <td className="pr-[30px]">
                    <svg className="h-[40px]" width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2" cy="2" r="2" fill="#38761D" />
                      <circle cx="11" cy="2" r="2" fill="#38761D" />
                      <circle cx="20" cy="2" r="2" fill="#38761D" />
                    </svg>
                  </td>
                </tr>
                <tr className="h-[50px]  w-[920px] flex justify-between items-center 5xl:w-[1950px] 6xl:w-[1250px] 4xl:w-[1450px] ">
                  <td>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                    </svg>
                  </td>
                  <td>Orofin Oluwaseun</td>
                  <td className="text-[#38761D]">Senior UI/UX Specialist</td>
                  <td> React-Js, React-Js, React-Js, </td>
                  <td>Amet minim mollit non...</td>

                  <td className="pr-[30px]">
                    <svg className="h-[40px]" width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2" cy="2" r="2" fill="#38761D" />
                      <circle cx="11" cy="2" r="2" fill="#38761D" />
                      <circle cx="20" cy="2" r="2" fill="#38761D" />
                    </svg>
                  </td>
                </tr>
                <tr className="h-[50px] w-[920px] flex justify-between items-center  bg-[#F9F9FA] 5xl:w-[1950px] 6xl:w-[1250px] 4xl:w-[1450px]">
                  <td>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                    </svg>
                  </td>
                  <td>Orofin Oluwaseun</td>
                  <td className="text-[#38761D]">Senior UI/UX Specialist</td>
                  <td> React-Js, React-Js, React-Js, </td>
                  <td>Amet minim mollit non...</td>

                  <td className="pr-[30px]">
                    <svg className="h-[40px]" width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2" cy="2" r="2" fill="#38761D" />
                      <circle cx="11" cy="2" r="2" fill="#38761D" />
                      <circle cx="20" cy="2" r="2" fill="#38761D" />
                    </svg>
                  </td>
                </tr>
                <tr className="h-[50px]  w-[920px] flex justify-between items-center 5xl:w-[1950px] 6xl:w-[1250px] 4xl:w-[1450px]">
                  <td>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                    </svg>
                  </td>
                  <td>Orofin Oluwaseun</td>
                  <td className="text-[#38761D]">Senior UI/UX Specialist</td>
                  <td> React-Js, React-Js, React-Js, </td>
                  <td>Amet minim mollit non...</td>

                  <td className="pr-[30px]">
                    <svg className="h-[40px]" width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2" cy="2" r="2" fill="#38761D" />
                      <circle cx="11" cy="2" r="2" fill="#38761D" />
                      <circle cx="20" cy="2" r="2" fill="#38761D" />
                    </svg>
                  </td>
                </tr>
                <tr className="h-[50px]  w-[920px] flex justify-between items-center bg-[#F9F9FA] 5xl:w-[1950px] 6xl:w-[1250px] 4xl:w-[1450px]">
                  <td>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                    </svg>
                  </td>
                  <td>Orofin Oluwaseun</td>
                  <td className="text-[#38761D]">Senior UI/UX Specialist</td>
                  <td> React-Js, React-Js, React-Js, </td>
                  <td>Amet minim mollit non...</td>

                  <td className="pr-[30px]">
                    <svg className="h-[40px]" width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2" cy="2" r="2" fill="#38761D" />
                      <circle cx="11" cy="2" r="2" fill="#38761D" />
                      <circle cx="20" cy="2" r="2" fill="#38761D" />
                    </svg>
                  </td>
                </tr>
                <tr className="h-[50px] w-[920px] flex justify-between items-center  5xl:w-[1950px] 6xl:w-[1250px] 4xl:w-[1450px]">
                  <td>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                    </svg>
                  </td>
                  <td>Orofin Oluwaseun</td>
                  <td className="text-[#38761D]">Senior UI/UX Specialist</td>
                  <td> React-Js, React-Js, React-Js, </td>
                  <td>Amet minim mollit non...</td>

                  <td className="pr-[30px]">
                    <svg className="h-[40px]" width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2" cy="2" r="2" fill="#38761D" />
                      <circle cx="11" cy="2" r="2" fill="#38761D" />
                      <circle cx="20" cy="2" r="2" fill="#38761D" />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-[950px] flex justify-between pl-[17px] pr-[17px] items-center h-[60px] rounded-[5px] ml-[3px] mt-[30px] bg-[#f4f4f6] 5xl:w-[2000px] 6xl:w-[1300px] 4xl:w-[1500px]">
            <p className="text-[16px] text-[#38761D] font-[400]">1 - 11 of 1200 pages</p>
            <div className="flex items-center w-[350px]  justify-between">
              <p className="text-[16px] text-[#38761D] font-[400]">The page you’re on</p>
              <div className=" w-[50px] text-[#38761D] h-[30px] text-[16px] font-[400] justify-evenly bg-[#fff] rounded-[3px] flex items-center">
                <h3>1</h3>
                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.25 0.75L4.125 3.875L1 0.75" stroke="#38761D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div className="flex items-center justify-between w-[60px]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 16.5L6.25 10.25L12.5 4" stroke="#707885" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 4L13.75 10.25L7.5 16.5" stroke="#38761D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {request && (
        <div className="w-[100%]  h-[150vh] fixed bg-[rgb(0,0,0,0.4)] top-0 left-0 z-0 ">
          <div className="mt-2 flex cursor-pointer mr-2 justify-end">
            <svg
              onClick={() => {
                setRequest(false);
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
          <div className="bg-[#fff]  w-[499px] h-[435px] rounded-[10px] ml-[29%] mt-[6%] 4xl:ml-[35%]  4xl:mt-[10%] 5xl:ml-[40%] 5xl:mt-[10%]">
            <div className="ml-[33px] text-center pt-[13%]">
              <h1 className="text-[20px] text-[#38761D]">Talent Request</h1>
              <svg className="ml-[38%] mt-[45px] mb-[40px]" width="104" height="93" viewBox="0 0 104 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M51.9994 11.4467L92.7869 81.9176H11.2119L51.9994 11.4467ZM1.84102 76.5009C-2.32981 83.7051 2.87019 92.7509 11.2119 92.7509H92.7869C101.129 92.7509 106.329 83.7051 102.158 76.5009L61.3702 6.03008C57.1993 -1.17409 46.7994 -1.17409 42.6285 6.03008L1.84102 76.5009ZM46.5827 38.5842V49.4176C46.5827 52.3967 49.0202 54.8342 51.9994 54.8342C54.9785 54.8342 57.416 52.3967 57.416 49.4176V38.5842C57.416 35.6051 54.9785 33.1676 51.9994 33.1676C49.0202 33.1676 46.5827 35.6051 46.5827 38.5842ZM46.5827 65.6676H57.416V76.5009H46.5827V65.6676Z"
                  fill="#38761D"
                />
              </svg>
              <p className="text-[16px] w-[250px] ml-[22%] text-[#38761D]">You’re about to send this list to the recuiter, </p>
              <Link onClick={handleSuccessfullRequest} to="">
                <div className="ml-[34%] mt-[25px] cursor-pointer w-[140px] h-[40px] bg-[#38761D] rounded-[5px] text-[13px] whitespace-nowrap  mb-[10px] text-[#fff] text-center pt-[10px]">Send to recruiter</div>
              </Link>
              <h4 className="text-[16px]  cursor-pointer text-[#38761D]" onClick={handleCancelRequest}>
                Cancel
              </h4>
            </div>
          </div>
        </div>
      )}
      {successfullRequest && (
        <div className="w-[100%]  h-[150vh] fixed bg-[rgb(0,0,0,0.4)] top-0 left-0 z-0 ">
          <div className="mt-2 flex cursor-pointer mr-2 justify-end">
            <svg onClick={handleClickOut} width="25" height="25" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M38.55 3.55L35 0L19.275 15.75L3.55 0L0 3.55L15.75 19.275L0 35L3.55 38.55L19.275 22.8L35 38.55L38.55 35L22.8 19.275L38.55 3.55Z" fill="#fff" />
            </svg>
          </div>
          <div className="bg-[#fff]  w-[499px] h-[435px] rounded-[10px] ml-[29%] mt-[6%] 4xl:ml-[35%]  4xl:mt-[10%] 5xl:ml-[40%] 5xl:mt-[10%] ">
            <div className="ml-[30px] text-center pt-[13%]">
              <h1 className="text-[20px] text-[#38761D]">Talent Request</h1>
              <svg className="ml-[38%] mt-[45px] mb-[40px]" width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M53.9994 0.667969C43.451 0.667969 33.1396 3.79591 24.369 9.65626C15.5983 15.5166 8.76247 23.8461 4.7258 33.5915C0.689124 43.3369 -0.367054 54.0605 1.69082 64.4061C3.7487 74.7518 8.82821 84.2549 16.287 91.7137C23.7458 99.1725 33.2489 104.252 43.5946 106.31C53.9402 108.368 64.6638 107.312 74.4092 103.275C84.1545 99.2382 92.4841 92.4023 98.3444 83.6317C104.205 74.8611 107.333 64.5496 107.333 54.0013C107.333 39.8564 101.714 26.2909 91.7117 16.2889C81.7098 6.287 68.1443 0.667969 53.9994 0.667969ZM53.9994 100.668C44.7696 100.668 35.7471 97.931 28.0728 92.8032C20.3985 87.6754 14.4171 80.3871 10.885 71.8599C7.35291 63.3326 6.42875 53.9495 8.22939 44.8971C10.03 35.8446 14.4746 27.5294 21.0011 21.003C27.5275 14.4765 35.8427 10.032 44.8952 8.23132C53.9476 6.43068 63.3307 7.35484 71.8579 10.8869C80.3852 14.419 87.6735 20.4004 92.8013 28.0747C97.9291 35.749 100.666 44.7715 100.666 54.0013C100.666 66.3781 95.7494 78.2479 86.9977 86.9996C78.246 95.7513 66.3761 100.668 53.9994 100.668Z"
                  fill="#3BA871"
                />
                <path
                  d="M87.3338 34.3326C86.7092 33.7118 85.8644 33.3633 84.9838 33.3633C84.1032 33.3633 83.2583 33.7118 82.6338 34.3326L45.6338 71.1659L25.6338 51.1659C25.0238 50.5073 24.1771 50.118 23.2801 50.0836C22.383 50.0492 21.5091 50.3726 20.8504 50.9826C20.1918 51.5926 19.8025 52.4392 19.7681 53.3363C19.7337 54.2333 20.0571 55.1073 20.6671 55.7659L45.6338 80.6659L87.3338 39.0659C87.6462 38.756 87.8942 38.3874 88.0634 37.9812C88.2326 37.575 88.3198 37.1393 88.3198 36.6993C88.3198 36.2592 88.2326 35.8235 88.0634 35.4173C87.8942 35.0111 87.6462 34.6425 87.3338 34.3326Z"
                  fill="#3BA871"
                />
              </svg>
              <p className="text-[16px] w-[350px] ml-[12%] text-[#38761D]">You have successfully sent the talent request to the recruiter </p>

              <Link to="">
                <div className="ml-[34%] mt-[20px] cursor-pointer w-[140px] h-[40px] bg-[#38761D] rounded-[5px] text-[13px] whitespace-nowrap  mb-[10px] text-[#fff] text-center pt-[10px]">Send to recruiter</div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TalentRequest2;
