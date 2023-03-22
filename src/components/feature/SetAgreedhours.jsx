import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import "../../style/SetAgreedhours.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function SetAgreedhours() {
  const [state, setState] = React.useState({ data: "" });
  const [workPeriod, setWorkPeriod] = React.useState("");
  const [netWorkPeriod, setNetWorkPeriod] = React.useState("");
  const [hours, setHours] = React.useState("");

  const [error, setError] = React.useState(null);
  const [workPeriodError, setWorkPeriodError] = useState("");
  const [netWorkPeriodError, setNetWorkPeriodError] = useState("");
  const [hoursError, setHoursError] = useState("");
  const token = process.env.REACT_APP_TEMP_TOKEN;
  const url = process.env.REACT_APP_BASE_URL;


  const workPeriodValidation = () => {
    if (workPeriod == "") {
      setWorkPeriodError("Please enter work period length");
    } else setWorkPeriodError("");
  };

  const netWorkPeriodValidation = () => {
    if (netWorkPeriod == "") {
      setNetWorkPeriodError("Please enter start day");
    } else setNetWorkPeriodError("");
  };

  const hoursValidation = () => {
    if (hours == "") {
      setHoursError("Please enter hours per work period");
    } else setHoursError("");
  };

  const {
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const toPeople = (e) => {
  //   if (workPeriod !== "" && netWorkPeriod !== "" && hours !== "") {
  //     console.log("Data Found");
  //     setError(false);
  //     console.log(workPeriod, netWorkPeriod, hours);

  //   } else {
  //     setError(true);
  //     setState({ data: e.target.value });
  //   }
  // };

  axios
    .patch(
      url + "/people/6/",
      {
        role:4,
        is_superuser: false,
        working_hours:{},
        profile:{},
        hours_per_work_period:hours,
        next_work_period_day: netWorkPeriod,
        work_period_length: workPeriod,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(true);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          ...style,
          width: 490,
          height: "auto",
        }}
      >
        <Box className="flex flex-row" sx={{ width: "100%" }}>
          <h2 className="set">Set agreed hours</h2>
          <CloseIcon onClick={handleClose} sx={{ pb: "25px" }}></CloseIcon>
        </Box>
        <div>
          <Typography
            sx={{
              pt: "10px",
              fontWeight: "bold",
              color: "rgba(95, 91, 81, 0.518)",
            }}
          >
            2 Team members
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              mt: "20px",
              pb: "20px",
            }}
          >
            Work period
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", ml: "20px", pb: "15px" }}
          >
            Create a new work period{" "}
          </Typography>
          <Typography sx={{ ml: "20px", pb: "30px" }}>
            Saving this template will allow it to be used across any team member
            profile.
          </Typography>
          <Typography
            sx={{
              fontWeight: "Bold",
              fontSize: "large",
              ml: "20px",
              pb: "10px",
            }}
          >
            Work period length
          </Typography>

          <FormControl>
            <RadioGroup
              sx={{
                display: "flex",
                flexDirection: "row",
                ml: "20px",
                gap: 3,
              }}
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue=""
              name="radio-buttons-group"
              {...register("Work Period", { required: true })}
              onChange={(e) => setWorkPeriod(e.target.value)}
            >
              <FormControlLabel
                value={1}
                control={<Radio />}
                label="Weekly"
              />
              <FormControlLabel
                value={2}
                control={<Radio />}
                label="2-Weekly"
              />
              <FormControlLabel
                value={3}
                control={<Radio />}
                label="4-Weekly"
              />
            </RadioGroup>
          </FormControl>
          <Box sx={{ ml: 3, mt: 1, mb: 1 }}>
          {errors.workPeriod?.type === "required" && "Work Period Required"}
          <small>
            {workPeriodError && (
              <div
                style={{
                  color: "red",
                }}
              >
                {workPeriodError}
              </div>
            )}
          </small>
          </Box>
          <Typography
            sx={{
              ml: "20px",
              fontWeight: "Bold",
              fontSize: "large",
              pb: "10px",
            }}
          >
            {" "}
            Next Work period starts on{" "}
          </Typography>

          <FormControl>
            <RadioGroup
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,

                ml: "20px",
              }}
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue=""
              name="radio-buttons-group"
              {...register("Work Period", { required: true })}
              onChange={(e) => setNetWorkPeriod(e.target.value)}
            >
              <FormControlLabel value={1} control={<Radio />} label="Mon" />
              <FormControlLabel value={2} control={<Radio />} label="Tue" />
              <FormControlLabel value={3} control={<Radio />} label="Wed" />
              <FormControlLabel value={4} control={<Radio />} label="Thu" />
              <FormControlLabel value={5} control={<Radio />} label="Fri" />
              <FormControlLabel value={6} control={<Radio />} label="Sat" />
              <FormControlLabel value={7} control={<Radio />} label="Sun" />
            </RadioGroup>
          </FormControl>
          <Box sx={{ ml: 3, mt: 1 }}>
          {errors.netWorkPeriod?.type === "required" && "Work Period Required"}
          <small>
            {netWorkPeriodError && (
              <div
                style={{
                  color: "red",
                }}
              >
                {netWorkPeriodError}
              </div>
            )}
          </small>
          </Box>
          <Typography
            sx={{ fontWeight: "bold", pt: "15px", pb: "20px", ml: 3 }}
          >
            Hours per Work period
          </Typography>
          <FormControl
            size="small"
            sx={{ m: 1, width: 150 }}
            variant="outlined"
          >
            <OutlinedInput
              id="outlined-adornment-weight"
              endAdornment={
                <InputAdornment position="end"> hours</InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              placeholder="0"
              {...register("Hours", { required: true })}
              onChange={(e) => setHours(e.target.value)}
            />
          </FormControl>
        </div>
        <Box sx={{ ml: 3, mt: 1 }}>
        {errors.hours?.type === "required" && "Work Period Required"}
        <small>
          {hoursError && (
            <div
              style={{
                color: "red",
              }}
            >
              {hoursError}
            </div>
          )}
        </small>
        </Box>
        <Button
          className="btn btn-primary"
          sx={{
            ml: 45,
            borderRadius: "5px",
            width: "16%",
            textTransform: "none",
            mt: 3,
          }}
          onClick={() => {
            workPeriodValidation();
            netWorkPeriodValidation();
            hoursValidation();
            toPeople();
          }}
        >
          Save
        </Button>
      </Box>
    </React.Fragment>
  );
}
