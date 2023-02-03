import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
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
  // border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
  borderRadius: "12px",
  padding: "20px",
};

export default function Addleaveentitlement() {
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
      <Button onClick={handleOpen}>Add leave entitlement </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 380, height: 240 }}>
          <span
            onclick="document.getElementById('id01').style.display='none'"
            class="close"
            title="Close Modal"
          >
            ×
          </span>
          <h1 id="child-modal-title" className="Access">
            Add leave entitlement
          </h1>
          <div>
            <p className="team">
              Adding leave entitlement for 0 team members. 2 team members wil
              not assigned the leave entitlement because they don't have a pay
              rate.
            </p>
            <p className="Access-level">leave entitlement</p>
            <FormControl
              sx={{
                m: "19px 0",
                width: 200,
                height: 5,
                mt: -2,
                padding: "10px",
              }}
            >
              <Select
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
            sx={{
              ml: 35,
              borderRadius: "8px",
              width: "20%",
              // justifyContent: "center",
              bgcolor: "#38b492",
              color: "white",
            }}
            onClick={handleClose}
          >
            Update
          </Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
