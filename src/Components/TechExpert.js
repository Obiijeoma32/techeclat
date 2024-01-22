import { Link } from "react-router-dom";
import Heading from "./Heading";
import talentimg from "./talentimg.jpeg";
import people from "./people.jpeg";
import Partners from "./Partners";
import team from "./team.jpeg";
import shakir from "./shakir.jpeg";
import table from "./table.jpeg";
import Steps from "./Steps";
import Footer from "./Footer";

function TechExpert() {
  return (
    <>
      <div>
        <Heading />
        <div className="md:flex 820xxl:mt-[9rem] 1halfxl:w-[90%] 1halfxl:h-[600px] 1halfxl:flex 1halfxl:mt-[80px]  820xxl:grid 820xxl:h-[1000px] 1xl:w-[90%] hidden ml-[5rem] w-[85%]  mt-[6rem] h-[600px] items-center justify-between 5xl:mt-[130px] 5xl:ml-[5%]">
          <div className=" w-[85%]   1xl:w-[50%] ">
            <h1 className=" text-left 820xxl:w-[650px] 820xxl:h-[200px] 4xl:w-[1100px] 1xl:w-[500px]  md:w-[650px] 5xl:w-[1100px] text-[36px] font-[600] text-[#000] opacity-80 ">
              Discover fulfilling employment opportunities with reputable organizations.
            </h1>
            <img className="md:w-[500px] hidden 1halfxl:hidden  820xxl:w-[650px] 820xxl:h-[500px] 820xxl:block 1xl:w-[400px] 1xl:h-[300px] 5xl:w-[600px] 5xl:h-[500px] md:h-[400px]" src={talentimg} alt="Eclat" />

            <p className="tracking-[1px] mt-3 2xl:mt-[-60px] 820xxl:w-[650px] 4xl:w-[900px] 1xl:w-[450px] md:w-[500px] 5xl:w-[1000px] font-[400] text-[#000] opacity-80 text-left text-[16px]">
              Become a part of the Eclat Talent Network and enjoy the satisfaction of stable employment, alongside trustworthy employers and attractive remuneration packages.
            </p>
            <div className=" mt-[30px] ">
              <Link className="w-[186px] rounded-[5px] h-[45px]  text-[16px] bg-[#38761D] flex items-center justify-evenly opacity-95  font-[600] text-[#fff]" to="/jobs">
                Access Network
                <svg className="mt-1" width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 5H12M12 5L7.5 1M12 5L7.5 9.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </Link>
            </div>
            <div className=" mt-7">
              <img className=" w-[300px] " src={people} alt="people" />
              <p className="text-[#000000]  w-[300px] font-[600] text-[14px]">12,000+ people already joined Techeclat Get started today!</p>
            </div>
          </div>
          <img className="md:w-[500px] 1halfxl:w-[550px] 1halfxl:h-[500px] 1halfxl:block 820xxl:hidden 1xl:w-[400px] 1xl:h-[300px] 5xl:w-[600px] 5xl:h-[500px] md:h-[400px]" src={talentimg} alt="Eclat" />
        </div>
        <div className=" md:hidden grid  ml-[1rem] w-[60%]  mt-[6rem] h-[900px] items-center justify-between ">
          <div className="  mt-[1rem] ">
            <div className="grid justify-between ml-[30px]">
              <h1 className=" text-left  w-[400px] text-[28px] font-[600] text-[#000] opacity-80 ">Discover fulfilling employment opportunities with reputable organizations.</h1>
              <img className=" w-[400px] mt-[25px]  h-[300px]" src={talentimg} alt="Eclat" />
            </div>
            <p className="tracking-[1px] mt-[20px] ml-[30px] w-[400px]  font-[400] text-[#000] opacity-80 text-left text-[16px]">
              Become a part of the Eclat Talent Network and enjoy the satisfaction of stable employment, alongside trustworthy employers and attractive remuneration packages.
            </p>
            <div className=" ml-[20px] mt-[30px] ">
              <Link className="w-[186px] rounded-[5px] h-[45px]  text-[16px] bg-[#38761D] flex items-center justify-evenly opacity-95  font-[600] text-[#fff]" to="/jobs">
                Access Network
                <svg className="mt-1" width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 5H12M12 5L7.5 1M12 5L7.5 9.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </Link>
            </div>
            <div className=" ml-[20px] mt-7">
              <img className=" w-[300px]" src={people} alt="people" />
              <p className="text-[#000000] w-[300px] font-[600] text-[14px]">12,000+ people already joined Techeclat Get started today!</p>
            </div>
          </div>
          {/* <img className="w-[500px]  h-[400px]" src={talentimg} alt="Eclat" /> */}
        </div>
        <Partners />
        <div className="md:block  820xxl:w-[85%] 1halfxl:block  820xxl:ml-[11%]  820xxl:grid hidden w-[80%] ml-[8rem] items-center mt-[7rem] 5xl:ml-[5%]">
          <div>
            <svg width="77" height="120" viewBox="0 0 77 135" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.92849 1.46997C3.63576 0.404891 2.53504 -0.221217 1.46997 0.0715126C0.404891 0.364243 -0.221217 1.46496 0.0715126 2.53003L3.92849 1.46997ZM57.7713 79.5678L56.9642 77.7378L56.9642 77.7378L57.7713 79.5678ZM54.7518 57.4565L52.7946 57.045L54.7518 57.4565ZM75.6373 128.896C76.6843 128.544 77.2477 127.41 76.8957 126.363L71.1599 109.301C70.8079 108.254 69.6738 107.691 68.6268 108.043C67.5798 108.395 67.0164 109.529 67.3684 110.576L72.4669 125.742L57.301 130.84C56.254 131.192 55.6906 132.326 56.0426 133.373C56.3946 134.42 57.5287 134.984 58.5757 134.632L75.6373 128.896ZM0.0715126 2.53003C4.26975 17.805 12.1223 40.0874 22.0676 57.2426C27.0297 65.8021 32.6078 73.2538 38.6438 77.8802C44.7386 82.5518 51.5501 84.4974 58.5784 81.3977L56.9642 77.7378C51.7015 80.0589 46.4396 78.8157 41.0771 74.7055C35.6558 70.5502 30.3926 63.6274 25.5281 55.2364C15.8202 38.4906 8.07818 16.5683 3.92849 1.46997L0.0715126 2.53003ZM58.5784 81.3977C67.0105 77.6788 71.8281 69.7407 74.1848 61.438C76.543 53.13 76.5481 44.112 75.0621 37.6393C74.3292 34.4469 73.173 31.6022 71.5197 29.82C70.6699 28.904 69.59 28.165 68.2788 27.9379C66.9356 27.7053 65.6301 28.0582 64.4576 28.8122C62.2446 30.235 60.2415 33.2425 58.378 37.6717C56.476 42.1924 54.5849 48.5299 52.7946 57.045L56.709 57.868C58.471 49.4876 60.2988 43.4209 62.065 39.2229C63.8697 34.9334 65.4841 32.9076 66.6208 32.1767C67.1231 31.8538 67.4255 31.8497 67.5962 31.8793C67.7988 31.9144 68.1385 32.0567 68.5872 32.5404C69.5309 33.5576 70.4867 35.586 71.1635 38.5344C72.4972 44.3432 72.5134 52.6777 70.3368 60.3458C68.1588 68.0191 63.8959 74.6807 56.9642 77.7378L58.5784 81.3977ZM52.7946 57.045C47.095 84.1537 47.7225 99.9454 52.3306 110.118C56.9939 120.414 65.5761 124.551 74.1102 128.791L75.8898 125.209C67.1952 120.889 59.9696 117.288 55.9742 108.468C51.9235 99.5253 51.0413 84.8249 56.709 57.868L52.7946 57.045Z"
                fill="#0067DE"
              />
            </svg>
          </div>
          <div className=" mt-2 820xxl:grid 1halfxl:ml-[-60px] 1halfxl:flex  justify-between items-center flex">
            <div className="w-[700px] ">
              <h1 className=" 820xxl:w-[650px] 1halfxl:w-[600px] text-left 4xl:w-[900px] 5xl:w-[1100px]  md:w-[550px] text-[48px] font-[600] text-[#222222]  ">Elevate your professional journey with our company.</h1>
              <p className="tracking-[1px] mt-3 4xl:w-[800px]  1halfxl:w-[600px] 820xxl:w-[650px] md:w-[450px] 5xl:w-[1000px] font-[400] text-[#4f4f4f] text-left text-[16px]">
                Collaborate with a globally dispersed team and corporation. Explore rewarding employment options with compelling organizations for extended periods. Acquire supplementary expertise through exclusive educational programs. Expand your
                skillset by networking.
              </p>
            </div>
            <img className=" md:w-[400px] 5xl:w-[600px] 1halfxl:w-[500px] 1halfxl:h-[400px] 820xxl:w-[650px] 820xxl:h-[550px] 5xl:h-[500px] md:mt-[5rem] md:h-[300px]" src={team} alt="chatbox" />
          </div>{" "}
          <div className="mt-5 justify-between 1halfxl:flex 1halfxl:w-[90%] 1halfxl:ml-[-70px] 1halfxl:justify-between 820xxl:grid 5xl:ml-[10%] flex">
            <img className=" md:w-[500px] 1halfxl:block block 820xxl:hidden mt-[5rem] md:h-[400px] 5xl:w-[600px] 5xl:h-[500px] " src={shakir} alt="Business manager" />
            <div className=" 1halfxl:ml-[50px] mt-[8rem]">
              <h1 className=" text-left  820xxl:w-[650px] md:w-[450px] 4xl:w-[600px] text-[48px] font-[600] 5xl:w-[800px] text-[#222222]  ">You decide what best suits you</h1>
              <img className=" md:w-[500px] 1halfxl:hidden hidden 820xxl:w-[650px] 820xxl:h-[550px] 820xxl:block mt-[5rem] md:h-[400px] 5xl:w-[600px] 5xl:h-[500px] " src={shakir} alt="Business manager" />

              <ul className="tracking-[1px]  820xxl:mt-[50px] mt-3  font-[400] text-[#4f4f4f] text-left text-[16px]">
                <li className="flex items-center mb-1 820xxl:w-[650px] 820xxl:h-[55px] md:w-[450px] 5xl:w-[800px] justify-between">
                  {" "}
                  <span className="w-[40px] mb-6">•</span> Uncover compensation packages that align with your expertise and qualifications.
                </li>
                <li className="flex items-center mb-1 820xxl:w-[550px] 820xxl:h-[55px] md:w-[450px] 5xl:w-[620px] justify-between">
                  {" "}
                  <span className="w-[34px] mb-6">•</span> Partner exclusively with companies that we have confidence in.
                </li>
                <li className="flex items-center mb-1 820xxl:w-[650px] 820xxl:h-[55px] md:w-[450px] 5xl:w-[650px] justify-between">
                  {" "}
                  <span className="w-[40px] mb-6">•</span> Obtain timely payments in either your local currency, USD, or cryptocurrency.
                </li>
              </ul>
            </div>
          </div>
          <div className=" mt-2 justify-between 5xl:ml-[10%] 820xxl:grid 1halfxl:w-[85%] 1halfxl:flex 1halfxl:ml-[-70px] items-center flex">
            <div className="mt-[7rem] w-[700px]">
              <h1 className=" text-left  md:w-[500px] 4xl:w-[700px] 5xl:w-[800px] 820xxl:w-[650px] text-[48px] font-[600] text-[#222222]  ">We bring Flexibility to work</h1>
              <ul className="tracking-[1px] mt-3  font-[400] text-[#4f4f4f] text-left text-[16px]">
                <li className="flex items-center 820xxl:h-[40px] mb-1 w-[270px] justify-between">
                  <svg width="5" height="5" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="currentColor" />
                  </svg>
                  Reliable ally Career growth
                </li>
                <li className="flex items-center 820xxl:h-[40px] mb-1 w-[190px] justify-between">
                  <svg width="5" height="5" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="currentColor" />
                  </svg>
                  High success rate
                </li>
                <li className="flex items-center 820xxl:h-[40px] mb-1 w-[375px] justify-between">
                  <svg width="5" height="5" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="currentColor" />
                  </svg>
                  Talent matched to ideal opportunities
                </li>
                <li className="flex items-center 820xxl:h-[40px] mb-1 w-[352px] justify-between">
                  <svg width="5" height="5" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="currentColor" />
                  </svg>
                  Expert career advice and guidance
                </li>
                <li className="flex items-center 820xxl:h-[40px] mb-1 w-[265px] justify-between">
                  <svg width="5" height="5" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="currentColor" />
                  </svg>
                  Specialized team building
                </li>
              </ul>
            </div>
            <img className=" md:w-[500px] 1halfxl:w-[500px] 1halfxl:h-[400px] 820xxl:w-[650px] 820xxl:h-[550px] 820xxl:rounded-[0px] md:mt-[5rem] 5xl:w-[700px] rounded-[50%] 5xl:h-[600px] md:h-[400px]" src={table} alt="chatbox" />
          </div>{" "}
        </div>
        <div className="md:hidden block w-[80%] 1halfxl:hidden items-center mt-[4rem]">
          <div className="ml-[1rem]">
            <svg width="70" height="90" viewBox="0 0 77 135" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3.92849 1.46997C3.63576 0.404891 2.53504 -0.221217 1.46997 0.0715126C0.404891 0.364243 -0.221217 1.46496 0.0715126 2.53003L3.92849 1.46997ZM57.7713 79.5678L56.9642 77.7378L56.9642 77.7378L57.7713 79.5678ZM54.7518 57.4565L52.7946 57.045L54.7518 57.4565ZM75.6373 128.896C76.6843 128.544 77.2477 127.41 76.8957 126.363L71.1599 109.301C70.8079 108.254 69.6738 107.691 68.6268 108.043C67.5798 108.395 67.0164 109.529 67.3684 110.576L72.4669 125.742L57.301 130.84C56.254 131.192 55.6906 132.326 56.0426 133.373C56.3946 134.42 57.5287 134.984 58.5757 134.632L75.6373 128.896ZM0.0715126 2.53003C4.26975 17.805 12.1223 40.0874 22.0676 57.2426C27.0297 65.8021 32.6078 73.2538 38.6438 77.8802C44.7386 82.5518 51.5501 84.4974 58.5784 81.3977L56.9642 77.7378C51.7015 80.0589 46.4396 78.8157 41.0771 74.7055C35.6558 70.5502 30.3926 63.6274 25.5281 55.2364C15.8202 38.4906 8.07818 16.5683 3.92849 1.46997L0.0715126 2.53003ZM58.5784 81.3977C67.0105 77.6788 71.8281 69.7407 74.1848 61.438C76.543 53.13 76.5481 44.112 75.0621 37.6393C74.3292 34.4469 73.173 31.6022 71.5197 29.82C70.6699 28.904 69.59 28.165 68.2788 27.9379C66.9356 27.7053 65.6301 28.0582 64.4576 28.8122C62.2446 30.235 60.2415 33.2425 58.378 37.6717C56.476 42.1924 54.5849 48.5299 52.7946 57.045L56.709 57.868C58.471 49.4876 60.2988 43.4209 62.065 39.2229C63.8697 34.9334 65.4841 32.9076 66.6208 32.1767C67.1231 31.8538 67.4255 31.8497 67.5962 31.8793C67.7988 31.9144 68.1385 32.0567 68.5872 32.5404C69.5309 33.5576 70.4867 35.586 71.1635 38.5344C72.4972 44.3432 72.5134 52.6777 70.3368 60.3458C68.1588 68.0191 63.8959 74.6807 56.9642 77.7378L58.5784 81.3977ZM52.7946 57.045C47.095 84.1537 47.7225 99.9454 52.3306 110.118C56.9939 120.414 65.5761 124.551 74.1102 128.791L75.8898 125.209C67.1952 120.889 59.9696 117.288 55.9742 108.468C51.9235 99.5253 51.0413 84.8249 56.709 57.868L52.7946 57.045Z"
                fill="#0067DE"
              />
            </svg>
            <h1 className=" text-center  w-[480px] text-[28px] font-[600] text-[#222222]  ">Elevate your professional journey with our company.</h1>
            <img className=" w-[400px] ml-[90px] mt-[35px] h-[300px]" src={team} alt="chatbox" />
            <p className="tracking-[1px] mt-[40px] ml-[8px] w-[470px] font-[400] text-[#4f4f4f] text-center text-[14px]">
              Collaborate with a globally dispersed team and corporation. Explore rewarding employment options with compelling organizations for extended periods. Acquire supplementary expertise through exclusive educational programs. Expand your
              skillset by networking.
            </p>
            <img className=" w-[400px] mt-[3rem] ml-[90px] h-[300px]" src={shakir} alt="Business manager" />
            <h1 className=" text-center  w-[450px] mt-[2rem] text-[48px] font-[600] text-[#222222]  ">You decide what best suits you</h1>
            <ul className="tracking-[1px] ml-[30px] mt-3  font-[400] text-[#4f4f4f] text-left text-[16px]">
              <li className="flex items-center mb-1 w-[450px] justify-between">
                {" "}
                <span className="w-[40px] mb-6">•</span> Uncover compensation packages that align with your expertise and qualifications.
              </li>
              <li className="flex items-center mb-1 w-[450px] justify-between">
                {" "}
                <span className="w-[34px] mb-6">•</span> Partner exclusively with companies that we have confidence in.
              </li>
              <li className="flex items-center mb-1 w-[450px] justify-between">
                {" "}
                <span className="w-[40px] mb-6">•</span> Obtain timely payments in either your local currency, USD, or cryptocurrency.
              </li>
            </ul>
            <img className=" w-[400px] rounded-[50%] ml-[90px] mt-[3rem] h-[300px]" src={table} alt="chatbox" />
            <h1 className=" text-center mt-[20px] ml-[10px] w-[450px] text-[48px] font-[600] text-[#222222]  ">We bring Flexibility to work</h1>
            <ul className="tracking-[1px] mt-3 ml-[25px]  font-[400] text-[#4f4f4f] text-left text-[16px]">
              <li className="flex items-center mb-1 w-[270px] justify-between">
                <svg width="5" height="5" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="currentColor" />
                </svg>
                Reliable ally Career growth
              </li>
              <li className="flex items-center mb-1 w-[190px] justify-between">
                <svg width="5" height="5" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="currentColor" />
                </svg>
                High success rate
              </li>
              <li className="flex items-center mb-1 w-[375px] justify-between">
                <svg width="5" height="5" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="currentColor" />
                </svg>
                Talent matched to ideal opportunities
              </li>
              <li className="flex items-center mb-1 w-[352px] justify-between">
                <svg width="5" height="5" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="currentColor" />
                </svg>
                Expert career advice and guidance
              </li>
              <li className="flex items-center mb-1 w-[265px] justify-between">
                <svg width="5" height="5" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="currentColor" />
                </svg>
                Specialized team building
              </li>
            </ul>
          </div>
        </div>
        <Steps />
        <Footer />
      </div>
    </>
  );
}

export default TechExpert;
