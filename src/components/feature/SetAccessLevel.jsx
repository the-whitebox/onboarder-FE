import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import "../../style/SetAccesslevel.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 150,
    },
  },
};

const names = [
  "System Administrator",
  "Supervisor",
  "Employee",
  "Location Manager",
  "Advisor",
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: "12px",
  padding: "20px",
};

export default function SetAccessLevel() {
  const url = process.env.REACT_APP_BASE_URL + "/enums"
  const [state, setState] = React.useState({ data: "" });
  const [access, setAccess] = React.useState("");
  const [accessList, setAccessList] = React.useState([{"name": "", "id":""}]);


  const [error, setError] = React.useState(null);
  const [accessError, setAccessError] = useState("");

  const accessValidation = () => {
    if (access == "") {
      setAccessError("Please enter access level");
    } else setAccessError("");
  };



  const {
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  let data = null;

  useEffect(()=> {
    const fetchData = async () =>{
      const {data} = await axios.get(url, { headers: { Authorization: `Bearer + ${token}` } });
      console.log(data.data);
      debugger
      setAccessList(JSON.parse(JSON.stringify(data.data)));
    }; 
    fetchData();
    data = accessList;
  }, [])
  Object.values(accessList).map((i) => console.log(i.name));

  const toAccess = (e) => {
    if (access !== "") {
      console.log("Data Found");
      setError(false);
      console.log(access);

      navigate("/employment", {
        state: {
          access: access,
        },
      });
    } else {
      setError(true);
      setState({ data: e.target.value });
    }
  };
  


  const [open, setOpen] = React.useState(false);
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

  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setPersonName(typeof value === "string" ? value.split(",") : value);
  // };

  return (
    <React.Fragment>
      <Box sx={{ ...style, width: 350, height: 280 }}>
        <CloseIcon onClick={handleClose} sx={{ float: "right" }}></CloseIcon>
        <Typography
          variant="h5"
          sx={{ mt: 2, fontWeight: "bold", paddingBottom: 1 }}
          id="child-modal-title"
        >
          Set Access level
        </Typography>

        <div>
          <p className="team">2 Team members </p>
          <Typography sx={{ fontWeight: "bold", ml: "8px" }}>
            Access level
          </Typography>
          <FormControl
            sx={{
              width: 200,
              height: 5,
              padding: "5px  ",
            }}
          >
            <Select
              size="small"
              sx={{ borderRadius: "7px" }}
              multiple
              displayEmpty
              value={personName}
              // onChange={handleChange}
              input={<OutlinedInput />}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em>Select</em>;
                }

                return selected.join(", ");
              }}
              MenuProps={MenuProps}
              inputProps={{ "aria-label": "Without label" }}
              {...register("Work Period", { required: true })}
              onChange={(e) => setAccess(e.target.value)}
            >
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
          <Box sx={{ ml: 1, mt: 4 }}>
        {errors.Access?.type === "required" && "Access Level Required"}
        <small>
          {accessError && (
            <div
              style={{
                color: "red",
              }}
            >
              {accessError}
            </div>
          )}
        </small>
        </Box>
        </div>
        <Button
          variant="primary"
          className="btn"
          sx={{
            ml: 34,
            borderRadius: "6px",
            width: "22%",
            bgcolor: "#38b492",
            color: "white",
            textTransform: "none",
            mt: 6,
          }}
          onClick={() => {
            accessValidation();
            toAccess();
          }}
        >
          Update
        </Button>
      </Box>
    </React.Fragment>
  );
}
