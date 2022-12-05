import React from "react";
import "./Welcome.css";
import { Button } from "@mui/material";
const Welcome = () => {
  return (
    <>
      <div className="header">
        <h1>Welcome to Deputy Business</h1>
      </div>
      <div className="cards">
        <div className="card">
          <div className="card-image">
            <img src="" alt="" />
          </div>
          <p>Do you own a bussiness or manage a team</p>
          <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
            Discover Business
          </Button>
        </div>
        <div className="card">
          <div className="card-image">
            <img src="" alt="" />
          </div>
          <p>Is your team already using Deputy</p>
          <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
            Join Existing Team
          </Button>
        </div>
      </div>
    </>
  );
};

export default Welcome;
