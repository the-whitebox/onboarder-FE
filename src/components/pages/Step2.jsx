import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCalendar2Check } from "react-icons/bs";
import { CiDollar } from "react-icons/ci";
import "../../style/Step2.css";

const Step2 = () => {
  return (
    <>
      <div className="header">
        <div className="logo">Deputy</div>
        <h1>Let us get to know you</h1>
        <p>We will personalise your trial experience</p>
      </div>
      <div className="section">
        <h4>What brings you to Deputy</h4>

        <div className="cards">
          <div className="top-card">
            <i className="card-icon">
              <BsCalendar2Check />
            </i>
            <h6>Save time scheduling</h6>
            <p>
              I want to know my team availability, so I can create and share
              schedules
            </p>
          </div>
          <div className="top-card">
            <i className="card-icon">
              <AiOutlineClockCircle />
            </i>
            <h6>Track hours worked</h6>
            <p>
              I want a record of when my team works, so I can pay them correctly
            </p>
          </div>
          <div className="top-card">
            <i className="card-icon">
              <CiDollar />
            </i>
            <h6>Process your team pay</h6>
            <p>I want to be able to process pay cycles without headaches</p>
          </div>
        </div>
        <div className="section-2">
          <h4>What payroll provider do you use?</h4>
          <p>
            We will send you some tips on how you can integrate your payroll
            provider with Deputy
          </p>
          <div className="cards">
            <div className="roll-card">
              <p>Xero</p>
            </div>
            <div className="roll-card">
              <p>MYOB</p>
            </div>
            <div className="roll-card">
              <p>Flare</p>
            </div>
            <div className="roll-card">
              <p>Quickbooks</p>
            </div>
            <div className="roll-card">
              <p>Keypay</p>
            </div>
            <div className="roll-card">
              <p>Netsuite</p>
            </div>
            <div className="roll-card">
              <p>Wage-Easy</p>
            </div>
            <div className="roll-card">
              <p>Cloud Payroll</p>
            </div>
            <div className="roll-card">
              <p>Other</p>
            </div>
          </div>
        </div>
        <Link to="/step3">
          <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
            Next
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Step2;
