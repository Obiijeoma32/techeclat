import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";
// import ReactPaginate from "react-paginate";
import "../App.css";

function Applicant() {
  const [isAction, setIsAction] = useState(false);
  const [isExperience, setIsExperience] = useState(false);
  const [sendApplicant, setSendApplicant] = useState(false);
  const [persona, setPersona] = useState(false);
  const [viewPersona, setViewPersona] = useState(false);
  const [userInformation, setUserInfromation] = useState({});
  const [dataPresent, setDataPresent] = useState(false);

  function handleExperience() {
    setIsExperience(!isExperience);
  }

  function handleActionButton() {
    setIsAction(!isAction);
  }
  function handleSendApplicant() {
    setSendApplicant(true);
  }
  const applicantClickOut = () => {
    setSendApplicant(false);
  };
  const handlePersona = () => {
    setPersona(!persona);
  };
  // function handleViewPersona() {
  //   setViewPersona(true);
  // }
  function handleOutClick() {
    setViewPersona(false);
  }
  // function handleCopyClick() {
  //   navigator.clipboard.writeText(text);
  //   setCopySuccess(true);
  // }

  useEffect(() => {
    fetch(`http://nubeero-deployment-server.uksouth.cloudapp.azure.com:9009/api/Eclat/user/all`)
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
      <div className="bg-[#fff] w-[100%] h-[160vh] ">
        <AdminSideBar />

        <div className=" bg-[#fff] ml-[18rem] pt-[30px] ">
          <h1 className=" text-[#38761D] text-[30px] font-[300px] ">Applicants</h1>
          <div className="flex justify-between md:w-[950px] 6xl:w-[1300px] mt-[25px] ml-1 mr-[30px] 5xl:w-[2000px] 4xl:w-[1500px] ">
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
                  <h3 className=" text-[14px] text-[#38761D] font-[300px] opacity-70 ">Total Applicants</h3>
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
                  <h3 className=" text-[14px] text-[#38761D] font-[300px] opacity-70 ">Unverified Applicants</h3>
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
                  <h3 className=" text-[14px] text-[#38761D] font-[300px] opacity-70 ">Incomplete Enrollment</h3>
                  <h1 className=" text-[30px] text-[#38761D] font-[300px] ">100,000</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[950px] ml-1 mt-[19px] h-[654px]  rounded-[5px] border-[#E3E7EB] border-[1px] 6xl:w-[1300px] 5xl:w-[2000px] 4xl:w-[1500px]">
            <div className="w-[920px] flex justify-between ml-[20px] mt-[19px] h-[60px]  rounded-[5px] bg-[#F4F4F6] 6xl:w-[1250px] 5xl:w-[1950px] 4xl:w-[1450px]">
              <div className="w-[650px] pl-3 h-[40px] bg-[#fff] justify-between rounded-[4px] ml-[10px] mt-[10px] flex items-center border-[#E3E7EB] border-[1px] 6xl:w-[1000px] 5xl:w-[1700px] 4xl:w-[1200px] ">
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
                  className=" w-[590px] h-[36px]  outline-none placeholder:text-[#38761D] placeholder:tracking-[0.8px] placeholder:text-[14px] font-[300] 5xl:w-[1620px] 6xl:w-[920px] 4xl:w-[1120px] "
                  type="text"
                  placeholder="Search for applicants, skills, job role etc..."
                />
              </div>
              <div>
                <Link className=" h-[40px] " onClick={handleActionButton} to="">
                  <div className="w-[110px] h-[40px] ml-4 mr-2 text-[#38761D] mt-[10px] bg-[#fff] justify-evenly text-[14px] rounded-[4px] flex items-center border-[#E3E7EB] border-[1px] ">
                    <h3>ACTION</h3>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.25 7.5L10 13.75L3.75 7.5" stroke="#38761D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </Link>
                {isAction && (
                  <div className=" w-[148px] pl-[5px]  mt-[5px] cursor-pointer  h-[131px] z-[2] shadow-[#E3E7EB]  shadow-lg   text-[14px] text-[#38761D]  bg-[#fff]  ">
                    <ul>
                      <li className="mt-[10px]  mb-[5px] h-[23px] hover:bg-[#F4F4F6] ">Send to recruiter</li>
                      <li className="mt-[10px]  mb-[5px] h-[23px] hover:bg-[#F4F4F6] ">Send Mail</li>
                      <li onClick={handleSendApplicant} className="mt-[10px]   mb-[5px] h-[23px] hover:bg-[#F4F4F6] ">
                        Archive
                      </li>
                      <li className="mt-[10px]  mb-[5px] h-[23px] hover:bg-[#F4F4F6] ">Delete</li>
                    </ul>
                  </div>
                )}
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
                <h3>EXPORT</h3>
              </div>
            </div>
            <div className="flex mt-[5px] ml-[22px] items-center  h-[70px] w-[530px] justify-between ">
              <div className="flex w-[80px]  h-[30px] items-center  pl-[13px] bg-[#38761D] rounded-[50px] ">
                <h3 className=" text-[14px] text-[#fff]">Skills</h3>{" "}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="white" />
                  <path
                    d="M9.766 14.21C8.74867 14.21 7.93667 13.902 7.33 13.286C6.72333 12.6607 6.42 11.8347 6.42 10.808C6.42 10.0333 6.56467 9.31467 6.854 8.652C7.14333 7.98 7.63333 7.24267 8.324 6.44L9.976 4.48H11.684L8.212 8.54L8.254 8.568C8.786 7.99867 9.402 7.714 10.102 7.714C10.9793 7.714 11.6933 8.01267 12.244 8.61C12.804 9.20733 13.084 9.982 13.084 10.934C13.084 11.9047 12.776 12.6933 12.16 13.3C11.544 13.9067 10.746 14.21 9.766 14.21ZM9.752 12.922C10.3307 12.922 10.7927 12.7447 11.138 12.39C11.4833 12.026 11.656 11.5407 11.656 10.934C11.656 10.3273 11.4833 9.84667 11.138 9.492C10.7927 9.13733 10.326 8.96 9.738 8.96C9.15933 8.96 8.69733 9.142 8.352 9.506C8.00667 9.86067 7.834 10.3413 7.834 10.948C7.834 11.5547 8.00667 12.0353 8.352 12.39C8.69733 12.7447 9.164 12.922 9.752 12.922Z"
                    fill="#38761D"
                  />
                </svg>
              </div>
              <div className="flex w-[120px] h-[30px] text-[14px] text-[#38761D] items-center rounded-[50px] justify-evenly border-[#E3E7EB] border-[1px] ">
                <h3>Location</h3>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 6L8 11L3 6" stroke="#38761D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex w-[120px] h-[30px] text-[14px] text-[#38761D] items-center rounded-[50px] justify-evenly border-[#E3E7EB] border-[1px] ">
                <h3>Test Score</h3>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 6L8 11L3 6" stroke="#38761D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className=" w-[120px] cursor-pointer h-[30px]" onClick={handleExperience}>
                <div className="flex w-[120px] h-[30px]  text-[14px] text-[#38761D] items-center rounded-[50px] justify-evenly border-[#E3E7EB] border-[1px] ">
                  <h3>Experience</h3>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6L8 11L3 6" stroke="#38761D" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {isExperience && (
                  <div className="text-[14px] mt-[5px] pl-[15px] pt-[4px]  rounded-[3px] shadow-[#E3E7EB]  shadow-lg grid bg-[#fff] z-[2] fixed w-[130px] h-[130px] text-[#38761D] ">
                    <ul className="">
                      <li className="h-[30px]  ">Amateur</li>
                      <li className="h-[30px]  ">Beginner</li>
                      <li className="h-[30px]  ">Intermediate</li>
                      <li className="h-[30px]  ">Expert</li>
                    </ul>
                  </div>
                )}
              </div>
              <h3 className=" text-[14px] text-[#38761D]">Reset</h3>
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
                  <th className="pb-[10px]">Name</th>
                  <th className="pb-[10px]">Job Role</th>
                  <th className="pb-[10px]">Skills</th>
                  <th className="pb-[10px]">Employment Status </th>
                  <th className="pb-[10px]">Email</th>
                  <th className="pb-[10px]">Location</th>
                  <th className="">
                    {/* intentional space */} {/* '' */}
                  </th>
                </tr>
              </thead>
              <tbody className="text-[13px] w-[920px] opacity-90 font-[400px] text-[#38761D]">
                {dataPresent === false
                  ? "loading"
                  : visibleData.map((userInfo, index) => (
                      <tr key={index}>
                        <td>
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                          </svg>
                        </td>
                        <td>
                          {userInfo.firstname} {userInfo.lastName}
                        </td>
                        <td>{userInfo.jobTitle}</td>
                        <td>{userInfo.skill}</td>
                        <td>{userInfo.employmentStatus}</td>
                        <td>{userInfo.email}</td>
                        <td>{userInfo.location}</td>
                        <td className=" pl-[10px] pr-[10px] " onClick={handlePersona}>
                          <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2" r="2" fill="#38761D" />
                            <circle cx="11" cy="2" r="2" fill="#38761D" />
                            <circle cx="20" cy="2" r="2" fill="#38761D" />
                          </svg>
                        </td>
                      </tr>
                    ))}

                {/* <div>
                  <button
                    onClick={() => handleChangePage(null, currentPage - 2)}
                    disabled={currentPage === 1}
                  >
                    Previous Page
                  </button>
                  <button
                    onClick={() => handleChangePage(null, currentPage)}
                    disabled={currentPage === totalPages}
                  >
                    Next Page
                  </button>
                  <select
                    value={rowsPerPage}
                    onChange={handleChangeRowsPerPage}
                  >
                    <option value={10}>10 rows</option>
                    <option value={25}>25 rows</option>
                    <option value={50}>50 rows</option>
                    <option value={100}>100 rows</option>
                  </select>
                </div> */}

                {/* <tr className="h-[50px] ">
                  <td>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                    </svg>
                  </td>
                  <td>Dele Momodu</td>
                  <td>QA Analyst</td>
                  <td> Intermediate</td>
                  <td>Employed</td>
                  <td>Dele.Momodu@aon.com</td>
                  <td>
                    <h3>Nigeria</h3>{" "}
                  </td>
                  <td className=" pl-[10px] pr-[10px] ">
                    <div className="">
                      <h4 className=" w-[20px] cursor-pointer h-[40px]">
                        <svg className="h-[40px]" onClick={handlePersona} width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="2" cy="2" r="2" fill="#38761D" />
                          <circle cx="11" cy="2" r="2" fill="#38761D" />
                          <circle cx="20" cy="2" r="2" fill="#38761D" />
                        </svg>
                        {persona && (
                          <div className="fixed right-0 w-[90px] rounded-[5px]  mr-[2rem] p-[10px] cursor-pointer  h-[140px] z-[1] shadow-[#E3E7EB]  shadow-lg   text-[14px] text-[#38761D]  bg-[#fff] 5xl:right-[300px]  ">
                            <ul>
                              <li onClick={handleViewPersona} className="flex h-[33px] justify-evenly items-center">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M7.5 3.28125C2.8125 3.28125 0.9375 7.50046 0.9375 7.50046C0.9375 7.50046 2.8125 11.7187 7.5 11.7187C12.1875 11.7187 14.0625 7.50046 14.0625 7.50046C14.0625 7.50046 12.1875 3.28125 7.5 3.28125Z"
                                    stroke="#707885"
                                    strokeWidth="0.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path
                                    d="M7.5 9.84375C8.79442 9.84375 9.84375 8.79442 9.84375 7.5C9.84375 6.20558 8.79442 5.15625 7.5 5.15625C6.20558 5.15625 5.15625 6.20558 5.15625 7.5C5.15625 8.79442 6.20558 9.84375 7.5 9.84375Z"
                                    stroke="#707885"
                                    strokeWidth="0.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <h3> View</h3>
                              </li>
                              <li className=" w-[90px]">
                                <button className="flex w-[90px] pr-[30px] h-[33px] justify-between items-center">
                                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.84375 9.84375H12.6562V2.34375H5.15625V5.15625" stroke="#707885" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.84375 5.15625H2.34375V12.6562H9.84375V5.15625Z" stroke="#707885" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                  Copy
                                </button>
                              </li>
                              <li className="flex h-[33px] justify-evenly items-center">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M5.625 12.6564H2.8125C2.68818 12.6564 2.56895 12.607 2.48104 12.5191C2.39314 12.4312 2.34375 12.312 2.34375 12.1877V9.56934C2.34375 9.50778 2.35587 9.44682 2.37943 9.38995C2.40299 9.33308 2.43752 9.28141 2.48104 9.23788L9.5123 2.20663C9.6002 2.11872 9.71943 2.06934 9.84375 2.06934C9.96807 2.06934 10.0873 2.11872 10.1752 2.20663L12.7935 4.82497C12.8815 4.91287 12.9308 5.0321 12.9308 5.15642C12.9308 5.28074 12.8815 5.39997 12.7935 5.48788L5.625 12.6564Z"
                                    stroke="#707885"
                                    strokeWidth="0.6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                  <path d="M7.96875 3.75L11.25 7.03125" stroke="#707885" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M12.6557 12.6557H5.62447L2.37305 9.4043" stroke="#707885" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <h3>Edit</h3>
                              </li>
                              <li className="flex h-[33px] justify-evenly items-center">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M12.6562 3.28125L2.34375 3.28126" stroke="#707885" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                  <path d="M5.15625 1.40625H9.84375" stroke="#707885" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                  <path
                                    d="M11.7188 3.28125V12.1875C11.7188 12.3118 11.6694 12.431 11.5815 12.519C11.4935 12.6069 11.3743 12.6562 11.25 12.6562H3.75C3.62568 12.6562 3.50645 12.6069 3.41854 12.519C3.33064 12.431 3.28125 12.3118 3.28125 12.1875V3.28125"
                                    stroke="#707885"
                                    strokeWidth="0.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                                <h3>Delete</h3>
                              </li>
                            </ul>
                          </div>
                        )}
                      </h4>
                    </div>
                  </td>
                </tr>
                <tr className="h-[50px]    bg-[#F9F9FA]">
                  <td>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" y="0.5" width="17" height="17" rx="4.5" stroke="#E3E7EB" />
                    </svg>
                  </td>
                  <td>Dele Momodu</td>
                  <td>Project Manager</td>
                  <td> Intermediate</td>
                  <td>Unemployed</td>
                  <td>Dele.Momodu@aon.com</td>
                  <td className="flex mt-[20px] justify-evenly items-center">
                    <h3>Nigeria</h3>{" "}
                  </td>
                  <td className=" pl-[10px] pr-[10px] ">
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
                  <td>David Adeleke</td>
                  <td>Data Analyst</td>
                  <td> Expert</td>
                  <td>Employed</td>
                  <td>Dele.Momodu@aon.com</td>
                  <td>
                    <h3>Nigeria</h3>{" "}
                  </td>
                  <td className=" pl-[10px] pr-[10px] ">
                    <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <td>Frontend Developer</td>
                  <td> Intermediate</td>
                  <td>Employed</td>
                  <td>Dele.Momodu@aon.com</td>
                  <td>
                    <h3>Nigeria</h3>{" "}
                  </td>
                  <td className=" pl-[10px] pr-[10px] ">
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
                  <td>Ajib Adeleke</td>
                  <td>Backend Developer</td>
                  <td> Intermediate</td>
                  <td>Unemployed</td>
                  <td>Dele.Momodu@aon.com</td>
                  <td className="flex mt-[20px] justify-evenly items-center">
                    <h3>Nigeria</h3>{" "}
                  </td>
                  <td className=" pl-[10px] pr-[10px] ">
                    <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  <td>Product Designer</td>
                  <td> Expert</td>
                  <td>Employed</td>
                  <td>Dele.Momodu@aon.com</td>
                  <td>
                    <h3>Nigeria</h3>{" "}
                  </td>
                  <td className=" pl-[10px] pr-[10px] ">
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
                  <td>Dele Momodu</td>
                  <td>QA Analyst</td>
                  <td> Intermediate</td>
                  <td>Employed</td>
                  <td>Dele.Momodu@aon.com</td>
                  <td>
                    <h3>Nigeria</h3>{" "}
                  </td>
                  <td className=" pl-[10px] pr-[10px] ">
                    <svg width="22" height="4" viewBox="0 0 22 4" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      {sendApplicant && (
        <div className=" fixed top-0 left-0 w-[100%] h-[160vh] bg-[rgba(0,0,0,0.5)] ">
          <div className=" cursor-pointer" onClick={applicantClickOut}>
            <svg width="40" height="40" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M49.8117 14.8312L46.2617 11.2812L30.5367 27.0312L14.8117 11.2812L11.2617 14.8312L27.0117 30.5562L11.2617 46.2812L14.8117 49.8312L30.5367 34.0812L46.2617 49.8312L49.8117 46.2812L34.0617 30.5562L49.8117 14.8312Z"
                fill="white"
              />
            </svg>
          </div>
          <div className=" ml-[35%]  pt-[70px] mt-[9%] w-[487px] h-[363px] bg-[#fff] rounded-[10px] ">
            <div className=" ml-[95px] ">
              <h3 className=" text-[20px] mb-[20px] font-[400] text-[#38761D] opacity-90  ">Send Applicant to Recruiter</h3>
              <input className="rounded-[4px] outline-none mb-[15px] text-[14px] pl-[10px] border-[#97A6C6] border-[1px] w-[293px] h-[48px]" type="email" placeholder="Enter Email Address" required autoComplete="on" />
              <div className="flex pl-[10px] mb-[30px] pr-[10px] text-[#97A6C6] text-[14px] justify-between rounded-[4px] items-center border-[#97A6C6] border-[1px] w-[293px] h-[48px] ">
                <h3>Select the job request</h3>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.25 7.5L10 13.75L3.75 7.5" stroke="#4D708D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <Link to="">
                <h3 className="rounded-[4px]  pt-[14px] text-[14px] w-[293px] h-[48px] text-[#fff] text-center bg-[#38761D] ">Send Applicant</h3>
              </Link>
            </div>
          </div>
        </div>
      )}
      {viewPersona && (
        <div className="w-[100%]  h-[150vh] fixed bg-[rgb(0,0,0,0.4)] top-0 left-0 z-0 ">
          <div onClick={handleOutClick} className="mt-2 flex cursor-pointer mr-2 justify-end">
            <svg width="25" height="25" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M38.55 3.55L35 0L19.275 15.75L3.55 0L0 3.55L15.75 19.275L0 35L3.55 38.55L19.275 22.8L35 38.55L38.55 35L22.8 19.275L38.55 3.55Z" fill="#fff" />
            </svg>
          </div>

          <div className="bg-[#fff] overflow-y-scroll w-[610px] h-[580px] rounded-[10px] ml-[25%] mt-[1%] ">
            <div className=" flex h-[1031px] ">
              <div className="bg-[#F6F8FA] w-[200px] h-[1031px]">
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
                    <h2 className="text-[16px] text-[#38761D] mb-[5px] font-[400]">Experience Level</h2>
                    <p className="text-[14px] text-[#38761D] text-opacity-[54%] mb-[12px] font-[400]">Senior Level</p>
                    <h3 className="text-[16px] mb-[5px] mt-[15px] whitespace-nowrap text-[#38761D] font-[400]">Years of Experience</h3>
                    <p className="text-[14px] text-[#38761D] text-opacity-[54%] mb-[5px] font-[400]">8 years</p>
                    <h3 className="text-[16px] mb-[5px] mt-[15px] whitespace-nowrap text-[#38761D] font-[400]">Contact</h3>

                    <p className="text-[14px] text-[#38761D] text-opacity-[54%] mb-[5px] font-[400]">+234 812 759 4340</p>
                    <p className="text-[14px] text-[#38761D] text-opacity-[54%] mb-[5px] font-[400]">aon@aon.com</p>
                    <h3 className="text-[16px] mb-[5px] mt-[15px] whitespace-nowrap text-[#38761D] font-[400]">Location</h3>
                    <p className="text-[14px] text-[#38761D] text-opacity-[54%] mb-[5px] font-[400]">Lagos Nigeria</p>
                  </div>
                </div>
              </div>
              <div className="w-[410px]">
                <div className="flex w-[380px] mt-[50px] ml-[10px] justify-between items-center">
                  <div>
                    <h1 className="text-[24px] font-[400] text-[#38761D]">Yinka Daramola</h1>
                    <p className="text-[#38761D] text-opacity-[54%] text-[16px] font-[400]">Snr. Business Consultant</p>
                  </div>
                  <h1 className="w-[120px] h-[40px] text-center font-[400] pt-[9px] border-[#38761D] border-[1px] rounded-[4px] text-[#38761D] text-[14px] ">Approve</h1>
                </div>
                <div className="mt-[29px] ml-[15px]">
                  <h4 className="text-[14px] text-opacity-[54%] text-[#38761D] w-[370px] font-[400]">
                    Amet minim Amet minim mollit non deserunt ullamco est sit Amet minim mollit non deserunt ullamcoAmet minim mollit non deserunt ullamco est sit Amet minim mollit non deserunt ullamco est sit Amet minim mollit non deserunt ullamco
                    est sit Amet minim mollit non{" "}
                  </h4>{" "}
                  <h4 className=" border-b-[1px] w-[370px] mt-[10px] border-[#E3E7EB] ">{/* intentional break */}</h4>
                </div>
                <div className="mt-[18px] ml-[15px]">
                  <h3 className="text-[16px] text-[#38761D] mb-[5px]  font-[400]">Test</h3>
                </div>
                <div className="mt-[18px] ml-[15px] flex justify-between items-center w-[280px]">
                  <h3 className="text-[14px] text-[#38761D] mb-[5px]  font-[400]">Swift code test</h3>
                  <h3 className="text-[14px] text-[#38761D] mb-[5px] text-center w-[40px] pt-[4px] h-[25px] border-[1px] border-[#E3E7EB] rounded-[4px] font-[400]">90%</h3>
                </div>
                <div className="mt-[15px] ml-[15px] flex justify-center w-[340px]">
                  <h3 className="text-[14px] text-[#38761D] mb-[5px]  font-[400]">Add Test Score</h3>
                </div>
                <div className="mt-[50px] ml-[15px]">
                  <h4 className=" border-b-[1px] w-[370px] mt-[10px] border-[#E3E7EB] ">{/* intentional break */}</h4>
                </div>
                <div className="mt-[10px] ml-[15px]">
                  <h3 className="text-[16px] text-[#38761D]   font-[400]">Skills</h3>
                  <div className="mt-[10px] flex justify-between items-center w-[340px]">
                    <h3 className="w-[81px] h-[27px] pt-[7px] rounded-[70px] text-center text-[#38761D] bg-[#F2FAFD] border-[1px] border-[#fff] text-[10px] ">REACT.JS</h3>
                    <h3 className="w-[109.23px] h-[27px] pt-[7px] rounded-[70px] text-center text-[#38761D] bg-[#F2FAFD] border-[1px] border-[#fff] text-[10px] ">REACT.NATIVE</h3>
                    <h3 className="w-[94.09px] h-[27px] pt-[7px] rounded-[70px] text-center text-[#38761D] bg-[#F2FAFD] border-[1px] border-[#fff] text-[10px] ">JAVASCRIPT</h3>
                    <h3 className="w-[94.09px] h-[27px] pt-[7px] rounded-[70px] text-center text-[#38761D] bg-[#F2FAFD] border-[1px] border-[#fff] text-[10px] ">JAVASCRIPT</h3>
                  </div>
                  <div className="mt-[8px] flex justify-between items-center w-[280px]">
                    <h3 className="w-[81px] h-[27px] pt-[7px] rounded-[70px] text-center text-[#38761D] bg-[#F2FAFD] border-[1px] border-[#fff] text-[10px] ">REACT.JS</h3>
                    <h3 className="w-[109.23px] h-[27px] pt-[7px] rounded-[70px] text-center text-[#38761D] bg-[#F2FAFD] border-[1px] border-[#fff] text-[10px] ">REACT.NATIVE</h3>
                    <h3 className="w-[94.09px] h-[27px] pt-[7px] rounded-[70px] text-center text-[#38761D] bg-[#F2FAFD] border-[1px] border-[#fff] text-[10px] ">JAVASCRIPT</h3>
                  </div>
                  <h4 className=" border-b-[1px] w-[370px] mt-[20px] border-[#E3E7EB] ">{/* intentional break */}</h4>
                </div>
                <div className="mt-[10px] ml-[15px]">
                  <h3 className="text-[16px] text-[#38761D]   font-[400]">Work Experience</h3>
                  <div className="mt-[15px] flex justify-between items-center w-[370px]">
                    <div className=" flex w-[230px] justify-between items-center">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="#ECEDF1" />
                        <path
                          d="M13.125 22.75V14.625C13.125 14.2935 13.2567 13.9755 13.4911 13.7411C13.7255 13.5067 14.0435 13.375 14.375 13.375H25.625C25.9565 13.375 26.2745 13.5067 26.5089 13.7411C26.7433 13.9755 26.875 14.2935 26.875 14.625V22.75"
                          stroke="#38761D"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.875 22.75H28.125V24C28.125 24.3315 27.9933 24.6495 27.7589 24.8839C27.5245 25.1183 27.2065 25.25 26.875 25.25H13.125C12.7935 25.25 12.4755 25.1183 12.2411 24.8839C12.0067 24.6495 11.875 24.3315 11.875 24V22.75Z"
                          stroke="#38761D"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path d="M21.25 15.875H18.75" stroke="#38761D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <h3 className="text-[13px] w-[150px]  text-[#38761D]   font-[400]">Java Developer Ecobank</h3>
                    </div>
                    <div>
                      <h3 className="text-[12px] text-[#38761D]   font-[400]">2yrs 1mo</h3>
                    </div>
                  </div>
                  <div className="mt-[15px] flex justify-between items-center w-[370px]">
                    <div className=" flex w-[230px] justify-between items-center">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="#ECEDF1" />
                        <path
                          d="M13.125 22.75V14.625C13.125 14.2935 13.2567 13.9755 13.4911 13.7411C13.7255 13.5067 14.0435 13.375 14.375 13.375H25.625C25.9565 13.375 26.2745 13.5067 26.5089 13.7411C26.7433 13.9755 26.875 14.2935 26.875 14.625V22.75"
                          stroke="#38761D"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.875 22.75H28.125V24C28.125 24.3315 27.9933 24.6495 27.7589 24.8839C27.5245 25.1183 27.2065 25.25 26.875 25.25H13.125C12.7935 25.25 12.4755 25.1183 12.2411 24.8839C12.0067 24.6495 11.875 24.3315 11.875 24V22.75Z"
                          stroke="#38761D"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path d="M21.25 15.875H18.75" stroke="#38761D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <h3 className="text-[13px] w-[150px]  text-[#38761D]   font-[400]">Java Developer Ecobank</h3>
                    </div>
                    <div>
                      <h3 className="text-[12px] text-[#38761D]   font-[400]">2yrs 1mo</h3>
                    </div>
                  </div>
                  <div className="mt-[15px] flex justify-between items-center w-[370px]">
                    <div className=" flex w-[230px] justify-between items-center">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="20" cy="20" r="20" fill="#ECEDF1" />
                        <path
                          d="M13.125 22.75V14.625C13.125 14.2935 13.2567 13.9755 13.4911 13.7411C13.7255 13.5067 14.0435 13.375 14.375 13.375H25.625C25.9565 13.375 26.2745 13.5067 26.5089 13.7411C26.7433 13.9755 26.875 14.2935 26.875 14.625V22.75"
                          stroke="#38761D"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.875 22.75H28.125V24C28.125 24.3315 27.9933 24.6495 27.7589 24.8839C27.5245 25.1183 27.2065 25.25 26.875 25.25H13.125C12.7935 25.25 12.4755 25.1183 12.2411 24.8839C12.0067 24.6495 11.875 24.3315 11.875 24V22.75Z"
                          stroke="#38761D"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path d="M21.25 15.875H18.75" stroke="#38761D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <h3 className="text-[13px] w-[150px]  text-[#38761D]   font-[400]">Java Developer Ecobank</h3>
                    </div>
                    <div>
                      <h3 className="text-[12px] text-[#38761D]   font-[400]">2yrs 1mo</h3>
                    </div>
                  </div>
                  <div className=" border-t-[1px] w-[370px] mt-[21px] border-[#E3E7EB] ">
                    <h3 className="text-[16px] text-[#38761D] mt-[20px]  font-[400]">Education</h3>

                    <div className=" flex w-[300px] mt-[20px] ml-[5px] justify-between items-center">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          opacity="0.2"
                          d="M4.5 13.8662V20.6813C4.49959 20.897 4.56932 21.107 4.69869 21.2797C5.54077 22.4002 9.09339 26.4995 16 26.4995C22.9066 26.4995 26.4592 22.4002 27.3013 21.2797C27.4307 21.107 27.5004 20.897 27.5 20.6813V13.8662L16 19.9995L4.5 13.8662Z"
                          fill="#38761D"
                        />
                        <path d="M1 12L16 4L31 12L16 20L1 12Z" stroke="#38761D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M23.5 30V16L16 12" stroke="#38761D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path
                          d="M27.5 13.8662V20.6813C27.5004 20.897 27.4307 21.107 27.3013 21.2797C26.4592 22.4002 22.9066 26.4995 16 26.4995C9.09339 26.4995 5.54077 22.4002 4.69869 21.2797C4.56932 21.107 4.49959 20.897 4.5 20.6813V13.8662"
                          stroke="#38761D"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div>
                        <h3 className="text-[15px]   text-[#38761D]   font-[400]">American University of Nigeria</h3>
                        <h3 className="text-[13px] mt-[3px] text-[#38761D]   font-[400]">
                          Computer Science <span>Bsc</span>
                        </h3>
                        <h3 className="text-[15px] text-opacity-[54%]  text-[#38761D] mt-[5px]  font-[400]">2017-2021</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Applicant;
