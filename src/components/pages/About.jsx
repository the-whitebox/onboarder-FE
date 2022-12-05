import React from "react";
import "../../style/About.css";
import { Button, TextField, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="header">
        <h1>Tell us a bit about your business</h1>
        <p>We will personalise your trial experience </p>
      </div>
      <div className="section">
        <h3>What is your business name?</h3>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              margin="normal"
              required
              id="business name"
              name="business name"
            />
            <h3>What is your mobile number?</h3>
            <TextField
              margin="normal"
              required
              id="business name"
              name="business name"
            />
          </Grid>
        </Grid>
      </div>
      <h3>What best describe your business?</h3>
      <div className="cards">
        <div className="about-card">
          <div className="card-image">
            <img src="" alt="" />
          </div>
          <p>Healthcare</p>
        </div>
        <div className="about-card">
          <div className="card-image">
            <img src="" alt="" />
          </div>
          <p>Retail & Hospitality</p>
        </div>
        <div className="about-card">
          <div className="card-image">
            <img src="" alt="" />
          </div>
          <p>Services</p>
        </div>
        <div className="about-card">
          <div className="card-image">
            <img src="" alt="" />
          </div>
          <p>Charity</p>
        </div>
        <div className="about-card">
          <div className="card-image">
            <img src="" alt="" />
          </div>
          <p>Other</p>
        </div>
      </div>
      <h3>Select your industry</h3>
      <TextField
        margin="normal"
        required
        id="business name"
        name="business name"
      />
      <h3>How many employees do you need to manage?</h3>
      <div className="cards">
        <div className="number-card">
          <p>1-15</p>
        </div>
        <div className="number-card">
          <p>16-25</p>
        </div>
        <div className="number-card">
          <p>26-49</p>
        </div>
        <div className="number-card">
          <p>50-249</p>
        </div>
        <div className="number-card">
          <p>250-749</p>
        </div>
        <div className="number-card">
          <p>750+</p>
        </div>
      </div>
      <Link href="/">
        <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
          Next
        </Button>
      </Link>
    </>
  );
};

export default About;
