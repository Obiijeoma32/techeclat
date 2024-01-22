import { Link } from "react-router-dom";
import AdminSideBar from "./AdminSideBar";

function Notifications() {
  return (
    <>
      <div className="bg-[#fff] w-[100%] h-[160vh] ">
        <AdminSideBar />
        <div className=" ml-[18rem] pt-[30px] ">
          <h1 className=" text-[#38761D] text-[30px] font-[300px] ">Notification</h1>
          <div className=" ml-[10px] border-[#E3E7EB] border-[1px] h-[169px] mt-[40px] rounded-[5px] w-[920px] 5xl:w-[2000px] 6xl:w-[1300px] 4xl:w-[1500px]">
            <h3 className=" mt-[15px] pb-[10px] pl-[18px] text-[18px] text-[#38761D] font-[400] border-[#E3E7EB] border-b-[1px] w-[920px] 6xl:w-[1300px] 5xl:w-[2000px]">Today</h3>
            <h4 className="text-[#4D708D] text-[14px] mt-[30px] ml-[18px] opacity-80">No new notifications</h4>
          </div>
          <div className=" ml-[10px] border-[#E3E7EB] border-[1px] h-[490px] mt-[40px] rounded-[5px] w-[920px] 5xl:w-[2000px] 6xl:w-[1300px] 4xl:w-[1500px]">
            <h3 className=" mt-[15px] pb-[10px] pl-[18px] text-[18px] text-[#38761D] font-[400] border-[#E3E7EB] border-b-[1px] w-[920px] 5xl:w-[2000px] 6xl:w-[1300px] 4xl:w-[1500px]">Earlier</h3>
            <div className="  h-[65px] border-[#E3E7EB] border-b-[1px] w-[920px] 5xl:w-[2000px] 6xl:w-[1300px] 4xl:w-[1500px]">
              <div className=" text-[14px] text-[#BEC2D0] font-[400] mt-[23px] w-[920px] flex justify-evenly 5xl:w-[1950px] 5xl:justify-between 5xl:ml-[20px] ">
                <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  to="/notification/notification2"
                >
                  <div className=" cursor-pointer bg-[#BEC2D0] w-[40px] h-[40px] rounded-[50%] items-center  flex justify-around">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.742 4.90039H4.25865C2.83365 4.90039 1.66699 6.06705 1.66699 7.49205V16.9587C1.66699 18.1671 2.53366 18.6837 3.59199 18.092L6.86698 16.267C7.21698 16.0754 7.78366 16.0754 8.12533 16.267L11.4003 18.092C12.4587 18.6837 13.3253 18.1671 13.3253 16.9587V7.49205C13.3337 6.06705 12.167 4.90039 10.742 4.90039Z"
                        stroke="#38761D"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.3337 7.49205V16.9587C13.3337 18.1671 12.467 18.6754 11.4087 18.092L8.13367 16.267C7.78367 16.0754 7.21698 16.0754 6.86698 16.267L3.59199 18.092C2.53366 18.6754 1.66699 18.1671 1.66699 16.9587V7.49205C1.66699 6.06705 2.83365 4.90039 4.25865 4.90039H10.742C12.167 4.90039 13.3337 6.06705 13.3337 7.49205Z"
                        stroke="#38761D"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        opacity="0.4"
                        d="M18.3337 4.25865V13.7253C18.3337 14.9337 17.467 15.442 16.4087 14.8586L13.3337 13.142V7.49198C13.3337 6.06698 12.167 4.90033 10.742 4.90033H6.66699V4.25865C6.66699 2.83365 7.83365 1.66699 9.25865 1.66699H15.742C17.167 1.66699 18.3337 2.83365 18.3337 4.25865Z"
                        stroke="#38761D"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
                <h4 className="w-[600px]">A job that you submitted a proposal for, Need a new design of the website home page, has been closed or has expired. Your proposal has been archived.</h4>
                <h4 className="mt-[10px]">22nd September 2020</h4>
              </div>
            </div>
            <div className="  h-[65px] border-[#E3E7EB] border-b-[1px] w-[920px] 5xl:w-[2000px] 6xl:w-[1300px] 4xl:w-[1500px]">
              <div className=" text-[14px] text-[#BEC2D0] font-[400] mt-[23px] w-[920px] flex justify-evenly 5xl:w-[1950px] 5xl:justify-between 5xl:ml-[20px] ">
                <div className=" bg-[#BEC2D0] w-[40px] h-[40px] rounded-[50%] items-center  flex justify-around">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.742 4.90039H4.25865C2.83365 4.90039 1.66699 6.06705 1.66699 7.49205V16.9587C1.66699 18.1671 2.53366 18.6837 3.59199 18.092L6.86698 16.267C7.21698 16.0754 7.78366 16.0754 8.12533 16.267L11.4003 18.092C12.4587 18.6837 13.3253 18.1671 13.3253 16.9587V7.49205C13.3337 6.06705 12.167 4.90039 10.742 4.90039Z"
                      stroke="#38761D"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.3337 7.49205V16.9587C13.3337 18.1671 12.467 18.6754 11.4087 18.092L8.13367 16.267C7.78367 16.0754 7.21698 16.0754 6.86698 16.267L3.59199 18.092C2.53366 18.6754 1.66699 18.1671 1.66699 16.9587V7.49205C1.66699 6.06705 2.83365 4.90039 4.25865 4.90039H10.742C12.167 4.90039 13.3337 6.06705 13.3337 7.49205Z"
                      stroke="#38761D"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      opacity="0.4"
                      d="M18.3337 4.25865V13.7253C18.3337 14.9337 17.467 15.442 16.4087 14.8586L13.3337 13.142V7.49198C13.3337 6.06698 12.167 4.90033 10.742 4.90033H6.66699V4.25865C6.66699 2.83365 7.83365 1.66699 9.25865 1.66699H15.742C17.167 1.66699 18.3337 2.83365 18.3337 4.25865Z"
                      stroke="#38761D"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h4 className="w-[600px]">A job that you submitted a proposal for, Need a new design of the website home page, has been closed or has expired. Your proposal has been archived.</h4>
                <h4 className="mt-[10px]">22nd September 2020</h4>
              </div>
            </div>
            <div className="  h-[65px] border-[#E3E7EB] border-b-[1px] w-[920px] 5xl:w-[2000px] 6xl:w-[1300px] 4xl:w-[1500px]">
              <div className=" text-[14px] text-[#BEC2D0] font-[400] mt-[23px] w-[920px] flex justify-evenly 5xl:w-[1950px] 5xl:justify-between 5xl:ml-[20px]  ">
                <div className=" bg-[#BEC2D0] w-[40px] h-[40px] rounded-[50%] items-center  flex justify-around">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.742 4.90039H4.25865C2.83365 4.90039 1.66699 6.06705 1.66699 7.49205V16.9587C1.66699 18.1671 2.53366 18.6837 3.59199 18.092L6.86698 16.267C7.21698 16.0754 7.78366 16.0754 8.12533 16.267L11.4003 18.092C12.4587 18.6837 13.3253 18.1671 13.3253 16.9587V7.49205C13.3337 6.06705 12.167 4.90039 10.742 4.90039Z"
                      stroke="#38761D"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.3337 7.49205V16.9587C13.3337 18.1671 12.467 18.6754 11.4087 18.092L8.13367 16.267C7.78367 16.0754 7.21698 16.0754 6.86698 16.267L3.59199 18.092C2.53366 18.6754 1.66699 18.1671 1.66699 16.9587V7.49205C1.66699 6.06705 2.83365 4.90039 4.25865 4.90039H10.742C12.167 4.90039 13.3337 6.06705 13.3337 7.49205Z"
                      stroke="#38761D"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      opacity="0.4"
                      d="M18.3337 4.25865V13.7253C18.3337 14.9337 17.467 15.442 16.4087 14.8586L13.3337 13.142V7.49198C13.3337 6.06698 12.167 4.90033 10.742 4.90033H6.66699V4.25865C6.66699 2.83365 7.83365 1.66699 9.25865 1.66699H15.742C17.167 1.66699 18.3337 2.83365 18.3337 4.25865Z"
                      stroke="#38761D"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h4 className="w-[600px]">A job that you submitted a proposal for, Need a new design of the website home page, has been closed or has expired. Your proposal has been archived.</h4>
                <h4 className="mt-[10px]">22nd September 2020</h4>
              </div>
            </div>
            <div className="  h-[65px] border-[#E3E7EB] border-b-[1px] w-[920px] 5xl:w-[2000px] 6xl:w-[1300px] 4xl:w-[1500px]">
              <div className=" text-[14px] text-[#BEC2D0] font-[400] mt-[23px] w-[920px] flex justify-evenly 5xl:w-[1950px] 5xl:justify-between 5xl:ml-[20px] ">
                <div className=" bg-[#BEC2D0] w-[40px] h-[40px] rounded-[50%] items-center  flex justify-around">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.742 4.90039H4.25865C2.83365 4.90039 1.66699 6.06705 1.66699 7.49205V16.9587C1.66699 18.1671 2.53366 18.6837 3.59199 18.092L6.86698 16.267C7.21698 16.0754 7.78366 16.0754 8.12533 16.267L11.4003 18.092C12.4587 18.6837 13.3253 18.1671 13.3253 16.9587V7.49205C13.3337 6.06705 12.167 4.90039 10.742 4.90039Z"
                      stroke="#38761D"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.3337 7.49205V16.9587C13.3337 18.1671 12.467 18.6754 11.4087 18.092L8.13367 16.267C7.78367 16.0754 7.21698 16.0754 6.86698 16.267L3.59199 18.092C2.53366 18.6754 1.66699 18.1671 1.66699 16.9587V7.49205C1.66699 6.06705 2.83365 4.90039 4.25865 4.90039H10.742C12.167 4.90039 13.3337 6.06705 13.3337 7.49205Z"
                      stroke="#38761D"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      opacity="0.4"
                      d="M18.3337 4.25865V13.7253C18.3337 14.9337 17.467 15.442 16.4087 14.8586L13.3337 13.142V7.49198C13.3337 6.06698 12.167 4.90033 10.742 4.90033H6.66699V4.25865C6.66699 2.83365 7.83365 1.66699 9.25865 1.66699H15.742C17.167 1.66699 18.3337 2.83365 18.3337 4.25865Z"
                      stroke="#38761D"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h4 className="w-[600px]">A job that you submitted a proposal for, Need a new design of the website home page, has been closed or has expired. Your proposal has been archived.</h4>
                <h4 className="mt-[10px]">22nd September 2020</h4>
              </div>
            </div>
            <div className="  h-[65px]  w-[920px]">
              <div className=" text-[14px] text-[#BEC2D0] font-[400] mt-[23px] w-[920px] flex justify-evenly 5xl:w-[1950px] 5xl:justify-between 5xl:ml-[20px] ">
                <div className=" bg-[#BEC2D0] w-[40px] h-[40px] rounded-[50%] items-center  flex justify-around">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M10.742 4.90039H4.25865C2.83365 4.90039 1.66699 6.06705 1.66699 7.49205V16.9587C1.66699 18.1671 2.53366 18.6837 3.59199 18.092L6.86698 16.267C7.21698 16.0754 7.78366 16.0754 8.12533 16.267L11.4003 18.092C12.4587 18.6837 13.3253 18.1671 13.3253 16.9587V7.49205C13.3337 6.06705 12.167 4.90039 10.742 4.90039Z"
                      stroke="#38761D"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.3337 7.49205V16.9587C13.3337 18.1671 12.467 18.6754 11.4087 18.092L8.13367 16.267C7.78367 16.0754 7.21698 16.0754 6.86698 16.267L3.59199 18.092C2.53366 18.6754 1.66699 18.1671 1.66699 16.9587V7.49205C1.66699 6.06705 2.83365 4.90039 4.25865 4.90039H10.742C12.167 4.90039 13.3337 6.06705 13.3337 7.49205Z"
                      stroke="#38761D"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      opacity="0.4"
                      d="M18.3337 4.25865V13.7253C18.3337 14.9337 17.467 15.442 16.4087 14.8586L13.3337 13.142V7.49198C13.3337 6.06698 12.167 4.90033 10.742 4.90033H6.66699V4.25865C6.66699 2.83365 7.83365 1.66699 9.25865 1.66699H15.742C17.167 1.66699 18.3337 2.83365 18.3337 4.25865Z"
                      stroke="#38761D"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h4 className="w-[600px]">A job that you submitted a proposal for, Need a new design of the website home page, has been closed or has expired. Your proposal has been archived.</h4>
                <h4 className="mt-[10px]">22nd September 2020</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notifications;
