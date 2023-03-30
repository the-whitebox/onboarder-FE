import * as React from "react";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "../../style/SetStress.css";

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 45;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 6.5 + ITEM_PADDING_TOP,
      width: 310,
    },
  },
};

const names = [
  "Annual Leave (Vacation)",
  "Bereavement (Compassionate) Leave",
  "Cummunity Services Leave",
  "Long Services Leave",
  "Other Paid Leave",
  "Sick (Personal/Carer's) Leave ",
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",

  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: "12px",
  padding: "20px",
};

export default function Addleaveentitlement(props) {
  const [state, setState] = React.useState({ data: "" });
  const [leave, setLeave] = React.useState("");

  const [error, setError] = React.useState(null);
  const [leaveError, setLeaveError] = useState("");
  const token = localStorage.getItem("token");
  const url = process.env.REACT_APP_BASE_URL;

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

    setLeave(event.target.value);
  };

  const leaveValidation = () => {
    if (leave == "") {
      setLeaveError("Please enter leave entitlement");
    } else setLeaveError("");
  };

  const {
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const toEmployment = (e) => {
    console.log({ leave });

    axios
      .patch(
        url + "/people/6/",
        {
          profile: {},
          leave_entitlements: [
            { id: 6, leave_entitlement: parseInt(leave) + 1 },
          ],
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
      <Box sx={{ ...style, width: 430, height: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold" }}
            id="child-modal-title"
          >
            Add leave entitlement
          </Typography>
          <CloseIcon
            onClick={props.handleCloseLeaveEntitlement}
            sx={{ cursor: "pointer" }}
          ></CloseIcon>
        </Box>

        <Box>
          <Typography sx={{ fontSize: "14px", mt: 2 }}>
            Adding leave entitlement for 0 team members. 2 team members wil not
            assigned the leave entitlement because they don't have a pay rate.
          </Typography>
          <Typography sx={{ fontWeight: "bold", pt: 4, ml: 1 }}>
            Leave entitlement
          </Typography>
          <FormControl
            sx={{
              width: 300,
              borderRadius: "2px",
            }}
          >
            <Select
              {...register("Leave Entitlement", { required: true })}
              onChange={handleChange}
              sx={{ borderRadius: "7px" }}
              size="small"
              displayEmpty
              value={leave}
              input={<OutlinedInput />}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
            >
              {names.map((name, idx) => (
                <MenuItem
                  key={name}
                  value={idx}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box sx={{ ml: 1, mt: 1 }}>
            {errors.LeaveEntitlement?.type === "required" &&
              "Leave Entitlement Required"}
            <small>
              {leaveError && (
                <div
                  style={{
                    color: "red",
                  }}
                >
                  {leaveError}
                </div>
              )}
            </small>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            className="all-green-btns"
            sx={{
              borderRadius: "5px",
              width: "25%",
              height: 35,
              mt: 4,
              textTransform: "none",
            }}
            onClick={() => {
              leaveValidation();
              toEmployment();
            }}
          >
            Add
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}
