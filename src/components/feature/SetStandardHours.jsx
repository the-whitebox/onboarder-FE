import * as React from "react";
import "../../style/SetStandardHours.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

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

export default function SetStandardHours() {
  const [state, setState] = React.useState({ data: "" });
  const [hours, setHours] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const [error, setError] = React.useState(null);
  const [hoursError, setHoursError] = useState("");
  const token = process.env.REACT_APP_TEMP_TOKEN;
  const url = process.env.REACT_APP_BASE_URL;

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



  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const toEmployment = (e) => {
  //   if (hours !== "") {
  //     console.log("Data Found");
  //     setError(false);
  //     console.log(hours);

  //     navigate("/employment", {
  //       state: {
  //         hours: hours,
  //       },
  //     });
  //   } else {
  //     setError(true);
  //     setState({ data: e.target.value });
  //   }
  // };
  console.log(
    { hours }
  );

  axios
    .post(
      url + "/people/",
      {
        role: 2,
        hours: hours,
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

  return (
    <React.Fragment>
      <Box sx={{ ...style, width: 350, height: 350, mt: 0 }}>
        <Box className="flex flex-row" sx={{ width: "375px" }}>
          <h2>Set Standard Hours</h2>
          <CloseIcon onClick={handleClose} sx={{ pb: "48px" }}></CloseIcon>
        </Box>
        <div>
          <Typography sx={{ mt: "2px", color: "darkgray", ml: "2px" }}>
            2 Team members
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
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
                ml: "10px",
                mt: "10px",
                color: "gray",
              }}
            >
              Number of hours payable for a 'Day of leave'
            </Typography>
          </Box>
          <h5 className="h5"> Hours </h5>
          <TextField
            size="small"
            color="warning"
            sx={{ width: 300, ml: "8px" }}
            {...register("Work Period", { required: true })}
            onChange={(e) => setHours(e.target.value)}
          ></TextField>
          <Box sx={{ ml: 1, mt: 1 }}>
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

          <Typography sx={{ fontSize: "12px", ml: "10px", mt: "10px" }}>
            Not applicable to 2 Team members selected as they do not a pay rate
            assigned to their profile
          </Typography>
        </div>
        <Button
          className="Btn"
          sx={{
            mt: "32px",
            ml: 35,
            borderRadius: "6px",
            width: "22%",
            textTransform: "none",
          }}
          onClick={() => {
           
            hoursValidation();
            toEmployment();
          }}
        >
          Save
        </Button>
      </Box>
    </React.Fragment>
  );
}
