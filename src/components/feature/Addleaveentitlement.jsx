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
import CloseIcon from "@mui/icons-material/Close";

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

export default function Addleaveentitlement() {
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
    <React.Fragment>
      <Box sx={{ ...style, width: 430, height: 380 }}>
        <CloseIcon sx={{ float: "right" }}></CloseIcon>
        <Typography
          variant="h5"
          sx={{ mt: 2, fontWeight: "bold", paddingBottom: 1 }}
          id="child-modal-title"
        >
          Add leave entitlement
        </Typography>

        <div>
          <Typography sx={{ fontSize: "14px" }}>
            Adding leave entitlement for 0 team members. 2 team members wil not
            assigned the leave entitlement because they don't have a pay rate.
          </Typography>
          <p className="Access-level">Leave entitlement</p>
          <FormControl
            sx={{
              width: 200,
              borderRadius: "2px",
              ml: "5px",
            }}
          >
            <Select
              sx={{ borderRadius: "7px" }}
              size="small"
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
        </div>
        <Button
          variant="primary"
          className="btn btn-primary"
          sx={{
            ml: 44,
            borderRadius: "5px",
            width: "18%",
            mt: "120px",
            textTransform: "none",
          }}
        >
          Add
        </Button>
      </Box>
    </React.Fragment>
  );
}
