import * as React from "react";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import "../../style/Setpayrates.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ["2","3"];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function Setpayrates() {

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const url = process.env.REACT_APP_BASE_URL;
  const token = process.env.REACT_APP_TEMP_TOKEN;

  const [state, setState] = React.useState({ data: "" });
  const [payRates, setPayRates] = useState("");
  const [mondays, setMondays] = useState("");
  const [tuesdays, setTuesdays] = useState("");
  const [wednesdays, setWednesdays] = useState("");
  const [thursdays, setThursdays] = useState("");
  const [fridays, setFridays] = useState("");

  const [error, setError] = React.useState(null);
  const [payRatesError, setPayRatesError] = useState("");
  const [mondaysError, setMondaysError] = useState("");
  const [tuesdaysError, setTuesdaysError] = useState("");
  const [wednesdaysError, setWednesdaysError] = useState("");
  const [thursdaysError, setThursdaysError] = useState("");
  const [fridaysError, setFridaysError] = useState("");

  const navigate = useNavigate();

  const payRatesValidation = () => {
    if (payRates == "") {
      setPayRatesError("Please enter pay rates");
    } else setPayRatesError("");
  };

  const mondaysValidation = () => {
    if (mondays == "") {
      setMondaysError("Please enter mondays rates");
    } else setMondaysError("");
  };

  const tuesdaysValidation = () => {
    if (tuesdays == "") {
      setTuesdaysError("Please enter tuesdays rates");
    } else setTuesdaysError("");
  };

  const wednesdaysValidation = () => {
    if (wednesdays == "") {
      setWednesdaysError("Please enter wednesdays rates");
    } else setWednesdaysError("");
  };

  const thursdaysValidation = () => {
    if (thursdays == "") {
      setThursdaysError("Please enter thursdays rates");
    } else setThursdaysError("");
  };

  const fridaysValidation = () => {
    if (fridays == "") {
      setFridaysError("Please enter fridays rates");
    } else setFridaysError("");
  };

  const {
    register,
    formState: { errors },
  } = useForm();



  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setPayRates(event.target.value)
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const payRatesDetails = (e) => {
    console.log("Inside Pay Rates");
    console.log(payRates, mondays, tuesdays, wednesdays, thursdays, fridays); ;
    if (
      payRates !== "" &&
      mondays !== "" &&
      tuesdays !== "" &&
      wednesdays!== "" &&
      thursdays!== "" &&
      fridays!== ""
      
    ) {
      console.log("Data Found");
      setError(false);
      console.log(
        payRates, mondays, tuesdays, wednesdays, thursdays, fridays
      );
      try {
        debugger
        axios
          .patch(
            url + "/people/6/", 
            {
              pay_detail:{
                per_day_pay_rate:{
                  monday: mondays,
                  tuesday: tuesdays,
                  wednesday: wednesdays,
                  thursday: thursdays,
                  friday: fridays,
                }
              },
            pay_rate: payRates,
            is_superuser: false,
            role: 3,
            profile:{},
            work_detail:{},
        },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          })
          .then((response) => {
            console.log("Pay Rates API was hit successfully");
            console.log(response);
          });
      } catch (error) {
        console.log(error.response.data);
      }
      console.log(payRates, mondays, tuesdays);
    } else {
      setError(true);
      setState({ data: e.target.value });
    }
  };

  return (
    <React.Fragment>
      <Box sx={{ ...style, width: 400, height: 930, mt: 25 }}>
        <Box className="flex flex-row" sx={{ width: "420px" }}>
          <h2>Set Pay rates</h2>

          <CloseIcon onClick={handleClose} sx={{ pb: "45px" }}></CloseIcon>
        </Box>
        <div>
          <Typography sx={{ pb: "5px" }}> 2 Team members </Typography>
          <Box
            sx={{
              bgcolor: "#d5f9f6",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <InfoIcon
              sx={{
                fontSize: "small",
                color: "Gray",
                mt: "13px",
                ml: "12px",
              }}
            />
            <Typography
              sx={{
                fontSize: "small",
                ml: "5px",
                mt: "9px",
                color: "wblack",
              }}
            >
              Pay rates help track wage costs and can be expected to ensure team
              members are paid correctly. Select from our pay rates library
              below. About pay rates
            </Typography>
          </Box>

          <FormControl size="small" sx={{ m: 1, width: 250, mt: 3, pt: "5px" }}>
            <Typography sx={{ fontWeight: "bold" }}> Pay rates </Typography>
            <Select
              sx={{ pb: "5px", font: "inherit" }}
              multiple
              displayEmpty
              value={personName}
              // onChange={handleChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Rates per Day</em>;
                }

                return selected.join(", ");
              }}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
              {...register("Pay Rates", { required: true })}
                onChange={handleChange}
            >
              <MenuItem disabled value="">
                <em>Rates per Day</em>
              </MenuItem>
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box sx={{ ml: 2, mt: 1 }}>
            {errors.PayRates?.type === "required" && "Pay Rates Required"}
              <small>
                {payRatesError && (
                  <div
                    style={{
                      color: "red",
                    }}
                  >
                    {payRatesError}
                  </div>
                )}
              </small>
              </Box>
          <Box sx={{ ml: "12px" }}>
            <Typography
              sx={{
                ml: "7px",
                fontWeight: "bold",
                fontSize: "15px",
                pt: "12px",
                pb: 0,
              }}
            >
              Mondays
            </Typography>
            <FormControl
              size="small"
              sx={{ m: 1, width: 370 }}
              variant="outlined"
            >
              <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={
                  <InputAdornment position="end">Rs per hour</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                {...register("Mondays", { required: true })}
                onChange={(e) => setMondays(e.target.value)}
              />
            </FormControl>
            <Box sx={{ ml: 1, mt: 1 }}>
            {errors.Mondays?.type === "required" && "Mondays Rates Required"}
              <small>
                {mondaysError && (
                  <div
                    style={{
                      color: "red",
                    }}
                  >
                    {mondaysError}
                  </div>
                )}
              </small>
              </Box>
            <Typography
              sx={{
                ml: "7px",
                fontWeight: "bold",
                fontSize: "15px",
                pt: "10px",
              }}
            >
              {" "}
              Tuesdays
            </Typography>
            <FormControl
              size="small"
              sx={{ m: 1, width: 370 }}
              variant="outlined"
            >
              <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={
                  <InputAdornment position="end">Rs per hour</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                {...register("Tuesdays", { required: true })}
                onChange={(e) => setTuesdays(e.target.value)}
              />
            </FormControl>
            <Box sx={{ ml: 1, mt: 1 }}>
            {errors.Tuesdays?.type === "required" && "Tuesdays Rates Required"}
              <small>
                {tuesdaysError && (
                  <div
                    style={{
                      color: "red",
                    }}
                  >
                    {tuesdaysError}
                  </div>
                )}
              </small>
              </Box>
            <Typography
              sx={{
                ml: "7px",
                fontWeight: "bold",
                fontSize: "15px",
                pt: "10px",
              }}
            >
              {" "}
              Wednesdays
            </Typography>
            <FormControl
              size="small"
              sx={{ m: 1, width: 370 }}
              variant="outlined"
            >
              <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={
                  <InputAdornment position="end">Rs per hour</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                {...register("Wednesdays", { required: true })}
                onChange={(e) => setWednesdays(e.target.value)}
              />
            </FormControl>
            <Box sx={{ ml: 1, mt: 1 }}>
            {errors.Wednesdays?.type === "required" && "Wednesdays Rates Required"}
              <small>
                {wednesdaysError && (
                  <div
                    style={{
                      color: "red",
                    }}
                  >
                    {wednesdaysError}
                  </div>
                )}
              </small>
              </Box>
            <Typography
              sx={{
                ml: "7px",
                fontWeight: "bold",
                fontSize: "15px",
                pt: "10px",
              }}
            >
              
              Thursdays
            </Typography>
            <FormControl
              size="small"
              sx={{ m: 1, width: 370 }}
              variant="outlined"
            >
              <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={
                  <InputAdornment position="end">Rs per hour</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                {...register("Thursdays", { required: true })}
                onChange={(e) => setThursdays(e.target.value)}
              />
            </FormControl>
            <Box sx={{ ml: 1, mt: 1 }}>
            {errors.Thursdays?.type === "required" && "Thursdays Rates Required"}
              <small>
                {thursdaysError && (
                  <div
                    style={{
                      color: "red",
                    }}
                  >
                    {thursdaysError}
                  </div>
                )}
              </small>
              </Box>
            <Typography
              sx={{
                ml: "7px",
                fontWeight: "bold",
                fontSize: "15px",
                pt: "10px",
              }}
            >
              {" "}
              Fridays
            </Typography>
            <FormControl
              size="small"
              sx={{ m: 1, width: 370 }}
              variant="outlined"
            >
              <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={
                  <InputAdornment position="end">Rs per hour</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                {...register("Fridays", { required: true })}
                onChange={(e) => setFridays(e.target.value)}
              />
            </FormControl>
            <Box sx={{ ml: 1, mt: 1 }}>
            {errors.Fridays?.type === "required" && "Fridays Rates Required"}
              <small>
                {fridaysError && (
                  <div
                    style={{
                      color: "red",
                    }}
                  >
                    {fridaysError}
                  </div>
                )}
              </small>
              </Box>
          </Box>
        </div>
        <Button
          className="btn"
          size="small"
          sx={{
            mt: "25px",
            ml: 40,
            borderRadius: "8px",
            width: "10%",
            textTransform: "none",
          }}
          onClick={(e) => {
            payRatesValidation();
            mondaysValidation();
            tuesdaysValidation();
            wednesdaysValidation();
            thursdaysValidation();
            fridaysValidation();
            payRatesDetails(e);
            
          }}
        >
          Save
        </Button>
      </Box>
    </React.Fragment>
  );
}
