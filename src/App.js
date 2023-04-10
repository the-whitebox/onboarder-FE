import React from "react";
import "./App.css";
import "./style/General.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Welcome from "./components/pages/Welcome";
import About from "./components/pages/About";
import Step2 from "./components/pages/Step2";
import Step3 from "./components/pages/Step3";
import People from "./components/pages/People";
import WebFont from "webfontloader";
import Profile from "./components/pages/Profile";
import Employment from "./components/pages/Employment";
import EmploymentDetails from "./components/pages/EmploymentDetails";
import PersonalDetails from "./components/pages/PersonalDetails";
import AddNewPeople from "./components/pages/AddNewPeople";
import PrivateRoute from "./helpers/PrivateRoute";
import Step3_2 from "./components/pages/Step3-2";

function App() {
  const token = localStorage.getItem("token");
  React.useEffect(() => {
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
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/step3-2" element={<Step3_2 />} />
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
              <Route path="/step1" element={<Signup />} />
              {/* <Route path="*" element={<Login />} /> */}
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
