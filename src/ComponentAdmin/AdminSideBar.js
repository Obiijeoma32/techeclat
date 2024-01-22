import { NavLink } from "react-router-dom";

function AdminSideBar({ children }) {
  const adminMenu = [
    {
      path: "/applicant",
      name: "Applicant",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 17.5C17.866 17.5 21 14.366 21 10.5C21 6.63401 17.866 3.5 14 3.5C10.134 3.5 7 6.63401 7 10.5C7 14.366 10.134 17.5 14 17.5Z" fill="" />
          <path d="M14 17.5C17.866 17.5 21 14.366 21 10.5C21 6.63401 17.866 3.5 14 3.5C10.134 3.5 7 6.63401 7 10.5C7 14.366 10.134 17.5 14 17.5Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" />
          <path
            d="M3.38965 23.624C4.46542 21.7619 6.01226 20.2158 7.87477 19.1408C9.73729 18.0659 11.8499 17.5 14.0004 17.5C16.1508 17.5 18.2634 18.066 20.1259 19.1409C21.9884 20.2159 23.5352 21.7621 24.6109 23.6242"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      path: "/recruiter",
      name: "Recruiter",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.625 17.5C12.7661 17.5 15.3125 14.9536 15.3125 11.8125C15.3125 8.67138 12.7661 6.125 9.625 6.125C6.48388 6.125 3.9375 8.67138 3.9375 11.8125C3.9375 14.9536 6.48388 17.5 9.625 17.5Z" fill="" />
          <path
            d="M9.625 17.5C12.7661 17.5 15.3125 14.9536 15.3125 11.8125C15.3125 8.67138 12.7661 6.125 9.625 6.125C6.48388 6.125 3.9375 8.67138 3.9375 11.8125C3.9375 14.9536 6.48388 17.5 9.625 17.5Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeMiterlimit="10"
          />
          <path
            d="M16.998 6.33718C17.7803 6.11678 18.6007 6.06657 19.4041 6.18994C20.2074 6.3133 20.9749 6.60738 21.655 7.05237C22.3351 7.49735 22.9119 8.08291 23.3466 8.7696C23.7814 9.45628 24.0639 10.2282 24.1752 11.0332C24.2865 11.8383 24.224 12.6579 23.9918 13.4368C23.7597 14.2156 23.3634 14.9357 22.8295 15.5485C22.2957 16.1613 21.6367 16.6526 20.897 16.9893C20.1573 17.326 19.354 17.5002 18.5413 17.5003"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.75 21.5903C2.63827 20.3268 3.81751 19.2955 5.18815 18.5836C6.55879 17.8717 8.0806 17.5001 9.62509 17.5C11.1696 17.4999 12.6914 17.8715 14.0621 18.5833C15.4328 19.2951 16.6121 20.3262 17.5005 21.5897"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M18.541 17.5C20.0857 17.4989 21.6078 17.87 22.9786 18.5819C24.3494 19.2938 25.5285 20.3255 26.416 21.5897" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      path: "/notification",
      name: "Notification ",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.14762 11.3749C6.14617 10.3372 6.35013 9.30943 6.74774 8.35088C7.14535 7.39233 7.72875 6.52196 8.46431 5.78993C9.19987 5.05791 10.073 4.4787 11.0335 4.08571C11.9939 3.69272 13.0227 3.49371 14.0604 3.50015C18.3905 3.53234 21.8541 7.13155 21.8541 11.4738V12.2499C21.8541 16.1673 22.6737 18.4404 23.3955 19.6829C23.4733 19.8156 23.5146 19.9665 23.5155 20.1204C23.5163 20.2742 23.4765 20.4256 23.4002 20.5591C23.3238 20.6927 23.2136 20.8038 23.0807 20.8812C22.9477 20.9586 22.7967 20.9995 22.6428 20.9999H5.358C5.20413 20.9995 5.05309 20.9586 4.92011 20.8812C4.78713 20.8038 4.67692 20.6926 4.60059 20.559C4.52426 20.4254 4.48451 20.2741 4.48536 20.1202C4.48621 19.9663 4.52763 19.8154 4.60543 19.6827C5.32766 18.4402 6.14762 16.1671 6.14762 12.2499L6.14762 11.3749Z"
            fill=""
          />
          <path
            d="M6.14762 11.3749C6.14617 10.3372 6.35013 9.30943 6.74774 8.35088C7.14535 7.39233 7.72875 6.52196 8.46431 5.78993C9.19987 5.05791 10.073 4.4787 11.0335 4.08571C11.9939 3.69272 13.0227 3.49371 14.0604 3.50015C18.3905 3.53234 21.8541 7.13155 21.8541 11.4738V12.2499C21.8541 16.1673 22.6737 18.4404 23.3955 19.6829C23.4733 19.8156 23.5146 19.9665 23.5155 20.1204C23.5163 20.2742 23.4765 20.4256 23.4002 20.5591C23.3238 20.6927 23.2136 20.8038 23.0807 20.8812C22.9477 20.9586 22.7967 20.9995 22.6428 20.9999H5.358C5.20413 20.9995 5.05309 20.9586 4.92011 20.8812C4.78713 20.8038 4.67692 20.6926 4.60059 20.559C4.52426 20.4254 4.48451 20.2741 4.48536 20.1202C4.48621 19.9663 4.52763 19.8154 4.60543 19.6827C5.32766 18.4402 6.14762 16.1671 6.14762 12.2499L6.14762 11.3749Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.5 21V21.875C10.5 22.8033 10.8687 23.6935 11.5251 24.3499C12.1815 25.0063 13.0717 25.375 14 25.375C14.9283 25.375 15.8185 25.0063 16.4749 24.3499C17.1313 23.6935 17.5 22.8033 17.5 21.875V21"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      path: "/jobsadmin",
      name: "Jobs",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.0001 16.6254C10.314 16.6312 6.69181 15.6621 3.50098 13.8164V22.7504C3.50098 22.8653 3.52361 22.9791 3.56758 23.0852C3.61155 23.1914 3.676 23.2878 3.75726 23.3691C3.83851 23.4503 3.93497 23.5148 4.04113 23.5588C4.14729 23.6027 4.26107 23.6254 4.37598 23.6254H23.626C23.7409 23.6254 23.8547 23.6027 23.9608 23.5588C24.067 23.5148 24.1634 23.4503 24.2447 23.3691C24.3259 23.2878 24.3904 23.1914 24.4344 23.0852C24.4783 22.9791 24.501 22.8653 24.501 22.7504V13.8154C21.3097 15.6617 17.687 16.6312 14.0001 16.6254Z"
            fill=""
          />
          <path
            d="M23.626 7.875H4.37598C3.89273 7.875 3.50098 8.26675 3.50098 8.75V22.75C3.50098 23.2333 3.89273 23.625 4.37598 23.625H23.626C24.1092 23.625 24.501 23.2333 24.501 22.75V8.75C24.501 8.26675 24.1092 7.875 23.626 7.875Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.375 7.875V6.125C18.375 5.66087 18.1906 5.21575 17.8624 4.88756C17.5342 4.55937 17.0891 4.375 16.625 4.375H11.375C10.9109 4.375 10.4658 4.55937 10.1376 4.88756C9.80937 5.21575 9.625 5.66087 9.625 6.125V7.875"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M24.5011 13.8154C21.3099 15.6617 17.6871 16.6312 14.0003 16.6254C10.314 16.6312 6.69184 15.6621 3.50098 13.8164" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12.6875 13.125H15.3125" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      path: "/talentrequest",
      name: "Talent Request",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.375 19.25C13.308 19.25 14.875 17.683 14.875 15.75C14.875 13.817 13.308 12.25 11.375 12.25C9.442 12.25 7.875 13.817 7.875 15.75C7.875 17.683 9.442 19.25 11.375 19.25Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            opacity="0.2"
            d="M7.875 15.75C7.875 15.0578 8.08027 14.3811 8.46486 13.8055C8.84944 13.2299 9.39607 12.7813 10.0356 12.5164C10.6751 12.2515 11.3789 12.1822 12.0578 12.3173C12.7367 12.4523 13.3604 12.7856 13.8499 13.2751C14.3394 13.7646 14.6727 14.3883 14.8077 15.0672C14.9428 15.7461 14.8735 16.4499 14.6086 17.0894C14.3437 17.7289 13.8951 18.2756 13.3195 18.6601C12.7439 19.0447 12.0672 19.25 11.375 19.25H21V8.75H7V15.75H7.875Z"
            fill="white"
          />
          <path
            d="M5.83949 22.7499C6.33661 21.7026 7.12061 20.8179 8.10044 20.1984C9.08028 19.5788 10.2157 19.25 11.375 19.25C12.5343 19.25 13.6697 19.5788 14.6496 20.1984C15.6294 20.8179 16.4134 21.7026 16.9105 22.7499L23.625 22.75C23.7399 22.75 23.8537 22.7274 23.9598 22.6834C24.066 22.6394 24.1625 22.575 24.2437 22.4937C24.325 22.4125 24.3894 22.316 24.4334 22.2099C24.4774 22.1037 24.5 21.9899 24.5 21.875V6.125C24.5 5.89294 24.4078 5.67038 24.2437 5.50628C24.0796 5.34219 23.8571 5.25 23.625 5.25H4.375C4.14294 5.25 3.92038 5.34219 3.75628 5.50628C3.59219 5.67038 3.5 5.89294 3.5 6.125V21.8751C3.5 21.99 3.52263 22.1038 3.56661 22.2099C3.61058 22.3161 3.67503 22.4125 3.75629 22.4938C3.83754 22.575 3.934 22.6395 4.04016 22.6834C4.14632 22.7274 4.2601 22.75 4.375 22.75L5.83949 22.7499Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M19.25 19.25H21V8.75H7V10.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      path: "/test",
      name: "Test",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" d="M14 17.5H10.5V14L18.375 6.125L21.875 9.625L14 17.5Z" fill="" />
          <path d="M14 17.5H10.5V14L21 3.5L24.5 7L14 17.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18.375 6.125L21.875 9.625" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M23.625 13.125V22.75C23.625 22.9821 23.5328 23.2046 23.3687 23.3687C23.2046 23.5328 22.9821 23.625 22.75 23.625H5.25C5.01794 23.625 4.79538 23.5328 4.63128 23.3687C4.46719 23.2046 4.375 22.9821 4.375 22.75V5.25C4.375 5.01794 4.46719 4.79538 4.63128 4.63128C4.79538 4.46719 5.01794 4.375 5.25 4.375H14.875"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <div className="w-[260px] pt-[150px] fixed pl-[39px] h-[100vh] bg-[#38761D] opacity-90">
        {adminMenu.map((item, index) => (
          <NavLink
            onClick={() => {
              window.scrollTo(0, 0);
            }}
            className={({ isActive }) => (isActive ? " text-[#fff]" : " text-[#fff] opacity-60 ")}
            to={item.path}
            key={index}
          >
            <div className="flex mb-[32px]  items-center w-[120px]  ">
              <span>{item.icon}</span>
              <h2 className=" text-left ml-[17px] text-[18px] whitespace-nowrap">{item.name}</h2>
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </>
  );
}

export default AdminSideBar;