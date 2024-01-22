// import { Link } from "react-router-dom";
import Select from "react-select";
import Heading from "./Heading";
import SideBar from "./SideBar";
import "../App.css";
import { useState } from "react";

function ResourceDetails2() {
  const userId = localStorage.getItem("userId"); // Retrieve the id from localStorage
  console.log(userId);
  const employmentStatus = [
    { value: "Full-time employment", label: "Full-time Employment" },
    { value: "Part-time employment", label: "Part-time Employment" },
    { value: "Casual employment", label: "Casual Employment" },
    { value: "Contract employment", label: "Contract Employment" },
    { value: "Temporary employment", label: "Temporary Employment" },
    { value: "Self-employment", label: "Self-Employment" },
    { value: "Zero-hours contract", label: "Zero-hours Contract" },
  ];
  const customStyles = {
    menu: (base) => ({
      ...base,

      color: "#7D90B8",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#7D90B8",
    }),
    control: (base) => ({
      ...base,
      height: 50,
      backgroundColor: "#fafafa",
      color: "rgba(10, 10, 10, 0.5)",
      paddingLeft: "7px",
      outline: "none",
      borderColor: "#DCDDE5",
      borderRadius: "4px",
      fontSize: "14px",
    }),
  };
  const [employmentStat, setEmploymentStat] = useState();
  const [nameOfCompany, setNameOfCompany] = useState();
  const [industryOfCompany, setIndustryOfCompany] = useState();
  const [jobTitle, setJobTitle] = useState();
  const [jobStart, setJobStart] = useState();
  const [jobEnd, setJobEnd] = useState();
  const [jobDescription, setJobDescription] = useState();

  const handleEmploymentStat = (selectedOption) => {
    const value = selectedOption.value;
    setEmploymentStat(value);
  };

  const handleNameOfCompany = (event) => {
    setNameOfCompany(event.target.value);
  };
  const handleIndustryOfCompany = (event) => {
    setIndustryOfCompany(event.target.value);
  };
  const handleJobTitle = (event) => {
    setJobTitle(event.target.value);
  };
  const handleJobStart = (event) => {
    setJobStart(event.target.value);
  };
  const handleJobEnd = (event) => {
    setJobEnd(event.target.value);
  };
  const handleJobDescription = (event) => {
    setJobDescription(event.target.value);
  };

  const handleSign3Click = async () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        employmentStatus: employmentStat,
        nameOfCompany: nameOfCompany,
        industryOfCompany: industryOfCompany,
        jobTitle: jobTitle,
        jobStart: jobStart,
        jobEnd: jobEnd,
        jobDescription: jobDescription,
      }),
    };

    console.log(requestOptions);
    // setLoading(true); // start progress spinner
    fetch(`http://nubeero-deployment-server.uksouth.cloudapp.azure.com:9009/api/Eclat/user/${userId}/signUp3`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.employmentStatus !== null) {
          const redirectUrl = `/resourcedetails/resourcesdetails2/resourcedetails3`;

          window.location.href = redirectUrl; // Redirect to "/resourcedetails" page
        }
      })
      .catch((err) => {
        console.log(err.message);
        // setLoading(false); // stop progress spinner
      });
  };
  return (
    <>
      <Heading />
      <div className=" h-[200vh] flex 5xl:mt-[-5%] 3xxl:mt-[10%] 820xxl:mt-[0px] 5xl:ml-[5%]">
        <SideBar />
        <div className=" mt-[12%] 4xl:ml-[24rem] 820xxl:ml-[16rem] 5xl:ml-[25rem]  3xxl:ml-[1rem] 1xl:ml-[22rem] ml-[25rem]">
          <h1 className=" 3xxl:w-[300px] 820xxl:w-[471px] text-[#38761D] text-[30px] font-[600] opacity-80 ">Kindly fill in the details</h1>
          <p className=" 3xxl:w-[300px] 820xxl:w-[500px] text-[#7D90B8] text-[18px] font-[300] mt-[14px] 5xl:w-[1220px] 4xl:w-[920px] ">Please fill in the details below so we can get in touch with you</p>

          <form className="mt-7" action="">
            <label className=" text-[16px] text-[#1E2757]" htmlFor="offer">
              What is your current employment status
            </label>

            <br />
            <Select
              required
              placeholder="Select your employment status"
              styles={customStyles}
              className=" mb-[20px] 3xxl:w-[300px] 820xxl:w-[471px] w-[471px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
              options={employmentStatus}
              value={employmentStatus.find((option) => option.value === employmentStat)}
              onChange={handleEmploymentStat}
            />
            <label className=" text-[16px] text-[#1E2757]" htmlFor="company">
              What is the name of your company ?
            </label>

            <br />
            <input
              className="text-[14px]  border-[#DCDDE5] 3xxl:w-[300px] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] 820xxl:w-[471px] mb-[20px] w-[471px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
              placeholder="E.g  Google"
              type="text"
              value={nameOfCompany}
              onChange={handleNameOfCompany}
            />
            <br />

            <label className=" text-[16px] text-[#1E2757]" htmlFor="industry">
              What industry is your company in ?
            </label>
            <br />
            <input
              className="text-[14px] 3xxl:w-[300px] 820xxl:w-[471px] border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[471px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
              placeholder="E.g  Fintech"
              type="text"
              value={industryOfCompany}
              onChange={handleIndustryOfCompany}
            />
            <br />
            <label className=" text-[16px] text-[#1E2757]" htmlFor="industry">
              What is your job title ?
            </label>
            <br />
            <input
              className="text-[14px] 3xxl:w-[300px] 820xxl:w-[471px] border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[471px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
              placeholder="E.g  Graphics Designer"
              type="text"
              value={jobTitle}
              onChange={handleJobTitle}
            />

            <br />
            <label className=" text-[16px] text-[#1E2757]" htmlFor="period of employment">
              Period of employment ?
            </label>
            <br />
            <div className=" flex 5xl:w-[900px] 4xl:w-[900px]  justify-between 820xxl:w-[471px] 3xxl:w-[300px] w-[471px]">
              <input
                className="text-[14px] 5xl:w-[430px] 4xl:w-[430px] 820xxl:w-[228px] pr-[14px] 3xxl:w-[140px] border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[228px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
                placeholder="Starting year"
                type="number"
                value={jobStart}
                onChange={handleJobStart}
              />

              <input
                className="text-[14px] 4xl:w-[430px] 5xl:w-[430px] 820xxl:w-[228px] pr-[14px] 3xxl:w-[140px]  border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[228px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
                placeholder="End year"
                type="number"
                value={jobEnd}
                onChange={handleJobEnd}
              />
            </div>

            <div className=" flex justify-between items-center w-[185px]">
              <input className=" rounded-[2px] w-[20px] h-[20px] file:border-[1px] border-[#0098DA] accent-transparent " type="checkbox" />
              <label className=" text-[14px] text-[#192850]" htmlFor="currently working here">
                I currently work here
              </label>
            </div>
            <br />
            <label className="3xxl:w-[150px] text-[16px] text-[#1E2757]" htmlFor="role">
              Give a brief description about your job role ?
            </label>
            <br />
            <textarea
              className="text-[14px] pt-[14px] 820xxl:w-[471px] 3xxl:w-[300px]  border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[471px] h-[80px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
              placeholder="Enter description"
              type="text"
              value={jobDescription}
              onChange={handleJobDescription}
            />
          </form>
          <br />

          {/* <Link
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="mt-[40px]"
            to="/resourcedetails/resourcesdetails2/resourcedetails3" */}
          {/* > */}
          <h1 className="3xxl:w-[300px] 820xxl:w-[471px] w-[471px] h-[50px] rounded-[5px] bg-[#38761D] pt-[15px] opacity-95 text-[#fff] text-center tracking-[2px] text-[14px] font-[400]  " onClick={handleSign3Click}>
            Continue
          </h1>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
}

export default ResourceDetails2;
