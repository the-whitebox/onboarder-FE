import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import "./App.css";
import ForgotPassword from "./components/pages/ForgotPassword";
import ResetPassword from "./components/pages/ResetPassword";
import Welcome from "./components/pages/Welcome";
import About from "./components/pages/About";
import Step1 from "./components/pages/Step1";
import Step2 from "./components/pages/Step2";
import Step3 from "./components/pages/Step3";
import People from "./components/pages/People";
import AddTeammember from "./components/feature/AddTeammember";
import SetAccessLevel from "./components/feature/SetAccessLevel";
import Setpayrates from "./components/feature/Setpayrates";
import Addleaveentitlement from "./components/feature/Addleaveentitlement";
import SetStressProfile from "./components/feature/SetStressProfile";
import SyncPayroll from "./components/feature/SyncPayroll";
import SetStandardHours from "./components/feature/SetStandardHours";
import SetAgreedhours from "./components/feature/SetAgreedhours";
import WebFont from "webfontloader";
import { useEffect } from "react";
import Profile from "./components/pages/Profile";
import Contact from "./components/feature/Contact";
import Employment from "./components/pages/Employment";
import EmploymentDetails from "./components/pages/EmploymentDetails";
import Personal from "./components/pages/Personal";
import PersonalDetails from "./components/pages/PersonalDetails";
import AddNewPeople from "./components/pages/AddNewPeople";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Open Sans"],
      },
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/step1" element={<Step1 />} />
        <Route path="/step2" element={<Step2 />} />
        <Route path="/step3" element={<Step3 />} />
        <Route path="/people" element={<People />}></Route>
        <Route path="/set" element={<SetAccessLevel />}></Route>
        <Route path="/Add" element={<Addleaveentitlement />}></Route>
        <Route path="/stress" element={<SetStressProfile />}></Route>
        <Route path="/Sethours" element={<SetStandardHours />}></Route>
        <Route path="/AddTeam" element={<AddTeammember />}></Route>
        <Route path="/setAgreed" element={<SetAgreedhours />}></Route>
        <Route path="/sync" element={<SyncPayroll />}></Route>

        <Route path="/setpay" element={<Setpayrates />}></Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/employment" element={<Employment />} />
        <Route path="/employment_details" element={<EmploymentDetails />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/personal_details" element={<PersonalDetails />} />
        <Route path="/add" element={<AddNewPeople />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
