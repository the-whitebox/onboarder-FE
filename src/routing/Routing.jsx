import React from "react";
import { Routes, Route } from "react-router-dom";
import WebFont from "webfontloader";
import PrivateRoute from "./PrivateRoute";
import WithVerticalMenu from "./WithVerticalMenu";
import Login from "../components/pages/Login";
import Signup from "../components/pages/Signup";
import Step2 from "../components/pages/Step2";
import Step3_1 from "../components/pages/Step3-1";
import Step3_2 from "../components/pages/Step3-2";
import Step3_3 from "../components/pages/Step3-3";
import Step3_4 from "../components/pages/Step3-4";
import People from "../components/pages/People";
import Profile from "../components/pages/Profile";
import Employment from "../components/pages/Employment";
import PersonalDetails from "../components/pages/PersonalDetails";
import EmploymentDetails from "../components/pages/EmploymentDetails";
import Dashboard from "../components/pages/Dashboard";
import Sidebar from "../components/feature/Sidebar";

function Routing() {
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
      <Routes>
        <Route
          path="/step2"
          element={
            <PrivateRoute>
              <Step2 />
            </PrivateRoute>
          }
        />
        <Route
          path="/step3-1"
          element={
            <PrivateRoute>
              <Step3_1 />
            </PrivateRoute>
          }
        />
        <Route
          path="/step3-2"
          element={
            <PrivateRoute>
              <Step3_2 />
            </PrivateRoute>
          }
        />
        <Route
          path="/step3-3"
          element={
            <PrivateRoute>
              <Step3_3 />
            </PrivateRoute>
          }
        />
        <Route element={<WithVerticalMenu />}>
          <Route
            path="/step3-4"
            element={
              <PrivateRoute>
                <Step3_4 />
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
            path="/employment/details"
            element={
              <PrivateRoute>
                <EmploymentDetails />
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
            path="/personal/details"
            element={
              <PrivateRoute>
                <PersonalDetails />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="/people"
          element={
            <PrivateRoute>
              <People />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Sidebar>
                <Dashboard />
              </Sidebar>
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
            <Route path="*" element={<Login />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default Routing;
