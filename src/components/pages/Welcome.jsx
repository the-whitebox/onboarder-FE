import React from "react";
import { Button } from "@mui/material";
import Link from "@mui/material/Link";
import "../../style/Welcome.css";

const Welcome = () => {
  return (
    <>
      <div className="header">
        <div className="logo">Deputy</div>
        <h1>Welcome to Deputy Business</h1>
      </div>
      <div className="cards">
        <div className="card">
          <div className="card-image">
            <img src="" alt="" />
          </div>
          <p>Do you own a bussiness or manage a team</p>
          <Link href="/about">
            <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
              Discover Business
            </Button>
          </Link>
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
