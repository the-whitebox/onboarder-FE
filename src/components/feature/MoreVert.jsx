import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const MoreVert = () => {
  const [Icon, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={Icon}
      label="Icon"
      onChange={handleChange}
    >
      <MenuItem value={10}>Agreed hours</MenuItem>
      <MenuItem value={20}>Access level</MenuItem>
      <MenuItem value={30}>Archive team</MenuItem>
    </Select>
  );
};
