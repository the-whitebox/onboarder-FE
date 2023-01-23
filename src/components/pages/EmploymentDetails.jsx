import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import EmploymentType from "../feature/EmploymentType";
import PayRate from "../feature/PayRate";

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

export default function EmploymentDetails() {
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
      <Box
        sx={{
          pt: 5,
          pl: 33,
          pb: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" fontWeight="Bold">
          Employment Details
        </Typography>
        <Button variant="outlined" backgroundColor="#38b492">
          Save
        </Button>
      </Box>
      <Box sx={{ pl: 33, pb: 2 }}>
        <Typography variant="h6" fontWeight="Bold">
          Asher Muneer
        </Typography>
      </Box>
      <Box sx={{ pl: 33, pb: 2 }}>
        <Button>Asher Muneer</Button>
        <Button>Pay Details</Button>
        <Button>Working Hours</Button>
        <Button>Leave Entitlements</Button>
      </Box>
      <Box sx={{ pl: 33, pt: 2, pb: 2 }}>
        <Typography variant="h6" fontWeight="Bold">
          Work Details
        </Typography>
      </Box>
      <Box sx={{ pl: 33, display: "flex" }}>
        <Typography variant="h6" fontWeight="Bold">
          Access Level
        </Typography>
        <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
          <Select
            multiple
            displayEmpty
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em>Select</em>;
              }

              return selected.join(", ");
            }}
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
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ pl: 33, pt: 2, pb: 2 }}>
        <Typography paragraph>
          A set of permissions that control what a team member can do in
          Urosters. About access levels
        </Typography>
      </Box>
      <Box sx={{ pl: 33, pt: 2, pb: 2, display: "flex" }}>
        <Typography variant="h6" fontWeight="Bold">
          Works at
        </Typography>
        <Typography paragraph>
          Talha's professional service Primary location
        </Typography>
      </Box>
      <Box sx={{ pl: 33, pt: 2, pb: 2, display: "flex" }}>
        <Typography paragraph>
          Locations where a team member can be scheduled.
        </Typography>
        <Button>Add locations</Button>
      </Box>
      <Box sx={{ pl: 33, pt: 2, pb: 2, display: "flex" }}>
        <Typography variant="h6" fontWeight="Bold">
          Hired on
        </Typography>
        {/*add a calender*/}
      </Box>
      <Box sx={{ pl: 33, pt: 2, pb: 2, display: "flex" }}>
        <Typography variant="h6" fontWeight="Bold">
          Training
        </Typography>
        <Button>Add training</Button>
      </Box>
      <Box sx={{ pl: 33, pt: 2, pb: 2 }}>
        <Typography paragraph>
          Training allows a team member to work in areas with training
          requirements. <Link>About training</Link>
        </Typography>
      </Box>
      <Box sx={{ pl: 33, pt: 2, pb: 2 }}>
        <Typography variant="h6" fontWeight="Bold">
          Pay Details
        </Typography>
        <EmploymentType />
        <PayRate />
      </Box>
    </>
  );
}
