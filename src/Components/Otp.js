
import HeaderForSignup from "./HeaderForSignup";
import { useState } from "react";


function Otp() {
  const [combinedValue, setCombinedValue] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const userId = localStorage.getItem("userId");
  const email = localStorage.getItem("userEmail");

  const handleInputChange = (index, event) => {
    const input = event.target;
    const value = input.value;

    // Allow only single digits
    if (/^\d$/.test(value)) {
      // Move to the next input box if available
      const nextInput = input.nextSibling;
      if (nextInput) {
        nextInput.focus();
      }
    } else {
      // Clear the input if the entered value is not a digit
      input.value = "";
    }
    // Update the combined value state
    const updatedValue = [...combinedValue];
    updatedValue[index] = value;
    setCombinedValue(updatedValue.join(""));

    console.log(combinedValue);
  };
  

  const resendOtp = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
      }),
    };
    const userId = localStorage.getItem("userId"); // Retrieve the id from localStorage
    console.log(userId);
    console.log(requestOptions);
    // setLoading(true); // start progress spinner
    fetch(`http://172.160.249.253:9009/api/Eclat/user/send-otp`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data.id);

        if (data.status === "success") {
          localStorage.removeItem("userId");
          localStorage.setItem("userId", data.data.id);
          setShowAlert(true);

          const redirectUrl = `/signtonetwork`;

          window.location.href = redirectUrl; // Redirect to "/home for applicant" page
        }
      })
      .catch((err) => {
        console.log(err.message);
        // setLoading(false); // stop progress spinner
      });
  };
  // useEffect(() => {
  //   // Set a timeout to hide the alert after 3 seconds (adjust as needed)
  //   const timeout = setTimeout(() => {
  //     setShowAlert(false);
  //   }, 15000); // Clean up the timeout when the component unmounts
  //   return () => clearTimeout(timeout);
  // }, [showAlert]);

  // Function to verify OTP
  const verifyOtp = (userId, combinedValue) => {

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      
    };
    fetch(
      `http://172.160.249.253:9009/api/Eclat/user/${userId}/verify-otp?otp=${combinedValue}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.status === "success") {
          // Handle successful OTP verification, e.g., show another alert
          const redirectUrl = `/createpassword`;

          window.location.href = redirectUrl;
        } else {
          console.log("OTP verification failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <div className=" bg-[#fff] w-[100%] 820xxl:w-[100%]  1xl:w-[100%] h-[150vh]">
        <HeaderForSignup />
        <div className="pt-[10%] 1halfxl:w-[70%] 1halfxl:ml-[20%] 1halfxl:pt-[100px] 820xxl:ml-[60px] 820xxl:w-[105%] 820xxl:h-[150vh] 820xxl:bg-[#fff]  820xxl:pt-[150px] pb-[20px] 1xl:ml-[25%] 5xl:ml-[40%] 1xl:pt-[15%] 4xl:ml-[35%] 6xl:ml-[34%]  3xl:ml-[33%] 3xl:pt-[10%] ml-[30%]">
          <div className="w-[512px]  h-[636px] ">
            <div className=" pt-5  ">
              <h4 className=" text-[30px] 820xxl:w-[650px] 820xxl:ml-[60px] xl:ml-[70px] 1xl:ml-[60px] text-center 5xl:ml-[70px] 6xl:ml-[60px] 2xl:ml-[50px] 4xl:ml-[80px] 3xl:ml-[80px] text-[#1E2757] ">
                Enter Verification Code
              </h4>
              <p className=" w-[320px] 1halfxl:ml-[195px] ml-[100px] 820xxl:w-[650px] 820xxl:ml-[60px] 1xl:ml-[130px] xl:w-[400px] mt-[20px] 5xl:w-[400px] 6xl:w-[400px] 2xl:w-[370px] 3xl:w-[400px] 4xl:w-[400px] text-center text-[#7D90B8] text-[16px] ">
                Enter the 6 digit verification code sent to your email address
              </p>
              <form
                autoComplete="on"
                className="ml-[3rem] 820xxl:w-[650px] mt-[40px] flex justify-between w-[500px]"
                action=""
              >
                {[...Array(6)].map((_, index) => (
                  <input
                    key={index}
                    tabIndex={index + 1} // Set tabIndex to control the focus order
                    required
                    maxLength={1} // Set maximum length to 1
                    className="w-[103px] mt-[11px] mb-[15px] h-[150px] pl-[14px] border-[#DCDDE5] outline-none rounded-[5px] border-[1px]"
                    type="tel"
                    placeholder=""
                    onInput={(event) => handleInputChange(index, event)}
                  />
                ))}
              </form>

              <div className="w-[750px] 820xxl:w-[650px] 820xxl:ml-[180px] ml-[90px]">
                {/* <Link className=" " to="/createpassword"> */}
                <div
                  className="mt-[20px] tracking-[2px] w-[420px] rounded-[8px] h-[50px] bg-[#38761E] text-center pt-[11px] opacity-90 text-[#fff]"
                  onClick={() => verifyOtp(userId, combinedValue)}
                  style={{ cursor: "pointer" }}
                >
                  <h1>Continue</h1>
                </div>
                {/* </Link> */}

                <h3
                  className=" text-[16px] text-[#38761D] mt-[30px] w-[420px] text-center "
                  onClick={resendOtp}
                  style={{ cursor: "pointer" }}
                >
                  Resend OTP
                </h3>

                {showAlert && (
                  <div>
                    <p>Email Sent Successfully</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Otp;
