// import { Link } from "react-router-dom";
import Heading from "./Heading";
import SideBar from "./SideBar";
import "../App.css";
import { useState } from "react";

function ResourceDetails3() {
  // const [employmentStat, setEmploymentStat] = useState();
  // const [nameOfCompany, setNameOfCompany] = useState();
  const [school, setSchool] = useState();
  const [areaOfStudy, setAreaOfStudy] = useState();
  const [degree, setDegree] = useState();
  const [schoolStart, setSchoolStart] = useState();
  const [schoolEnd, setSchoolEnd] = useState();

  const handleSchool = (event) => {
    setSchool(event.target.value);
  };
  const handleAreaOfStudy = (event) => {
    setAreaOfStudy(event.target.value);
  };
  const handleDegree = (event) => {
    setDegree(event.target.value);
  };
  const handleSchoolStart = (event) => {
    setSchoolStart(event.target.value);
  };
  const handleSchoolEnd = (event) => {
    setSchoolEnd(event.target.value);
  };

  const handleSign3Click = async () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        school: school,
        areaOfStudy: areaOfStudy,
        degree: degree,
        schoolStart: schoolStart,
        schoolEnd: schoolEnd,
      }),
    };
    const userId = localStorage.getItem("userId"); // Retrieve the id from localStorage
    console.log(userId);
    console.log(requestOptions);
    // setLoading(true); // start progress spinner
    fetch(
      `http://172.160.249.253:9009/api/Eclat/user/${userId}/signUp4`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.school !== null) {
          const redirectUrl = `/homeforapplicant`;

          window.location.href = redirectUrl; // Redirect to "/home for applicant" page
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
      <div className=" h-[200vh] 3xxl:mt-[10%] 5xl:mt-[-5%] 820xxl:mt-[0] flex 5xl:ml-[5%]">
        <SideBar />
        <div className="5xl:ml-[25rem] 4xl:ml-[24rem] mt-[12%] 3xxl:ml-[1rem] 820xxl:ml-[16rem] ml-[25rem] 1xl:ml-[22rem]">
          <h1 className=" 3xxl:w-[300px] 820xxl:w-[600px] text-[#38761D] text-[30px] font-[600] opacity-80 ">
            Kindly fill in the details
          </h1>
          <p className=" 3xxl:w-[300px] 820xxl:w-[500px] text-[#7D90B8] text-[18px] font-[300] mt-[14px] 5xl:w-[1220px] 4xl:w-[920px] ">
            Please fill in the details below so we can get in touch with you
          </p>

          <form className="mt-7" action="">
            <label
              className=" 3xxl:w-[200px] text-[16px] text-[#1E2757]"
              htmlFor="company"
            >
              What is the name of your College/University ?
            </label>

            <br />
            <input
              className="text-[14px] 3xxl:w-[300px] 820xxl:w-[471px] border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[471px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
              placeholder="E.g  University of Lagos"
              type="text"
              value={school}
              onChange={handleSchool}
            />
            <br />

            <label className=" text-[16px] text-[#1E2757]" htmlFor="industry">
              What is your area of study ?
            </label>
            <br />
            <input
              className="text-[14px] 3xxl:w-[300px] 820xxl:w-[471px] border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[471px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
              placeholder="E.g  Computer Science"
              type="text"
              value={areaOfStudy}
              onChange={handleAreaOfStudy}
            />
            <br />
            <label className=" text-[16px] text-[#1E2757]" htmlFor="industry">
              What is your degree ?
            </label>
            <br />
            <input
              className="text-[14px] 3xxl:w-[300px] 820xxl:w-[471px] border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[471px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
              placeholder="Enter your degree"
              type="text"
              value={degree}
              onChange={handleDegree}
            />

            <br />
            <div className=" flex 3xxl:w-[320px] 4xl:w-[900px] 820xxl:w-[471px] 5xl:w-[900px] justify-between w-[471px]">
              <div>
                <label
                  className=" 3xxl:w-[100px]  text-[16px] text-[#1E2757]"
                  htmlFor="period of employment"
                >
                  Year of starting ?
                </label>
                <br />
                <input
                  className="text-[14px] 5xl:w-[430px] 4xl:w-[430px] 3xxl:w-[140px] 820xxl:w-[228px] pr-[14px]  border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[228px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
                  placeholder="Starting year"
                  type="number"
                  value={schoolStart}
                  onChange={handleSchoolStart}
                />
              </div>
              <br />
              <div>
                <label
                  className=" text-[16px] 3xxl:w-[100px] text-[#1E2757]"
                  htmlFor="period of employment"
                >
                  Year of graduation ?
                </label>
                <br />
                <input
                  className="text-[14px] 5xl:w-[430px] 4xl:w-[430px] 3xxl:w-[140px] pr-[14px] 820xxl:w-[228px] border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[228px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
                  placeholder="End year"
                  type="number"
                  value={schoolEnd}
                  onChange={handleSchoolEnd}
                />
              </div>
            </div>
          </form>
          <br />

          {/* <Link
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="mt-[40px]"
            to="/homeforapplicant"
          > */}
          <h1
            className="3xxl:w-[300px] 820xxl:w-[471px] w-[471px] h-[50px] rounded-[5px] bg-[#38761D] pt-[15px] opacity-95 text-[#fff] text-center tracking-[2px] text-[14px] font-[400]  "
            onClick={handleSign3Click}
            style={{ cursor: "pointer" }}
          >
            Continue
          </h1>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
}

export default ResourceDetails3;
