import { Link } from "react-router-dom";
import Select from "react-select";
import Heading from "./Heading";
import SideBar from "./SideBar";

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
const years = [
  { value: "oneYear", label: " Less than 1 year" },
  { value: "two", label: "1 year but less than 2 years" },
  { value: "three", label: "2 years but less than 3 years" },
  { value: "four", label: "3 years but less than 4 years" },
  { value: "five", label: "4 years but less than 5 years" },
  { value: "six", label: "5 years but less than 10 years" },
  { value: "seven", label: "10 years and above" },
];
const jobType = [
  { value: "full", label: " Full Time (On-site)" },
  {
    value: "fulltime",
    label: " Full Time (Remote)",
  },
  { value: "part", label: " Part Time (On-site)" },
  { value: "part-remote", label: " Part Time (Remote)" },
];
const jobRole = [
  { value: "entry", label: "Entry Level" },
  { value: "junior", label: "Junior Level" },
  { value: "inter", label: "Intermediate Level" },
  { value: "senior", label: "Senior Level" },
];
const customStyles = {
  menu: (base) => ({
    ...base,
    backgroundColor: "#fafafa",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#38761D",
    opacity: "80%",
  }),
  control: (base) => ({
    ...base,
    height: 60,
    backgroundColor: "#fafafa",
    color: "rgba(10, 10, 10, 0.5)",
    paddingLeft: "7px",
    outline: "none",

    borderRadius: "5px",
    fontSize: "14px",
  }),
};
function BasicInfo() {
  return (
    <>
      <Heading />
      <div className=" 3xxl:mt-[8%] 5xl:mt-[-4%] flex 820xxl:mt-[2%] 1halfxl:ml-[0px] 1halfxl:mt-[-1%] 820xxl:ml-[5%] 5xl:ml-[5%]">
        <SideBar />
        <div className=" mt-[11%] 5xl:mt-[11%] 3xxl:mt-[15%] 820xxl:ml-[30%] 3xxl:ml-[1rem]  ml-[25rem] 1xl:ml-[22rem]  ">
          <h1 className=" 3xxl:w-[300px] text-[#38761D]  820xxl:w-[400px] text-[30px] font-[600] opacity-80 ">Confirm the resource</h1>
          <p className=" 3xxl:hidden p text-[#B6D7A8] 1halfxl:block 820xxl:hidden text-[18px] font-[300] mt-[14px] 5xl:w-[1220px]    4xl:w-[920px]">Please fill in the details below so we can get in touch with you</p>
          <p className="3xxl:w-[300px] 820xxl:block 1halfxl:hidden text-[#B6D7A8] hidden border-b-[1px] border-b-[#38761D] w-[400px] pb-[20px] text-[18px] font-[300] mt-[14px] ">Please fill in the details below so we can get in touch with you</p>
          <form className="mt-7" action="">
            <label className=" text-[#38761D] text-[14px] font-[400] opacity-80 " htmlFor="name">
              What role would you like to hire ?
            </label>
            <br />
            <Select
              placeholder="Select the role you would like to hire"
              styles={customStyles}
              className="w-[640px] 3xxl:w-[300px] 1halfxl:w-[640px]   mt-2 text-[#38761D]  outline-none  5xl:w-[1220px]  820xxl:w-[400px] 4xl:w-[920px]"
              options={jobRole}
            />
            <br />

            <label className=" text-[#38761D] text-[14px] font-[400] opacity-80 " htmlFor="address">
              What skill are you looking out for ?
            </label>
            <br />
            <Select placeholder="Select the skills required" styles={customStyles} className=":w-[640px] 3xxl:w-[300px]  1halfxl:w-[640px]  mt-2 text-[#38761D]     outline-none  5xl:w-[1220px]  820xxl:w-[400px] 4xl:w-[920px]" options={options} />
            <br />

            <label className=" text-[#38761D] text-[14px] font-[400] opacity-80 " htmlFor="text">
              What job type ?
            </label>
            <br />
            <Select placeholder="Select the job type" styles={customStyles} className="w-[640px] 1halfxl:w-[640px] 3xxl:w-[300px]  mt-2 text-[#38761D]     outline-none  5xl:w-[1220px]  820xxl:w-[400px] 4xl:w-[920px]" options={jobType} />
            <br />

            <label className=" text-[#38761D] text-[14px] font-[400] opacity-80 " htmlFor="text">
              What level of experience are you looking for ?
            </label>
            <br />
            <Select
              placeholder="Select the experience level you need"
              styles={customStyles}
              className="w-[640px]  1halfxl:w-[640px]  mt-2 text-[#38761D] 3xxl:w-[300px]    outline-none  5xl:w-[1220px]  820xxl:w-[400px] 4xl:w-[920px]"
              options={years}
            />
          </form>

          <div className=" flex justify-end w-[640px] 3xxl:w-[300px] mb-6 1halfxl:w-[640px] mt-[3rem] 5xl:w-[1220px]  820xxl:w-[400px] 4xl:w-[920px]">
            <Link className="" to="">
              <h1 className=" w-[157px]  h-[45px] bg-[#38761D] pt-3 opacity-95 text-[#fff] text-center tracking-[2px] text-[14px] font-[400]  ">SUBMIT</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default BasicInfo;
