import { NavLink } from "react-router-dom";

function TalentRequestSideBar({ children }) {
  const menuList = [
    {
      path: "/pagefortalentrequest",
      name: "Home",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.25 20.2498V10.8316C20.25 10.7271 20.2282 10.6238 20.1859 10.5282C20.1436 10.4326 20.0818 10.347 20.0045 10.2767L12.504 3.45775C12.3659 3.33223 12.186 3.26269 11.9995 3.2627C11.8129 3.2627 11.633 3.33226 11.4949 3.45778L3.99545 10.2767C3.91814 10.347 3.85637 10.4326 3.8141 10.5282C3.77183 10.6238 3.75 10.7271 3.75 10.8316V20.2498"
            fill="currentColor"
          />
          <path
            d="M20.25 20.2498V10.8316C20.25 10.7271 20.2282 10.6238 20.1859 10.5282C20.1436 10.4326 20.0818 10.347 20.0045 10.2767L12.504 3.45775C12.3659 3.33223 12.186 3.26269 11.9995 3.2627C11.8129 3.2627 11.633 3.33226 11.4949 3.45778L3.99545 10.2767C3.91814 10.347 3.85637 10.4326 3.8141 10.5282C3.77183 10.6238 3.75 10.7271 3.75 10.8316V20.2498"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M1.5 20.25H22.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M14.2495 20.249V14.999C14.2495 14.8001 14.1704 14.6093 14.0298 14.4687C13.8891 14.328 13.6984 14.249 13.4995 14.249H10.4995C10.3005 14.249 10.1098 14.328 9.96912 14.4687C9.82847 14.6093 9.74945 14.8001 9.74945 14.999V20.249"
            fill="white"
          />
          <path
            d="M14.2495 20.249V14.999C14.2495 14.8001 14.1704 14.6093 14.0298 14.4687C13.8891 14.328 13.6984 14.249 13.4995 14.249H10.4995C10.3005 14.249 10.1098 14.328 9.96912 14.4687C9.82847 14.6093 9.74945 14.8001 9.74945 14.999V20.249"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];
  return (
    <>
      <div className=" w-[170px]  fixed  h-[500px] border-r-[1px] border-r-[#F3F3F3]">
        {menuList.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) =>
              isActive ? " items-center text-[18px]  text-left font-[400] flex justify-between w-[300px] mt-[10px] text-[#B6D7A8]" : " items-center text-[18px] mt-[10px]  text-left font-[400] flex justify-between w-[300px] text-[#38761d] "
            }
          >
            <div className=" item-center w-[90px]  justify-between flex">
              <div className="  ">{item.icon}</div>

              <h2 className=" ml-[15px]">{item.name}</h2>
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </>
  );
}

export default TalentRequestSideBar;
