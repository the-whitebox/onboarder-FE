import React from "react";
import { BsCalendar2Check } from "react-icons/bs";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Step3 = () => {
  return (
    <>
      <div className="header">
        <div className="logo">Deputy</div>
        <h1>Let us get to know you</h1>
        <p>We will personalise your trial experience</p>
      </div>
      <div className="section">
        <h4>
          What are you looking to improve the way you process your team pay
        </h4>
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
        </div>
      </div>
      <div className="section-2">
        <h4>How did you hear about deputy?</h4>
        <div className="cards">
          <div className="top-card">
            <i className="card-icon">
              <BsCalendar2Check />
            </i>
            <p>Used Deputy in the past</p>
          </div>
          <div className="top-card">
            <i className="card-icon">
              <BsCalendar2Check />
            </i>
            <p>Recommended from a friend or coleague</p>
          </div>
          <div className="top-card">
            <i className="card-icon">
              <BsCalendar2Check />
            </i>
            <p>Recommended from as business vendor</p>
          </div>
          <div className="top-card">
            <i className="card-icon">
              <BsCalendar2Check />
            </i>
            <p>Read reviews or blogs</p>
          </div>
          <div className="top-card">
            <i className="card-icon">
              <BsCalendar2Check />
            </i>
            <p>Saw an ad about Deputy </p>
          </div>
          <div className="top-card">
            <i className="card-icon">
              <BsCalendar2Check />
            </i>
            <p>Searched the internet</p>
          </div>
          <div className="top-card">
            <i className="card-icon">
              <BsCalendar2Check />
            </i>
            <p>Other</p>
          </div>
        </div>
        <Link to="/">
          <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
            Create business
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Step3;
