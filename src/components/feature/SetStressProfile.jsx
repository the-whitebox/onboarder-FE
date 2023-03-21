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
  pb: 3,
};

export default function SetStressProfile() {
  const [state, setState] = React.useState({ data: "" });
  const [stress, setStress] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const [stressError, setStressError] = React.useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [error, setError] = React.useState(null);
  const token = process.env.REACT_APP_TEMP_TOKEN;
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

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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
  //   if (stress !== "") {
  //     console.log("Data Found");
  //     setError(false);
  //     console.log(stress);

  //     navigate("/employment", {
  //       state: {
  //         stress: stress
  //       },
  //     });
  //   } else {
  //     setError(true);
  //     setState({ data: e.target.value });
  //   }
  // };

  console.log(
    {selectedValue}
    );

  axios
    .patch(
      url + "/people/6/",
      {
        stress_level: stress,
        role: 2,
        is_superuser: false,
        profile: {},
        working_hours: {},
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
      <Box sx={{ ...style, width: 400 }}>
        <Box className="flex flex-row" sx={{ width: "420px" }}>
          <h2 className="set">Set Stress Profile</h2>
          <CloseIcon onClick={handleClose} sx={{ pb: "30px" }}></CloseIcon>
        </Box>
        <div>
          <Typography sx={{ color: "#a9a9a9", pt: "15px" }}>
            2 Team members
          </Typography>
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
                mt: "13px",
                ml: "12px",
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

          <FormControl sx={{ m: 1, width: 220, mt: 3 }}>
            <Typography sx={{ pb: "10px", fontWeight: "bold", ml: "5px" }}>
              Stress Profile{" "}
            </Typography>
            <Select
            //  {...register("Stress Profile", { required: true })}
             
              sx={{ borderRadius: "10px" }}
              displayEmpty
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
            //   value={personName}
            //   input={<OutlinedInput />}
            //   renderValue={(selected) => {
            //     if (selected.length === 0) {
            //       console.log("Selected values:", selected)
            //       return <em>Select</em>;
            //     } else

            //     return selected.join(", ");
            //   }}
            //   MenuProps={MenuProps}
            //   inputProps={{ "aria-label": "Without label" }}
            // >
            >
            {/* //   {names.map((name) => (
            //     <MenuItem
            //       key={name}
            //       value={name}
            //       style={getStyles(name, personName, theme)}
            //     >
            //       {name}
            //     </MenuItem>
            } */}
             <MenuItem disabled value=""></MenuItem>
              <MenuItem value=""><em>None</em></MenuItem>
              <MenuItem value={"2 days per week"}>2 days per week</MenuItem>
              <MenuItem value={"24/7"}>24/7</MenuItem>
              <MenuItem value={"CA Overtime 40 hrs per week"}>CA Overtime 40 hrs per week</MenuItem>
              <MenuItem value={"Max 20 hours per week"}>Max 20 hours per week</MenuItem>
              <MenuItem value={"Normal 38 hours per week"}>Normal 38 hours per week</MenuItem>
              <MenuItem value={"Standard 40 hours, 8 hours per day"}>Standard 40 hours, 8 hours per day</MenuItem>
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
        </div>
        <Button
          className="Btn"
          sx={{
            borderRadius: "7px",
            ml: 42,
            width: 80,
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
    </React.Fragment>
  );
}
