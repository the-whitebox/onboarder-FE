import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import { FormHelperText } from "@mui/material";
// import EmploymentDetails from "../pages/EmploymentDetails";


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

export default function EmploymentType(props) {
  const theme = useTheme();
  const [employment, setEmployment] = React.useState("");
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    console.log("Employment: ", employment);

    props.employmentData(employment);
  }, [employment]);


  const handleChange = (event) => {
    event.preventDefault();
    setEmployment(event.target.value);
    console.log("Event value: ", event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.emplomentData(employment);
  };

  return (
    <>
      <Box sx={{ pt: 2, display: "flex" }}>
        <Typography variant="h6" fontWeight="Bold">
          Employment type
        </Typography>
        <FormControl sx={{ pl: 5, m: 1, width: 300, mt: 3 }}>
          <Select
            size="small"
            sx={{ borderRadius: "7px" }}
            displayEmpty
            value={employment}
            onChange={handleChange}
          >
            <MenuItem value={"System Administrator"}>
              System Administrator
            </MenuItem>
            <MenuItem value={"Supervisor"}>Supervisior</MenuItem>
            <MenuItem value={"Employee"}>Employee</MenuItem>
            <MenuItem value={"Location Manager"}>Location Manager</MenuItem>
            <MenuItem value={"Advisor"}>Advisor</MenuItem>
          </Select>
          {error && <FormHelperText>Select a value</FormHelperText>}
        </FormControl>
      </Box>
    </>
  );
}
