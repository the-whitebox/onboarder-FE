import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import { useState } from "react";


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

const names = [
  "System Administrator",
  "Supervisor",
  "Employee",
  "Location Manager",
  "Advisor",
];

export default function PayRate() {
  // const [error, setError] = React.useState(null);

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
  };
  return (
    <>
      <Box sx={{ pt: 2, pl: 2, display: "flex" }}>
        <Typography inline variant="h6" fontWeight="Bold" sx={{ width: 100 }}>
          Pay Rate
        </Typography>
        <FormControl sx={{ pl: 13.2, m: 1, width: 370, mt: 3 }}>
          {/* <Select
            size="small"
            displayEmpty
            value={PayRate}
            // value={personName}
            // onChange={handleChange}
            // onChange={(e) => setPayRate(e.target.value)}
            // input={<OutlinedInput />}
            // renderValue={(selected) => {
            //   if (selected.length === 0) {
            //     return <em>Select</em>;
            //   }

            //   return selected.join(", ");
            // }}
            MenuProps={MenuProps}
            inputProps={{ "aria-label": "Without label" }}
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
          </Select> */}
          {/* {error && <FormHelperText>Select a value</FormHelperText>} */}
        </FormControl>
      </Box>
    </>
  );
}
