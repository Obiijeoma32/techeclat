import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Business from "./Components/Business";
import Enterprise from "./Components/Enterprise";
import Jobs from "./Components/Jobs";
import TechExpert from "./Components/TechExpert";
import Dashboard from "./Components/Dashboard";
import FindTalent from "./Components/FindTalent";
import BasicInfo from "./Components/BasicInfo";
import ResourceDetails from "./Components/ResourceDetails";
import SideBar from "./Components/SideBar";
import Eclatjobs from "./Components/EclatJobs";
import HeaderForSignup from "./Components/HeaderForSignup";
import LoginUser from "./Components/LoginUser";
import Jobs2 from "./Components/Jobs2";
import SignUpForEnterprise from "./Components/SignUpForEnterprise";
import FooterEnterprise from "./Components/FooterEnterprise";
import FooterBusiness from "./Components/FooterBusiness";
import SignUpCompany from "./Components/SignUpCompany";
import SignUp2Company from "./Components/SignUp2Company";
import LoginAdmin from "./ComponentAdmin/LoginAdmin";
import Applicant from "./ComponentAdmin/Applicant";
import AdminSideBar from "./ComponentAdmin/AdminSideBar";
import JobsAdmin from "./ComponentAdmin/JobsAdmin";
import Notifications from "./ComponentAdmin/Notifications";
import Recruiter from "./ComponentAdmin/Recruiter";
import Test from "./ComponentAdmin/Test";
import Notification2 from "./ComponentAdmin/Notification2";
import TalentRequest from "./ComponentAdmin/TalentRequest";
import TalentRequest2 from "./ComponentAdmin/TalentRequest2";
import ResourceDetails2 from "./Components/ResourceDetails2";
import ResourceDetails3 from "./Components/ResourceDetails3";
import HomePageForApplicant from "./Components/HomePageForApplicant";
import EditPersona from "./Components/EditPersona";
import ForgotPassword from "./Components/ForgotPassword";
import CreatePassword from "./Components/CreatePassword";
import SignToNetwork from "./Components/SignToNetwork";
import Otp from "./Components/Otp";
import PageForTalentRequest from "./Components/PageForTalentRequest";
import PageForTalentRequest2 from "./Components/PageForTalentRequest2";
import PageForTalentRequest3 from "./Components/PageForTalentRequest3";
import Spinner from "./Components/Spinner";
import "./App.css";

function App() {
  return (
    <>
      <Helmet>
        <title>Tech Eclat</title>
        <meta name="Tech-Eclat" content="Helmet application" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
          <Route path="/business" element={<Business />} />
          <Route path="/spinner" element={<Spinner/>}/>
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/techexpert" element={<TechExpert />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs2" element={<Jobs2 />} />
          <Route path="/findtalent" element={<FindTalent />} />
          <Route path="/loginuser" element={<LoginUser />} />
          <Route path="/loginadmin" element={<LoginAdmin />} />
          <Route path="/signupforenterprise" element={<SignUpForEnterprise />} />
          <Route path="/signup2company" element={<SignUp2Company />} />
          <Route path="/signupcompany" element={<SignUpCompany />} />
          <Route path="/footerenterprise" element={<FooterEnterprise />} />
          <Route path="/footerbusiness" element={<FooterBusiness />} />
          <Route path="/eclatjobs" element={<Eclatjobs />} />
          <Route path="/headerforsignup" element={<HeaderForSignup />} />
          <Route path="/sidebar" element={<SideBar />} />
          <Route path="/eclatjobs/basicinfo" element={<BasicInfo />} />
          <Route path="/resourcedetails" element={<ResourceDetails />} />
          <Route path="/adminsidebar" element={<AdminSideBar />} />
          <Route path="/applicant" element={<Applicant />} />
          <Route path="/jobsadmin" element={<JobsAdmin />} />
          <Route path="/notification" element={<Notifications />} />
          <Route path="/recruiter" element={<Recruiter />} />
          <Route path="/talentrequest" element={<TalentRequest />} />
          <Route path="/test" element={<Test />} />
          <Route path="/notification/notification2" element={<Notification2 />} />
          <Route path="/talentrequest/talentrequest2" element={<TalentRequest2 />} />
          <Route path="/resourcedetails/resourcesdetails2" element={<ResourceDetails2 />} />
          <Route path="/resourcedetails/resourcesdetails2/resourcedetails3" element={<ResourceDetails3 />} />
          <Route path="/pagefortalentrequest" element={<PageForTalentRequest />} />
          <Route path="/homeforapplicant" element={<HomePageForApplicant />} />
          <Route path="/editpersona2" element={<EditPersona />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/createpassword" element={<CreatePassword />} />
          <Route path="/signintonetwork" element={<SignToNetwork />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/pagefortalentrequest/pagefortalentrequest2" element={<PageForTalentRequest2 />} />
          <Route path="/pagefortalentrequest/pagefortalentrequest2/pagefortalentrequest3" element={<PageForTalentRequest3 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
