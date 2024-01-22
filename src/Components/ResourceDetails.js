// import { useState } from "react";
// import { Link } from "react-router-dom";
import Select from "react-select";
import Heading from "./Heading";
import SideBar from "./SideBar";
import { useState } from "react";

const jobRole = [
  { value: "entry", label: "Entry Level" },
  { value: "junior", label: "Junior Level" },
  { value: "inter", label: "Intermediate Level" },
  { value: "senior", label: "Senior Level" },
];
const options = [
  { value: "Software Dev Engineer ", label: "Software Dev Engineer (Artificial Intelligence, Machine Learning, and Blockchain)" },
  { value: "Sre", label: "Site Reliability Engineer (SRE's)" },
  { value: "data", label: "Data Engineers/Analysis" },
  { value: "cloud", label: "Cloud/Data Architects" },
  { value: "developers", label: "Full Stack Developers" },
  { value: "ce", label: "Cloud Engineers" },
  { value: "DE", label: "Data Engineers" },
  { value: "security", label: "Security Architects/Cyber Security Analyist" },
  { value: "Db", label: "Database Administrators" },
  { value: "BA", label: "Business Analysis" },
  { value: "ST", label: "Software Testers" },
  { value: "devops", label: "Devops Engineer" },
  { value: "PM", label: "Product Manager" },
  { value: "ui/ux", label: "User Interface (UI)/User Experience (UX) Designer" },
];
const skills = [
  { value: "AI", label: " Artificial intelligence (AI)" },
  { value: "Cybersecurity", label: " Cybersecurity" },
  { value: " Cloud computing", label: "Cloud Computing" },
  { value: "Software engineering", label: "Software Engineering" },
  { value: "Software development", label: "Software Development" },
  { value: "Project management", label: "Project Management" },
  { value: "UI/UX design", label: "User Interface (UI)/User Experience (UX) Designer" },
  { value: "Data analytics", label: "Data Analytics" },
  { value: "Data sciences", label: "Data Science" },
  { value: "Programming", label: "Programming" },
  { value: "Computer graphics", label: "Computer Graphics" },
  { value: "Digital marketing", label: "Digital Marketing" },
];
const years = [
  { value: "oneYear", label: " Less than 1 year" },
  { value: "two", label: "1 year but less than 2 years" },
  { value: "three", label: "2 years but less than 3 years" },
  { value: "four", label: "3 years but less than 4 years" },
  { value: "five", label: "4 years but less than 5 years" },
  { value: "six", label: "5 years but less than 10 years" },
  { value: "seven", label: "10 years and above" },
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
function ResourceDetails() {
  // const [location, setLocation] = useState("");

  // const handleLocationChange = (e) => {
  //   setLocation(e.target.value);
  // };
  // Geocode.setLanguage("en");
  const userId = localStorage.getItem("userId"); // Retrieve the id from localStorage
  console.log(userId);


   const [mainService, setMainService] = useState();
   const [skill, setSkill] = useState();
   const [expertiseLevel, setExpertiseLevel] = useState();
   const [yearOfExperience, setYearOfExperience] = useState();
   const [location, setLocation] = useState();
   const [description, setDescription] = useState();

    const handleMainService = (selectedOption) => {
      const value = selectedOption.value;
      setMainService(value);
    };
     const handleSkill = (selectedOption) => {
       const value = selectedOption.value;
       setSkill(value);
     };
     const handleExpertiseLevel = (selectedOption) => {
       const value = selectedOption.value;
      setExpertiseLevel(value);
    };
     const handleLocation = (event) => {
      setLocation(event.target.value);
    };
     const handleDescription = (event) => {
      setDescription(event.target.value);
    };

    const handleYearOfExperience = (selectedOption) =>{
      const value = selectedOption.value;
      setYearOfExperience(value);
    }


  const handleSign2Click = async () => {
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        mainService: mainService,
        skill: skill,
        expertiseLevel: expertiseLevel,
        yearOfExperience: 1,
        location: location,
        description: description,
      }),
    };

    console.log(requestOptions);
    // setLoading(true); // start progress spinner
    fetch(
      `http://nubeero-deployment-server.uksouth.cloudapp.azure.com:9009/api/Eclat/user/${userId}/signUp2`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.mainService !== null) {

          const redirectUrl = `/resourcedetails/resourcesdetails2`;

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
      <div className=" h-[200vh] 5xl:mt-[-5%] 820xxl:mt-[0] 3xxl:mt-[10%] flex 5xl:ml-[5%]">
        <SideBar />
        <div className=" mt-[12%] 4xl:ml-[24rem] 3xxl:ml-[1rem] 5xl:ml-[25rem] ml-[25rem] 820xxl:ml-[16rem] 1xl:ml-[22rem]">
          <h1 className=" 3xxl:w-[350px] 820xxl:w-[471px] text-[#38761D] text-[30px] font-[600] opacity-80 ">
            Kindly fill in the details
          </h1>
          <p className="3xxl:w-[300px] 820xxl:w-[500px] text-[#7D90B8] text-[18px] font-[300] mt-[14px] 5xl:w-[1220px] 4xl:w-[920px] ">
            Please fill in the details below so we can get in touch with you
          </p>
          <div className=" mt-[40.5px] 820xxl:w-[550px] 3xxl:w-[300px] w-[550px] items-center text-center flex justify-center">
            <div className=" ">
              <svg
                className=" ml-[40px]"
                width="78"
                height="78"
                viewBox="0 0 78 78"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39 76.5C59.7107 76.5 76.5 59.7107 76.5 39C76.5 18.2893 59.7107 1.5 39 1.5C18.2893 1.5 1.5 18.2893 1.5 39C1.5 59.7107 18.2893 76.5 39 76.5Z"
                  stroke="#DCDDE5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M39 51.5C47.6294 51.5 54.625 44.5044 54.625 35.875C54.625 27.2456 47.6294 20.25 39 20.25C30.3706 20.25 23.375 27.2456 23.375 35.875C23.375 44.5044 30.3706 51.5 39 51.5Z"
                  stroke="#DCDDE5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.9219 66.8805C16.2758 62.2524 19.8645 58.366 24.2907 55.6514C28.7169 52.9368 33.808 51.5 39.0003 51.5C44.1926 51.5 49.2837 52.9368 53.7099 55.6513C58.1361 58.3659 61.7248 62.2523 64.0788 66.8804"
                  stroke="#DCDDE5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className=" text-[#7D90B8] text-[14px] font-[300] mt-[14px] ">
                Add your profile picture
              </p>
            </div>
          </div>

          <form className="mt-7" action="">
            <label className=" text-[16px] text-[#1E2757]" htmlFor="offer">
              What is the main service you offer ?
            </label>
            <Select
              required
              placeholder="E.g  Front-End Developer"
              styles={customStyles}
              className="3xxl:w-[300px] mb-[20px] w-[471px] h-[50px] 820xxl:w-[471px] mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
              options={options}
              value={options.find((option) => option.value === mainService)}
              onChange={handleMainService}
            />

            <label className=" text-[16px] text-[#1E2757]" htmlFor="offer">
              Select your skills
            </label>

            <br />
            <Select
              required
              placeholder="Select skill"
              styles={customStyles}
              className=" mb-[20px] w-[471px] h-[50px] 3xxl:w-[300px] 820xxl:w-[471px] mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
              options={skills}
              value={skills.find((option) => option.value === skill)}
              onChange={handleSkill}
            />

            <label className=" text-[16px] text-[#1E2757]" htmlFor="offer">
              What is your expertise level ?
            </label>

            <br />
            <Select
              required
              placeholder="Select expertise level"
              styles={customStyles}
              className=" mb-[20px] 820xxl:w-[471px] 3xxl:w-[300px] w-[471px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
              options={years}
              
              value={years.find((option) => option.value === expertiseLevel)}
              onChange={handleExpertiseLevel}
            />

            <label
              className=" text-[16px] 3xxl:w-[250px] text-[#1E2757]"
              htmlFor="offer"
            >
              How many years of experience do you have in this field ?
            </label>

            <br />
            <Select
              placeholder="Select years of experience"
              styles={customStyles}
              className=" 820xxl:w-[471px] mb-[20px] w-[471px] h-[50px] 3xxl:w-[300px] mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
              options={jobRole}
              value={yearOfExperience}
              onChange={handleYearOfExperience}
            />

            <label className=" text-[16px] text-[#1E2757]" htmlFor="offer">
              Where are you located ?
            </label>

            <br />
            <input
              className="text-[14px] 820xxl:w-[471px] 3xxl:w-[300px] border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[471px] h-[50px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
              placeholder="Enter location"
              type="text"
              id="location"
              value={location}
              onChange={handleLocation}
            />
            <br />
            <label className=" text-[16px] text-[#1E2757]" htmlFor="offer">
              Give a brief description about yourself
            </label>

            <br />
            <input
              className="text-[14px] 820xxl:w-[471px] 3xxl:w-[300px] border-[#DCDDE5] border-[1px] rounded-[5px] bg-[#fafaf4] pl-[14px] mb-[20px] w-[471px] h-[80px]  mt-[11px] text-[#7D90B8]  outline-none  2xl:w-[900px] "
              placeholder="Describe your top skills, strengths, and experiences."
              type="text"
              value={description}
              onChange={handleDescription}
            />
          </form>
          <br />

          {/* <Link
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className="mt-[40px]"
            to="/resourcedetails/resourcesdetails2"
          > */}
          <h1
            className=" w-[471px] 820xxl:w-[471px] 3xxl:w-[300px] h-[50px] rounded-[5px] bg-[#38761D] pt-[15px] opacity-95 text-[#fff] text-center tracking-[2px] text-[14px] font-[400]  "
            onClick={handleSign2Click}
          >
            Continue
          </h1>
          {/* </Link> */}
        </div>
      </div>
      {/* <Link className="mt-[40px]" to="/homeforapplicant"> */}
    </>
  );
}
export default ResourceDetails;
