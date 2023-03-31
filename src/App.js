import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./style/General.css";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
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
import ArchiveTeammembers from "./components/feature/ArchiveTeammembers";
import Addlocation from "./components/feature/Addlocation";
import WebFont from "webfontloader";
import { useEffect } from "react";
import Profile from "./components/pages/Profile";
import Contact from "./components/feature/Contact";
import Employment from "./components/pages/Employment";
import EmploymentDetails from "./components/pages/EmploymentDetails";
import PersonalDetails from "./components/pages/PersonalDetails";
import AddNewPeople from "./components/pages/AddNewPeople";
import PrivateRoute from "./helpers/PrivateRoute";

function App() {
  const token = localStorage.getItem("token");
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Open Sans"],
      },
    });
  }, []);
  return (
    <>
      <ToastContainer position="top-right" style={{ zIndex: "9999999" }} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/welcome"
            element={
              <PrivateRoute>
                <Welcome />
              </PrivateRoute>
            }
          />
          <Route
            path="/step1"
            element={
              <PrivateRoute>
                <Step1 />
              </PrivateRoute>
            }
          />
          <Route
            path="/step2"
            element={
              <PrivateRoute>
                <Step2 />
              </PrivateRoute>
            }
          />
          <Route
            path="/step3"
            element={
              <PrivateRoute>
                <Step3 />
              </PrivateRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <PrivateRoute>
                <Contact />
              </PrivateRoute>
            }
          />
          <Route
            path="/employment"
            element={
              <PrivateRoute>
                <Employment />
              </PrivateRoute>
            }
          />
          <Route
            path="/employment_details"
            element={
              <PrivateRoute>
                <EmploymentDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/personal_details"
            element={
              <PrivateRoute>
                <PersonalDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/add"
            element={
              <PrivateRoute>
                <AddNewPeople />
              </PrivateRoute>
            }
          />
          <Route
            path="/new"
            element={
              <PrivateRoute>
                <AddNewPeople />
              </PrivateRoute>
            }
          />
          <Route
            path="/setAccess"
            element={
              <PrivateRoute>
                <SetAccessLevel />
              </PrivateRoute>
            }
          />
          <Route
            path="/people"
            element={
              <PrivateRoute>
                <People />
              </PrivateRoute>
            }
          />
          <Route
            path="*"
            element={
              <PrivateRoute>
                <People />
              </PrivateRoute>
            }
          />

          {token ? (
            <></>
          ) : (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/resetpassword" element={<ResetPassword />} />
              <Route path="*" element={<Login />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
