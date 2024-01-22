import { useState } from "react";
import { Link } from "react-router-dom";

function LoginAdmin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleRememberMeChange(event) {
    setRememberMe(event.target.checked);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (rememberMe) {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("username");
      localStorage.removeItem("password");
    }
  }

   
   const handleLogin = async () => {
     const requestOptions = {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
         email: username,
         password: password,
       }),
     };

     console.log(requestOptions);
     // setLoading(true); // start progress spinner
     fetch(
       `http://nubeero-deployment-server.uksouth.cloudapp.azure.com:9009/api/Eclat/admin/login`,
       requestOptions
     )
       .then((response) => response.json())
       .then((data) => {
         console.log(data);
       

         if (data.message === "login successful"){
           const redirectUrl = `/applicant`;

              window.location.href = redirectUrl; // Redirect to "/resourcedetails" page
         }

        //  if (data.status === "success") {
        //    localStorage.setItem("userId", data.data.id); // Save the id to localStorage

        //    const redirectUrl = `/homeforapplicant`;

        //    window.location.href = redirectUrl; // Redirect to "/resourcedetails" page
        //  }
       })
       .catch((err) => {
         console.log(err.message);
         // setLoading(false); // stop progress spinner
       });
   };
  return (
    <>
      <div className=" bg-[#fff]  w-[100%] h-[150vh]">
        <div className="pt-[8%] pb-[20px] 3xxl:ml-[10px] 1halfxl:ml-[30%] ml-[30%] 5xl:ml-[40%] 4xl:ml-[37%]">
          <h2 className=" 3xxl:ml-[30px] 1halfxl:ml-[90px] text-[#38761D] 3xxl:whitespace-nowrap text-[36px] text-left ml-[90px] mb-[50px] font-[600] ">Admin Dashboard</h2>
          <div className=" bg-white 3xxl:w-[390px] 1halfxl:w-[512px] rounded-[20px] shadow-xl  shadow-[rgba(0, 0, 0, 0.1)] w-[512px]  h-[640px] ">
            <div className=" pt-5 ">
              <h1 className=" text-[30px]  text-center text-[#2F2E2E] font-[600] opacity-90">Log In</h1>
              <p className=" pt-4  text-[14px] text-center text-[#0A0A0A] opacity-40">
                Don't have an account yet?{" "}
                <Link className="text-[#38761D]" to="">
                  Create an account
                </Link>
              </p>
              <div className=" w-[420px] 3xxl:w-[300px] 1halfxl:w-[420px]  mt-[30px] mb-[20px] h-[50px]  border-[#565758] border-opacity-[16%] ml-[50px]  outline-none rounded-[2px]  border-[1px] ">
                <div className=" w-[230px] 1halfxl:w-[230px] 1halfxl:ml-[90px] ml-[90px] 3xxl:ml-[30px] h-[50px] flex items-center justify-evenly">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22.5006 12.2336C22.5006 11.3702 22.4291 10.7402 22.2744 10.0869H12.2148V13.9835H18.1196C18.0006 14.9519 17.3577 16.4102 15.9291 17.3902L15.909 17.5207L19.0897 19.9354L19.3101 19.9569C21.3339 18.1253 22.5006 15.4302 22.5006 12.2336Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12.214 22.4996C15.1068 22.4996 17.5354 21.5662 19.3092 19.9562L15.9283 17.3894C15.0235 18.0078 13.8092 18.4395 12.214 18.4395C9.38069 18.4395 6.97596 16.6079 6.11874 14.0762L5.99309 14.0866L2.68583 16.595L2.64258 16.7128C4.40446 20.1428 8.02349 22.4996 12.214 22.4996Z"
                      fill="#34A853"
                    />
                    <path
                      d="M6.12096 14.0764C5.89476 13.4231 5.76387 12.7231 5.76387 11.9998C5.76387 11.2764 5.89477 10.5764 6.10905 9.9231L6.10306 9.78397L2.75435 7.23535L2.64479 7.28643C1.91862 8.70975 1.50195 10.3081 1.50195 11.9998C1.50195 13.6915 1.91862 15.2897 2.64479 16.7131L6.12096 14.0764Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12.214 5.55997C14.2259 5.55997 15.583 6.41164 16.3569 7.12335L19.3807 4.23C17.5236 2.53834 15.1069 1.5 12.214 1.5C8.02357 1.5 4.40447 3.85665 2.64258 7.28662L6.10686 9.92332C6.97599 7.39166 9.38077 5.55997 12.214 5.55997Z"
                      fill="#EB4335"
                    />
                  </svg>
                  <h3 className=" text-[#181819] text-[14px] ">Sign up with Google</h3>
                </div>
              </div>
              <div className="w-[466px] 3xxl:w-[350px] 1halfxl:w-[466px] rounded-[4px] mt-[16px] items-center flex justify-between">
                <h3 className=" w-[200px] 3xxl:w-[150px] 1halfxl:w-[200px] border-[1px] h-[0px] ml-[50px] border-[#E6E7E9] ">{/* intentional break */}</h3>
                <h4 className=" text-[#181819] m-[6px] text-opacity-[42%] text-[14px]">OR</h4>
                <h3 className=" w-[200px] border-[1px] 1halfxl:w-[200px] 3xxl:w-[150px] h-[0px] border-[#E6E7E9] ">{/* intentional break */}</h3>
              </div>
              <form onSubmit={handleSubmit} autoComplete="on" className="ml-[3rem] mt-[33px]" action="">
                <label className=" text-[14px] text-[#181819] text-opacity-[90%]  " htmlFor="Username">
                  Username
                </label>
                <br />
                <input
                  required
                  className="3xxl:w-[300px] mt-[8px] 1halfxl:w-[420px] w-[420px] border-[#565758] border-opacity-[16%] mb-[20px] h-[50px] pl-[14px] bg-[#fff] outline-none rounded-[2px]  border-[1px]  "
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                />
                <br />
                <div className=" w-[420px] 3xxl:w-[300px] 1halfxl:w-[420px] flex justify-between items-center">
                  <label className=" text-[14px] text-[#181819] text-opacity-[90%] pb-[8px] " htmlFor="Password">
                    Password
                  </label>
                  <label className=" text-[14px] text-[#38761D] w-[140px] items-center flex justify-evenly text-opacity-[90%] pb-[8px] ">
                    Remember me
                    <input className=" w-[13px] h-[13px] border-[#38761D]" type="checkbox" checked={rememberMe} onChange={handleRememberMeChange} />
                  </label>
                </div>
                <input
                  required
                  className="3xxl:w-[300px] w-[420px] 1halfxl:w-[420px] border-[#565758] border-opacity-[16%] mb-[20px] h-[50px] pl-[14px] bg-[#fff] outline-none rounded-[2px]  border-[1px]  "
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <br />
                <div className="w-[160px] flex justify-between items-center">
                  <input className=" w-[13.5px] h-[13.5px] border-[#919294]" type="checkbox" required />
                  <label className=" text-[14px] text-[#181819] text-opacity-[90%] " htmlFor="keep">
                    Keep me logged in
                  </label>
                </div>
                {/* <Link
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className=" "
                  to="/applicant"
                > */}
                  <div className="mt-[35px] 3xxl:w-[300px] 1halfxl:w-[420px] tracking-[2px] w-[420px] rounded-[2px] h-[50px] bg-[#38761D] text-center pt-[11px] opacity-90 text-[#fff]" onClick={handleLogin}>
                    <h1>SUBMIT</h1>
                  </div>
                {/* </Link> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginAdmin;
