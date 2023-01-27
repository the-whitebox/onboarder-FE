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
import SetAccessLevel from "./components/feature/SetAccessLevel";
import Addleaveentitlement from "./components/feature/Addleaveentitlement";
import SetStressProfile from "./components/feature/SetStressProfile";
import SyncPayroll from "./components/feature/SyncPayroll";
import WebFont from "webfontloader";
import { useEffect } from "react";

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
        <Route path="/sync" element={<SyncPayroll />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
