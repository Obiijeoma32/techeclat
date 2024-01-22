import { Link } from "react-router-dom";
import Select from "react-select";
import HeaderForSignup from "./HeaderForSignup";

function Jobs2() {
  const englishProficiency = [
    { value: "basic", label: " Basic" },
    {
      value: "intermediate",
      label: " Intermediate",
    },
    { value: "advanced", label: " Advanced" },
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
      // width: "420px",
    }),
    text: (base) => ({
      ...base,
      color: "#0A0A0A",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#0A0A0A",
      opacity: "50%",
    }),
    control: (base) => ({
      ...base,
      height: 50,
      minHeight: 50,
      backgroundColor: "#fff",
      color: "rgba(10, 10, 10, 0.5)",
      paddingLeft: "7px",
      outline: "none",
      borderRadius: "2px",
      boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    }),
  };

  return (
    <>
      <>
        <div className=" bg-[#fff] md:w-[100%] 3xxl:w-[505px] h-[150vh]">
          <HeaderForSignup />
          <div className="md:pt-[7%] 1halfxl:ml-[28%] 3xxl:pt-[11rem] 820xxl:ml-[100px] 820xxl:pt-[200px] pb-[20px] 1xl:pt-[15%] 2xl:pt-[10%] xl:pt-[10%] md:ml-[30%] 3xxl:ml-[50px] 3xl:ml-[33%] 3xl:pt-[10%] 6xl:ml-[33%] 4xl:ml-[35%] 5xl:ml-[38%] ">
            <div className=" bg-white rounded-[5px] 3xxl:w-[380px]   shadow-lg md:w-[562px]  h-[636px] ">
              <div className=" 3xxl:ml-[20px] pt-5 ">
                <h4 className=" text-[14px] text-center text-[#0A0A0A] opacity-40">
                  Become An <span className=" text-[#38761D] ">ÉCLAT</span>
                </h4>
                <h1 className=" text-[36px] text-center text-[#38761D] font-[600] opacity-90">Sign Up</h1>
                <p className=" pt-4  text-[16px] text-center text-[#0A0A0A] opacity-40">Enter your details to continue</p>
                <form autoComplete="on" className="md:ml-[3rem] 3xxl:ml-[10px] mt-7" action="">
                  <Select
                    required
                    placeholder="English Proficiency"
                    styles={customStyles}
                    className="lg:w-[670px] 820xxl:w-[420px] 3xl:w-[420px] 1xl:w-[420px]  3xxl:w-[320px]  md:w-[640px] h-[40px]  mt-2 text-[#38761D]  outline-none  xl:w-[420px] 2xl:w-[420px] "
                    options={englishProficiency}
                  />
                  <br />
                  <Select
                    required
                    placeholder="Skill"
                    styles={customStyles}
                    className="lg:w-[670px] 820xxl:w-[420px] 1xl:w-[420px] 3xxl:w-[320px] 3xl:w-[420px]  md:w-[640px] h-[40px]  mt-2 text-[#38761D]  outline-none  xl:w-[420px] 2xl:w-[420px] "
                    options={options}
                  />
                  <br />
                  <Select
                    required
                    placeholder="Year of Experience"
                    styles={customStyles}
                    className="lg:w-[670px] 820xxl:w-[420px] 3xl:w-[420px] 1xl:w-[420px] 3xxl:w-[320px] md:w-[640px] h-[40px]  mt-2 text-[#38761D]     outline-none  xl:w-[420px] 2xl:w-[420px] "
                    options={years}
                  />
                  <br />

                  <input required className=" 3xxl:w-[320px] md:w-[420px] mb-[15px] h-[50px] pl-[14px] bg-[#fff] outline-none rounded-[2px]  border-[1px]  shadow-lg " type="password" placeholder="Set Password" />
                  <br />
                  <input required className=" 3xxl:w-[320px] md:w-[420px] mb-[15px] h-[50px] pl-[14px] bg-[#fff] outline-none rounded-[2px]  border-[1px]  shadow-lg " type="password" placeholder="Confirm Password" />
                  <br />

                  <Link to="/loginuser">
                    <div className="mt-[35px] 3xxl:w-[320px] tracking-[2px] md:w-[420px] rounded-[2px] h-[55px] bg-[#38761D] text-center pt-[11px] opacity-90 text-[#fff]">
                      <h1>SUBMIT</h1>
                    </div>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Jobs2;
