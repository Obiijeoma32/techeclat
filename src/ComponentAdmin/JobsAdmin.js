import { useState, useEffect } from "react";
import AdminSideBar from "./AdminSideBar";

function JobsAdmin() {
  const [persona, setPersona] = useState(false);

  const [userInformation, setUserInfromation] = useState({});
  const [dataPresent, setDataPresent] = useState(false);

  const jobRequirement = [
    "2+ years of Experience",
    "Knowledge of Adobe Creative Suite and Figma",
    "Excellent Communication Skills",
    "A portfolio that communicates about your approach to problem",
    "Familiarity with design tools like Figma and Sketch",
    "Excellent communication skills with a well-defined design process",
  ];
  const benefits = ["Flexible Work Environment.", "Unbeatable Pay Rates.", "Licensed Adobe CC subscription.", "Consistent Payout Schedule.", "Opportunities Beyond Any Other.", "Option For Healthcare Subscription."];

  const ListItem = jobRequirement.map((job) => <li className="mb-[5px]">&#x2022; {job}</li>);
  const ListBenefits = benefits.map((benefit) => <li className="mb-[5px]">&#x2022; {benefit}</li>);

  function handlePersona() {
    setPersona(true);
  }
  function handleOutClick() {
    setPersona(false);
  }

  useEffect(() => {
    fetch(`http://nubeero-deployment-server.uksouth.cloudapp.azure.com:9009/talentRequest/all`)
      .then((response) => response.json())
      .then((data) => {
        //  console.log(data);
        setUserInfromation(data);
        setDataPresent(true);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  console.log(userInformation);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(1);
  };
  console.log(handleChangeRowsPerPage);
  const totalRows = userInformation.length;
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(startIndex + rowsPerPage, totalRows);
  const visibleData = dataPresent ? userInformation.slice(startIndex, endIndex) : [];

  return (
    <>
      <div className="bg-[#fff] w-[100%] h-[150vh] ">
        <AdminSideBar />
        <div className=" ml-[18rem] pt-[30px] ">
          <h1 className=" text-[#38761D] text-[30px] font-[300px] ">Job</h1>
          <div className="flex justify-between w-[950px] mt-[25px] ml-1 mr-[30px] 5xl:w-[2000px] 6xl:w-[1300px] 4xl:w-[1500px] ">
            <div className=" w-[300px] 4xl:w-[450px] 5xl:w-[500px] h-[120px] rounded-[5px] border-[#E3E7EB] border-[1px]  ">
              <div className="flex ml-[20px] mt-[35px]  justify-between items-center w-[200px]">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    opacity="0.4"
                    d="M37.7913 45.042C35.958 45.5837 33.7913 45.8337 31.2497 45.8337H18.7497C16.208 45.8337 14.0413 45.5837 12.208 45.042C12.6663 39.6254 18.2288 35.3545 24.9997 35.3545C31.7705 35.3545 37.333 39.6254 37.7913 45.042Z"
                    stroke="#38761D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M45.8337 18.7503V31.2503C45.8337 39.1253 43.4587 43.4378 37.792 45.042C35.9587 45.5837 33.792 45.8337 31.2503 45.8337H18.7503C16.2087 45.8337 14.042 45.5837 12.2087 45.042C6.54199 43.4378 4.16699 39.1253 4.16699 31.2503V18.7503C4.16699 8.33366 8.33366 4.16699 18.7503 4.16699H31.2503C41.667 4.16699 45.8337 8.33366 45.8337 18.7503Z"
                    stroke="#38761D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    opacity="0.4"
                    d="M32.4587 22.0414C32.4587 26.1664 29.1253 29.5205 25.0003 29.5205C20.8753 29.5205 17.542 26.1664 17.542 22.0414C17.542 17.9164 20.8753 14.583 25.0003 14.583C29.1253 14.583 32.4587 17.9164 32.4587 22.0414Z"
                    stroke="#38761D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <h3 className=" text-[14px] text-[#38761D] font-[300px] opacity-70 ">Total Jobs</h3>
                  <h1 className=" text-[30px] text-[#38761D] font-[300px] ">{userInformation.length}</h1>
                </div>
              </div>{" "}
            </div>
            <div className=" w-[300px] 4xl:w-[450px] 5xl:w-[500px] h-[120px] rounded-[5px] border-[#E3E7EB] border-[1px] ">
              <div className="flex ml-[20px] mt-[35px]  justify-between items-center w-[235px]">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    opacity="0.4"
                    d="M37.7913 45.042C35.958 45.5837 33.7913 45.8337 31.2497 45.8337H18.7497C16.208 45.8337 14.0413 45.5837 12.208 45.042C12.6663 39.6254 18.2288 35.3545 24.9997 35.3545C31.7705 35.3545 37.333 39.6254 37.7913 45.042Z"
                    stroke="#38761D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M45.8337 18.7503V31.2503C45.8337 39.1253 43.4587 43.4378 37.792 45.042C35.9587 45.5837 33.792 45.8337 31.2503 45.8337H18.7503C16.2087 45.8337 14.042 45.5837 12.2087 45.042C6.54199 43.4378 4.16699 39.1253 4.16699 31.2503V18.7503C4.16699 8.33366 8.33366 4.16699 18.7503 4.16699H31.2503C41.667 4.16699 45.8337 8.33366 45.8337 18.7503Z"
                    stroke="#38761D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    opacity="0.4"
                    d="M32.4587 22.0414C32.4587 26.1664 29.1253 29.5205 25.0003 29.5205C20.8753 29.5205 17.542 26.1664 17.542 22.0414C17.542 17.9164 20.8753 14.583 25.0003 14.583C29.1253 14.583 32.4587 17.9164 32.4587 22.0414Z"
                    stroke="#38761D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <h3 className=" text-[14px] text-[#38761D] font-[300px] opacity-70 ">Unverified Jobs</h3>
                  <h1 className=" text-[30px] text-[#38761D] font-[300px] ">100,000</h1>
                </div>
              </div>
            </div>
            <div className=" w-[300px] 4xl:w-[450px] 5xl:w-[500px] h-[120px] rounded-[5px] border-[#E3E7EB] border-[1px] ">
              <div className="flex ml-[20px] mt-[35px]  justify-between items-center w-[235px]">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    opacity="0.4"
                    d="M37.7913 45.042C35.958 45.5837 33.7913 45.8337 31.2497 45.8337H18.7497C16.208 45.8337 14.0413 45.5837 12.208 45.042C12.6663 39.6254 18.2288 35.3545 24.9997 35.3545C31.7705 35.3545 37.333 39.6254 37.7913 45.042Z"
                    stroke="#38761D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M45.8337 18.7503V31.2503C45.8337 39.1253 43.4587 43.4378 37.792 45.042C35.9587 45.5837 33.792 45.8337 31.2503 45.8337H18.7503C16.2087 45.8337 14.042 45.5837 12.2087 45.042C6.54199 43.4378 4.16699 39.1253 4.16699 31.2503V18.7503C4.16699 8.33366 8.33366 4.16699 18.7503 4.16699H31.2503C41.667 4.16699 45.8337 8.33366 45.8337 18.7503Z"
                    stroke="#38761D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    opacity="0.4"
                    d="M32.4587 22.0414C32.4587 26.1664 29.1253 29.5205 25.0003 29.5205C20.8753 29.5205 17.542 26.1664 17.542 22.0414C17.542 17.9164 20.8753 14.583 25.0003 14.583C29.1253 14.583 32.4587 17.9164 32.4587 22.0414Z"
                    stroke="#38761D"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div>
                  <h3 className=" text-[14px] text-[#38761D] font-[300px] opacity-70 ">Closed Jobs</h3>
                  <h1 className=" text-[30px] text-[#38761D] font-[300px] ">100,000</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[950px] ml-1 mt-[70px] h-[570px]  rounded-[5px] border-[#E3E7EB] border-[1px] 5xl:w-[2000px] 6xl:w-[1300px] 4xl:w-[1500px]">
            <div className="w-[920px] flex justify-between ml-[20px] mt-[19px] h-[60px]  rounded-[5px] bg-[#F4F4F6] 5xl:w-[1950px] 6xl:w-[1250px] 4xl:w-[1450px]">
              <div className="w-[650px] pl-3 h-[40px] bg-[#fff] justify-between rounded-[4px] ml-[10px] mt-[10px] flex items-center border-[#E3E7EB] border-[1px] 5xl:w-[1650px] 6xl:w-[1050px] 4xl:w-[1150px]">
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
                  className=" w-[590px] h-[36px]  outline-none placeholder:text-[#38761D] placeholder:tracking-[0.8px] placeholder:text-[14px] font-[300] 5xl:w-[1600px] 6xl:w-[920px] 4xl:w-[1100px]"
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

            <table className="w-[920px] table ml-[17px] mt-[30px] text-center h-[450px] 5xl:w-[1950px] 6xl:w-[1250px] 4xl:w-[1450px]">
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
                  <th className="pb-[10px]">Recruiter</th>
                  <th className="pb-[10px]">Company</th>
                  <th className="pb-[10px]">Job Role</th>
                  <th className="pb-[10px]">Skills </th>
                  <th className="pb-[10px]">Location</th>
                  <th className="pb-[10px] 6xl:pr-[60px] pr-[20px]">Status</th>
                  <th className="">
                    {/* intentional space */} {/* '' */}
                  </th>
                </tr>
              </thead>
              <tbody className="text-[13px] w-[920px] opacity-90 font-[400px] text-[#38761D]">
                {dataPresent === false ? (
                  <div>loading</div>
                ) : (
                  visibleData.map((userInfo, index) => (
                    <tr key={index}>
                      <td>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                        </svg>
                      </td>
                      <td>{userInfo.recruiter}</td>
                      <td>{userInfo.company}</td>
                      <td>{userInfo.jobRole}</td>
                      <td>{userInfo.skill}</td>
                      <td>Nigeria</td>
                      <td className=" pl-[20px] 5xl:w-[175px] 4xl:w-[170px] ">
                        <div className="flex w-[92px] h-[26px] rounded-[20px] bg-[#FBF7E2]  justify-evenly items-center  ">
                          <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="3.5" cy="4" r="3.5" fill="#E0C018" />
                          </svg>
                          <h3>{userInfo.status}</h3>
                        </div>
                      </td>

                      <td className="pl-[20px]" onClick={handlePersona}>
                        <svg className="h-[40px]" width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="2" cy="2" r="2" fill="#38761D" />
                          <circle cx="11" cy="2" r="2" fill="#38761D" />
                          <circle cx="20" cy="2" r="2" fill="#38761D" />
                        </svg>
                      </td>
                    </tr>
                  ))
                )}

                {/* <tr className="h-[50px]  ">
                  <td>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                    </svg>
                  </td>
                  <td>Dele Momodu</td>
                  <td>Qucoon</td>
                  <td>QA Analyst</td>
                  <td> Intermediate</td>
                  <td>Remote</td>
                  <td className=" pl-[20px] 5xl:w-[175px] 4xl:w-[170px] ">
                    <div className="flex w-[92px] h-[26px] rounded-[20px] bg-[#FBF7E2]  justify-evenly items-center  ">
                      <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3.5" cy="4" r="3.5" fill="#E0C018" />
                      </svg>
                      <h3>Pending</h3>
                    </div>
                  </td>
                  <td onClick={handlePersona} className="pl-[20px] cursor-pointer pr-[20px]">
                    <svg className="h-[40px]" width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2" cy="2" r="2" fill="#38761D" />
                      <circle cx="11" cy="2" r="2" fill="#38761D" />
                      <circle cx="20" cy="2" r="2" fill="#38761D" />
                    </svg>
                  </td>
                </tr>
                <tr className="h-[50px]    bg-[#F9F9FA]">
                  <td>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                    </svg>
                  </td>
                  <td>Dele Momodu</td>
                  <td> First Bank</td>
                  <td>Project Manager</td>
                  <td>Intermediate</td>
                  <td>On-Site</td>
                  <td className=" pl-[20px]">
                    <div className="flex w-[92px] h-[26px] rounded-[20px] bg-[#E1F4EC]  justify-evenly items-center">
                      <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3.5" cy="4" r="3.5" fill="#00BF6F" />
                      </svg>
                      <h3>Confirmed</h3>
                    </div>
                  </td>
                  <td onClick={handlePersona} className="pl-[20px] cursor-pointer pr-[20px]">
                    <svg className="h-[40px]" width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <td>David Adeleke</td>
                  <td>Qucoon</td>
                  <td>Data Analyst</td>
                  <td> Expert</td>
                  <td>On-site</td>
                  <td className=" pl-[20px]">
                    <div className="flex w-[92px] h-[26px] rounded-[20px] bg-[#FBEAED]  justify-evenly items-center">
                      <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3.5" cy="4" r="3.5" fill="#FF5170" />
                      </svg>
                      <h3>Canceled</h3>
                    </div>
                  </td>
                  <td onClick={handlePersona} className="pl-[20px] cursor-pointer pr-[20px]">
                    <svg className="h-[40px]" width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2" cy="2" r="2" fill="#38761D" />
                      <circle cx="11" cy="2" r="2" fill="#38761D" />
                      <circle cx="20" cy="2" r="2" fill="#38761D" />
                    </svg>
                  </td>
                </tr>
                <tr className="h-[50px]   bg-[#F9F9FA]">
                  <td>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                    </svg>
                  </td>
                  <td>Jibola Johnson</td>
                  <td>Apvertise</td>
                  <td>Frontend Developer</td>
                  <td> Intermediate</td>
                  <td>Remote</td>
                  <td className=" pl-[20px]">
                    <div className="flex w-[92px] h-[26px] rounded-[20px] bg-[#E1F4EC]  justify-evenly items-center">
                      <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3.5" cy="4" r="3.5" fill="#00BF6F" />
                      </svg>
                      <h3>Confirmed</h3>
                    </div>
                  </td>
                  <td onClick={handlePersona} className="pl-[20px] cursor-pointer pr-[20px]">
                    <svg className="h-[40px]" width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <td>Ajib Adeleke</td>
                  <td>Univaciti</td>
                  <td>Backend Developer</td>
                  <td> Intermediate</td>
                  <td>Hybrid</td>
                  <td className=" pl-[20px]">
                    <div className="flex w-[92px] h-[26px] rounded-[20px] bg-[#E1F4EC]  justify-evenly items-center">
                      <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3.5" cy="4" r="3.5" fill="#00BF6F" />
                      </svg>
                      <h3>Confirmed</h3>
                    </div>
                  </td>
                  <td onClick={handlePersona} className="pl-[20px] cursor-pointer pr-[20px]">
                    <svg className="h-[40px]" width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2" cy="2" r="2" fill="#38761D" />
                      <circle cx="11" cy="2" r="2" fill="#38761D" />
                      <circle cx="20" cy="2" r="2" fill="#38761D" />
                    </svg>
                  </td>
                </tr>
                <tr className="h-[50px]   bg-[#F9F9FA]">
                  <td>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                    </svg>
                  </td>
                  <td>Idris Yusuf</td>
                  <td>Qucoon</td>
                  <td>Product Designer</td>
                  <td> Expert</td>
                  <td>Remote</td>
                  <td className=" pl-[20px]">
                    <div className="flex w-[92px] h-[26px] rounded-[20px] bg-[#E1F4EC]  justify-evenly items-center">
                      <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3.5" cy="4" r="3.5" fill="#00BF6F" />
                      </svg>
                      <h3>Confirmed</h3>
                    </div>
                  </td>
                  <td onClick={handlePersona} className="pl-[20px] cursor-pointer pr-[20px]">
                    <svg className="h-[40px]" width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <td>Yinka Daramola</td>
                  <td>Qucoon</td>
                  <td> Consultant</td>
                  <td>Legendary</td>
                  <td>On-Site</td>
                  <td className=" pl-[20px]">
                    <div className="flex w-[92px] h-[26px] rounded-[20px] bg-[#E1F4EC]  justify-evenly items-center">
                      <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="3.5" cy="4" r="3.5" fill="#00BF6F" />
                      </svg>
                      <h3>Confirmed</h3>
                    </div>
                  </td>
                  <td onClick={handlePersona} className="pl-[20px] cursor-pointer pr-[20px]">
                    <svg className="h-[40px]" width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2" cy="2" r="2" fill="#38761D" />
                      <circle cx="11" cy="2" r="2" fill="#38761D" />
                      <circle cx="20" cy="2" r="2" fill="#38761D" />
                    </svg>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
          <div className="w-[950px] flex justify-between pl-[17px] pr-[17px] items-center h-[60px] rounded-[5px] ml-[3px] mt-[30px] bg-[#f4f4f6] 5xl:w-[2000px] 6xl:w-[1300px] 4xl:w-[1500px]">
            <p className="text-[16px] text-[#38761D] font-[400]">1 - 10 of {totalPages} pages</p>
            <div className="flex items-center w-[350px]  justify-between">
              <p className="text-[16px] text-[#38761D] font-[400]">The page you’re on</p>
              <div className=" w-[50px] text-[#38761D] h-[30px] text-[16px] font-[400] justify-evenly bg-[#fff] rounded-[3px] flex items-center">
                <h3>{currentPage}</h3>
                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.25 0.75L4.125 3.875L1 0.75" stroke="#38761D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex items-center justify-between w-[60px]">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => handleChangePage(null, currentPage - 2)}
                  style={{
                    cursor: currentPage === 1 ? "not-allowed" : "pointer",
                  }}
                >
                  <path d="M12.5 16.5L6.25 10.25L12.5 4" stroke="#707885" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => handleChangePage(null, currentPage)} disabled={currentPage === totalPages}>
                  <path d="M7.5 4L13.75 10.25L7.5 16.5" stroke="#38761D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {persona && (
        <div className="w-[100%]  h-[150vh] fixed bg-[rgb(0,0,0,0.4)] top-0 left-0 z-0 ">
          <div onClick={handleOutClick} className="mt-2 flex cursor-pointer mr-2 justify-end">
            <svg width="25" height="25" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M38.55 3.55L35 0L19.275 15.75L3.55 0L0 3.55L15.75 19.275L0 35L3.55 38.55L19.275 22.8L35 38.55L38.55 35L22.8 19.275L38.55 3.55Z" fill="#fff" />
            </svg>
          </div>

          <div className="bg-[#fff] overflow-y-scroll w-[600px] h-[580px] rounded-[10px] ml-[25%] mt-[1%] 5xl:ml-[35%] 5xl:h-[800px] 5xl:mt-[5%] 4xl:mt-[5%] 4xl:ml-[35%] ">
            <div className=" flex h-[1431px] ">
              <div className="bg-[#F6F8FA] w-[186px] h-[1431px]">
                <div className="ml-[25px] pt-[40px]">
                  <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="65" cy="65" r="65" fill="#EAEAEA" />
                    <path
                      opacity="0.4"
                      d="M82.3969 92.2571C79.9035 92.9938 76.9569 93.3338 73.5002 93.3338H56.5002C53.0435 93.3338 50.0968 92.9938 47.6035 92.2571C48.2268 84.8904 55.7918 79.082 65.0002 79.082C74.2085 79.082 81.7735 84.8904 82.3969 92.2571Z"
                      stroke="#38761D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M93.3337 56.4994V73.4994C93.3337 84.2094 90.1037 90.0743 82.397 92.256C79.9037 92.9927 76.957 93.3327 73.5003 93.3327H56.5003C53.0437 93.3327 50.097 92.9927 47.6037 92.256C39.897 90.0743 36.667 84.2094 36.667 73.4994V56.4994C36.667 42.3327 42.3337 36.666 56.5003 36.666H73.5003C87.667 36.666 93.3337 42.3327 93.3337 56.4994Z"
                      stroke="#38761D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      opacity="0.4"
                      d="M75.1431 60.9774C75.1431 66.5874 70.6098 71.1489 64.9998 71.1489C59.3898 71.1489 54.8564 66.5874 54.8564 60.9774C54.8564 55.3674 59.3898 50.834 64.9998 50.834C70.6098 50.834 75.1431 55.3674 75.1431 60.9774Z"
                      stroke="#38761D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className=" ml-[2px] mt-[15px]">
                    <h2 className="text-[16px] text-[#38761D] mb-[5px] font-[400]">Contact</h2>
                    <p className="text-[14px] text-[#7D90B8] mb-[5px] font-[400]">+234 812 759 4340</p>
                    <p className="text-[14px] text-[#7D90B8] font-[400]">aon@aon.com</p>
                    <h3 className="text-[16px] mb-[5px] mt-[10px] text-[#38761D] font-[400]">Location</h3>
                    <p className="text-[14px] text-[#7D90B8] font-[400]">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
              <div className="w-[410px]">
                <div className="flex w-[380px] mt-[50px] ml-[10px] justify-between items-center">
                  <div>
                    <h1 className="text-[24px] font-[400] text-[#38761D]">Yinka Daramola</h1>
                    <p className="text-[#4D708D] text-[16px] font-[400]">Snr. Business Consultant</p>
                  </div>
                  <h1 className="w-[120px] h-[40px] text-center font-[400] pt-[9px] border-[#E04E4E] border-[1px] rounded-[4px] text-[#E04E4E] text-[14px] ">Suspend</h1>
                </div>
                <div className="mt-[22px] ml-[15px]">
                  <h3 className="text-[16px] text-[#7D90B8] mb-[5px] font-[400]">Company Name</h3>
                  <h4 className="text-[16px] text-[#38761D] font-[400]">Univaciti Limited</h4>
                </div>
                <div className="mt-[19px] ml-[15px]">
                  <h2 className="text-[18px] text-[#38761D] mb-[5px]">Front End Developer</h2>
                  <div className="flex items-center text-[14px] text-[#38761D] justify-between w-[120px] ">
                    <h4>Yharrn</h4>
                    <svg width="3" height="4" viewBox="0 0 3 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="1.5" cy="2" r="1.5" fill="#38761D" />
                    </svg>
                    <h4>Remote</h4>
                  </div>
                </div>
                <div className="mt-[18px] flex justify-between items-center w-[290px] ml-[15px]">
                  <h3 className="w-[81px] h-[27px] pt-[7px] rounded-[70px] text-center text-[#0098DA] bg-[#F2FAFD] border-[1px] border-[#fff] text-[10px] ">REACT.JS</h3>
                  <h3 className="w-[109.23px] h-[27px] pt-[7px] rounded-[70px] text-center text-[#0098DA] bg-[#F2FAFD] border-[1px] border-[#fff] text-[10px] ">REACT.NATIVE</h3>
                  <h3 className="w-[94.09px] h-[27px] pt-[7px] rounded-[70px] text-center text-[#0098DA] bg-[#F2FAFD] border-[1px] border-[#fff] text-[10px] ">JAVASCRIPT</h3>
                </div>
                <div className="mt-[15px] ml-[17px]">
                  <h3 className="text-[16px] text-[#38761D] mb-[5px] font-[400]">Overview</h3>
                  <p className="text-[15px] w-[380px] text-[#7D90B8]  font-[400]">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.{" "}
                  </p>
                </div>
                <div className="mt-[25px] ml-[17px]">
                  <h3 className="text-[16px] text-[#38761D] mb-[5px] font-[400]">Job Requirements</h3>
                  <ul className=" w-[390px]">
                    <li className="text-[13px]  h-[40px]  text-[#7D90B8]">{ListItem}</li>
                  </ul>
                </div>
                <div className="mt-[42%] ml-[17px]">
                  <h3 className="text-[16px] text-[#38761D] mb-[5px] font-[400]">Key Objectives and Responsibilities</h3>
                  <ul className=" w-[390px]">
                    <li className="text-[13px]  h-[40px]  text-[#7D90B8]">{ListItem}</li>
                  </ul>
                </div>
                <div className="mt-[42%] ml-[17px]">
                  <h3 className="text-[16px] text-[#38761D] mb-[5px] font-[400]">Benefits and Perks</h3>
                  <ul className=" w-[390px]">
                    <li className="text-[13px]  h-[40px]  text-[#7D90B8]">{ListBenefits}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default JobsAdmin;
