import { Link } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";

function TalentRequest() {
  return (
    <>
      <div className="bg-[#fff] w-[100%] h-[150vh] ">
        <AdminSideBar />
        <div className=" ml-[18rem] pt-[30px] ">
          <h1 className=" text-[#38761D] text-[30px] font-[300px] ">Talent Request</h1>

          <div className="w-[950px] ml-1 mt-[19px] h-[620px]  rounded-[5px] border-[#E3E7EB] border-[1px] 5xl:w-[2000px] 6xl:w-[1300px] 4xl:w-[1500px]">
            <div className="w-[920px] flex justify-between ml-[20px] mt-[19px] h-[60px]  rounded-[5px] bg-[#F4F4F6] 5xl:w-[1950px] 6xl:w-[1250px] 4xl:w-[1450px]">
              <div className="w-[650px] pl-3 h-[40px] bg-[#fff] justify-between rounded-[4px] ml-[10px] mt-[10px] flex items-center border-[#E3E7EB] border-[1px] 5xl:w-[1650px] 6xl:w-[1000px] 4xl:w-[1150px]">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.60938 14.8438C12.0525 14.8438 14.8438 12.0525 14.8438 8.60938C14.8438 5.16622 12.0525 2.375 8.60938 2.375C5.16622 2.375 2.375 5.16622 2.375 8.60938C2.375 12.0525 5.16622 14.8438 8.60938 14.8438Z"
                    stroke="#38761D"
                    strokeOpacity="0.8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M13.0176 13.0176L16.6247 16.6247" stroke="#38761D" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <input
                  className=" w-[590px] h-[36px]  outline-none placeholder:text-[#38761D] placeholder:tracking-[0.8px] placeholder:text-[14px] font-[300] 5xl:w-[1600px] 6xl:w-[920px] 4xl:w-[110px]"
                  type="text"
                  placeholder="Search for applicants, skills, job role etc..."
                />
              </div>
              <div>
                <div className="w-[110px] h-[40px] ml-4 mr-2 text-[#38761D] mt-[10px] bg-[#fff] justify-evenly text-[14px] rounded-[4px] flex items-center border-[#E3E7EB] border-[1px] ">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 10H15" stroke="#38761D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.875 6.25H18.125" stroke="#38761D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8.125 13.75H11.875" stroke="#38761D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h3>Filters</h3>
                </div>
              </div>
              <div className="w-[110px] h-[40px] text-[#38761D] mr-3 mt-[10px] bg-[#fff] justify-evenly text-[14px] rounded-[4px] flex items-center border-[#E3E7EB] border-[1px] ">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.71875 4.53039L10 1.25L13.2812 4.53039" stroke="#38761D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 9.99965V1.25195" stroke="#38761D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M13.75 7.5H15.625C15.7908 7.5 15.9497 7.56585 16.0669 7.68306C16.1842 7.80027 16.25 7.95924 16.25 8.125V16.25C16.25 16.4158 16.1842 16.5747 16.0669 16.6919C15.9497 16.8092 15.7908 16.875 15.625 16.875H4.375C4.20924 16.875 4.05027 16.8092 3.93306 16.6919C3.81585 16.5747 3.75 16.4158 3.75 16.25V8.125C3.75 7.95924 3.81585 7.80027 3.93306 7.68306C4.05027 7.56585 4.20924 7.5 4.375 7.5H6.25"
                    stroke="#38761D"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3>Export</h3>
              </div>
            </div>

            <table className="w-[920px] table ml-[17px] mt-[30px] text-center h-[450px] 5xl:w-[1950px] 4xl:w-[1450px] 6xl:w-[1250px]">
              <thead className="text-[15px] pb-[10px] opacity-90 font-[400px] text-[#38761D]">
                <tr className=" border-b-[#E3E7EB] border-b-[1px] ">
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
                  <th className="pb-[10px]">Recuiter</th>
                  <th className="pb-[10px]">Role</th>
                  <th className="pb-[10px]">Skills</th>
                  <th className="pb-[10px]">Level</th>
                  <th className="pb-[10px]">Job</th>
                  <th className="pb-[10px]">Location</th>
                  <th className="">
                    {/* intentional space */} {/* '' */}
                  </th>
                </tr>
              </thead>
              <tbody className="text-[13px] w-[920px] opacity-90 font-[400px] text-[#4D708D]">
                <tr className="h-[50px]  ">
                  <td>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                    </svg>
                  </td>
                  <td>Univaciti Limited</td>
                  <td>Backend Developer</td>
                  <td> Java Spring</td>
                  <td className="pl-[8px] pr-[8px]">junior</td>
                  <td>Remote</td>
                  <td>Remote</td>

                  <td className="pl-[20px]">
                    <Link
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                      to="/talentrequest/talentrequest2"
                    >
                      <h4 className=" w-[20px] cursor-pointer h-[40px]">
                        <svg className="h-[40px]" width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="2" cy="2" r="2" fill="#38761D" />
                          <circle cx="11" cy="2" r="2" fill="#38761D" />
                          <circle cx="20" cy="2" r="2" fill="#38761D" />
                        </svg>
                      </h4>
                    </Link>
                  </td>
                </tr>
                <tr className="h-[50px]    bg-[#F9F9FA]">
                  <td>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                    </svg>
                  </td>
                  <td>Univaciti Limited</td>
                  <td>Backend Developer</td>
                  <td> Java Spring</td>
                  <td>junior</td>
                  <td>Remote</td>
                  <td>Remote</td>

                  <td className="pl-[20px]">
                    <Link to="/talentrequest/talentrequest2">
                      <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="#38761D" />
                        <circle cx="11" cy="2" r="2" fill="#38761D" />
                        <circle cx="20" cy="2" r="2" fill="#38761D" />
                      </svg>
                    </Link>
                  </td>
                </tr>
                <tr className="h-[50px]   ">
                  <td>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                    </svg>
                  </td>
                  <td>Univaciti Limited</td>
                  <td>Backend Developer</td>
                  <td> Java Spring</td>
                  <td>junior</td>
                  <td>Remote</td>
                  <td>Remote</td>

                  <td className="pl-[20px]">
                    <Link to="/talentrequest/talentrequest2">
                      <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="#38761D" />
                        <circle cx="11" cy="2" r="2" fill="#38761D" />
                        <circle cx="20" cy="2" r="2" fill="#38761D" />
                      </svg>
                    </Link>
                  </td>
                </tr>
                <tr className="h-[50px]   bg-[#F9F9FA]">
                  <td>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                    </svg>
                  </td>
                  <td>Univaciti Limited</td>
                  <td>Backend Developer</td>
                  <td> Java Spring</td>
                  <td>junior</td>
                  <td>Remote</td>
                  <td>Remote</td>

                  <td className="pl-[20px]">
                    <Link to="/talentrequest/talentrequest2">
                      <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="#38761D" />
                        <circle cx="11" cy="2" r="2" fill="#38761D" />
                        <circle cx="20" cy="2" r="2" fill="#38761D" />
                      </svg>
                    </Link>
                  </td>
                </tr>
                <tr className="h-[50px]   ">
                  <td>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                    </svg>
                  </td>
                  <td>Univaciti Limited</td>
                  <td>Backend Developer</td>
                  <td> Java Spring</td>
                  <td>junior</td>
                  <td>Remote</td>
                  <td>Remote</td>

                  <td className="pl-[20px]">
                    <Link to="/talentrequest/talentrequest2">
                      <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2" cy="2" r="2" fill="#38761D" />
                        <circle cx="11" cy="2" r="2" fill="#38761D" />
                        <circle cx="20" cy="2" r="2" fill="#38761D" />
                      </svg>
                    </Link>
                  </td>
                </tr>
                <tr className="h-[50px]   bg-[#F9F9FA]">
                  <td>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                    </svg>
                  </td>
                  <td>Univaciti Limited</td>
                  <td>Backend Developer</td>
                  <td> Java Spring</td>
                  <td>junior</td>
                  <td>Remote</td>
                  <td>Remote</td>

                  <td className="pl-[20px]">
                    <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2" cy="2" r="2" fill="#38761D" />
                      <circle cx="11" cy="2" r="2" fill="#38761D" />
                      <circle cx="20" cy="2" r="2" fill="#38761D" />
                    </svg>
                  </td>
                </tr>
                <tr className="h-[50px]   ">
                  <td>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                    </svg>
                  </td>
                  <td>Univaciti Limited</td>
                  <td>Backend Developer</td>
                  <td> Java Spring</td>
                  <td>junior</td>
                  <td>Remote</td>
                  <td>Remote</td>

                  <td className="pl-[20px]">
                    <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <path d="M7.25 0.75L4.125 3.875L1 0.75" stroke="#38761D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex items-center justify-between w-[60px]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.5 16.5L6.25 10.25L12.5 4" stroke="#707885" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 4L13.75 10.25L7.5 16.5" stroke="#38761D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TalentRequest;
