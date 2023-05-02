import React from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import WithVerticalMenu from "./WithVerticalMenu";
import Login from "../components/pages/Login";
import Signup from "../components/pages/Signup";
import Step2 from "../components/pages/Step2";
import Step3_1 from "../components/pages/Step3-1";
import Step3_2 from "../components/pages/Step3-2";
import Step3_3 from "../components/pages/Step3-3";
import Step3_4 from "../components/pages/Step3-4";
import Dashboard from "../components/pages/Dashboard";
import Sidebar from "../components/feature/Sidebar";
import AddPeople from "../components/pages/AddPeople";
import AddPeopleManually from "../components/pages/AddPeopleManually";
import PersonalDetails from "../components/pages/PersonalDetails";
import EmploymentDetails from "../components/pages/EmploymentDetails";

function Routing() {
  const token = localStorage.getItem("token");
  return (
    <>
      <Routes>
        <Route
          path="/step2"
          element={
            // <PrivateRoute>
            <Step2 />
            // </PrivateRoute>
          }
        />
        <Route
          path="/step3-1"
          element={
            // <PrivateRoute>
            <Step3_1 />
            // </PrivateRoute>
          }
        />
        <Route
          path="/step3-2"
          element={
            // <PrivateRoute>
            <Step3_2 />
            // </PrivateRoute>
          }
        />
        <Route
          path="/step3-3"
          element={
            // <PrivateRoute>
            <Step3_3 />
            // </PrivateRoute>
          }
        />
        <Route element={<WithVerticalMenu />}>
          <Route
            path="/step3-4"
            element={
              // <PrivateRoute>
              <Step3_4 />
              // </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="/dashboard"
          element={
            // <PrivateRoute>
            <Sidebar>
              <Dashboard />
            </Sidebar>
            // </PrivateRoute>
          }
        />
        <Route
          path="/team-members"
          element={
            // <PrivateRoute>
            <Sidebar>
              <AddPeople />
            </Sidebar>
            // </PrivateRoute>
          }
        />
        <Route
          path="/team-members/add-people-manually"
          element={
            // <PrivateRoute>
            <Sidebar>
              <AddPeopleManually />
            </Sidebar>
            // </PrivateRoute>
          }
        />
        <Route
          path="/my-account"
          element={
            // <PrivateRoute>
            <Sidebar>
              <PersonalDetails />
            </Sidebar>
            // </PrivateRoute>
          }
        />
        <Route
          path="/my-account/employment/details"
          element={
            // <PrivateRoute>
            <Sidebar>
              <EmploymentDetails />
            </Sidebar>
            // </PrivateRoute>
          }
        />
        <Route
          path="*"
          element={
            // <PrivateRoute>
            <Sidebar>
              <Dashboard />
            </Sidebar>
            // </PrivateRoute>
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
