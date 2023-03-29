import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import "../../style/SetStress.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  sx: {
    "&& .Mui-selected": {
      color: "green",
    },
  },
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
    },
  },
};

const names = [
  "2 days per week",
  "24/7",
  "CA Overtime 40hrs per week",
  "Max 20 hours per week",
  "Normal 38 hours per week",
  "Standard 40 hours, 8 hours per day",
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 4,
};

export default function SetStressProfile(props) {
  const [state, setState] = React.useState({ data: "" });
  const [stress, setStress] = React.useState("");

  const [stressError, setStressError] = React.useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [error, setError] = React.useState(null);
  const token = localStorage.getItem("token");
  const url = process.env.REACT_APP_BASE_URL;

  const stressValidation = () => {
    if (stress == "") {
      setStressError("Please enter stress profile");
    } else setStressError("");
  };

  const {
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setStress(event.target.value);
  };

  const toEmployment = (e) => {
    console.log({ selectedValue });
    // debugger;
    axios
      .patch(
        url + "/people/6/",
        {
          role: 2,
          is_superuser: false,
          profile: {},
          working_hours: {
            stress_level: selectedValue,
          },
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
      <Box sx={{ ...style, width: 400, height: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Set Stress Profile</h2>
          <CloseIcon
            onClick={props.handleCloseStress}
            sx={{ cursor: "pointer" }}
          ></CloseIcon>
        </Box>
        <Box>
          <Typography sx={{ color: "#a9a9a9" }}>Team members</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <InfoIcon
              sx={{
                fontSize: "large",
                color: "Gray",
                mt: "10px",
                ml: "5px",
              }}
            />
            <Typography
              sx={{
                fontSize: "15px",
                ml: "5px",
                mt: "9px",
                color: "wblack",
              }}
            >
              Stress Profiles are scheduling rules such as minimum and maximum
              hours. Use our templates below or
            </Typography>
          </Box>
          <p className="own">Create your own.</p>

          <FormControl sx={{ width: 220, mt: 3 }}>
            <Typography sx={{ pb: "10px", fontWeight: "bold" }}>
              Stress Profile
            </Typography>
            <Select
              //  {...register("Stress Profile", { required: true })}
              sx={{ borderRadius: "10px" }}
              displayEmpty
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
            >
              <MenuItem disabled value=""></MenuItem>
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>2 days per week</MenuItem>
              <MenuItem value={2}>24/7</MenuItem>
              <MenuItem value={3}>CA Overtime 40 hrs per week</MenuItem>
              <MenuItem value={4}>Max 20 hours per week</MenuItem>
              <MenuItem value={5}>Normal 38 hours per week</MenuItem>
              <MenuItem value={6}>Standard 40 hours, 8 hours per day</MenuItem>
            </Select>
            {error && <FormHelperText>Select a value</FormHelperText>}
          </FormControl>
          <Box sx={{ ml: 1, mt: 1 }}>
            {errors.Stress?.type === "required" && "Stress Profile Required"}
            <small>
              {stressError && (
                <div
                  style={{
                    color: "red",
                  }}
                >
                  {stressError}
                </div>
              )}
            </small>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            className="all-green-btns"
            variant="contained"
            sx={{
              borderRadius: "7px",
              width: "25%",
              height: 35,
              textTransform: "none",
            }}
            onClick={() => {
              // stressValidation();
              toEmployment();
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}
