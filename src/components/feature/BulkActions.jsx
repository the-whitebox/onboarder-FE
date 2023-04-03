import * as React from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import SetAccessLevelModalBody from "../feature/SetAccessLevel";
import ArchiveTeamMemberModalBody from "../feature/ArchiveTeammembers";
import SetAgreedHoursModalBody from "../feature/SetAgreedhours";
import Modal from "@mui/material/Modal";

export default function BulkActions(props) {
  const [people, setPeople] = React.useState("");

  const handleChange = (event) => {
    setPeople(event.target.value);
  };

  const [openAccess, setOpenAccess] = React.useState(false);
  const handleOpenAccess = () => setOpenAccess(true);
  const handleCloseAccess = () => setOpenAccess(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [openWorkPeriod, setOpenWorkPeriod] = React.useState(false);
  const handleOpenWorkPeriod = () => setOpenWorkPeriod(true);
  const handleCloseWorkPeriod = () => setOpenWorkPeriod(false);
  const modalWrapper = {
    overflow: "auto",
    display: "flex",
  };

  return (
    <React.Fragment>
      <Modal
        open={openAccess}
        onClose={handleCloseAccess}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <SetAccessLevelModalBody handleClose={handleCloseAccess} />
      </Modal>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ArchiveTeamMemberModalBody
          listOfTeamMembers={props.listOfTeamMembers}
          handleClose={handleClose}
        />
      </Modal>

      <Modal
        open={openWorkPeriod}
        sx={modalWrapper}
        onClose={handleCloseWorkPeriod}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <SetAgreedHoursModalBody handleClose={handleCloseWorkPeriod} />
      </Modal>

      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Bulk Actions
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={people}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <Link
              sx={{ textDecoration: "none" }}
              onClick={handleOpenWorkPeriod}
              color="#38b492"
            >
              Agreed hours
            </Link>
          </MenuItem>

          <MenuItem>
            <Link
              sx={{ textDecoration: "none" }}
              onClick={handleOpenAccess}
              color="#38b492"
            >
              Access level
            </Link>
          </MenuItem>
          <MenuItem>
            <Link
              sx={{ textDecoration: "none" }}
              onClick={handleOpen}
              color="#38b492"
            >
              Archive team
            </Link>
          </MenuItem>
        </Select>
      </FormControl>
    </React.Fragment>
  );
}
