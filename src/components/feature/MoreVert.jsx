import * as React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import SetAccessLevelModalBody from "../feature/SetAccessLevel";
import ArchiveTeamMemberModalBody from "../feature/ArchiveTeammembers";
import SetAgreedHoursModalBody from "../feature/SetAgreedhours";
import Modal from "@mui/material/Modal";

export const MoreVert = () => {
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
        onClick={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <SetAccessLevelModalBody />
      </Modal>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ArchiveTeamMemberModalBody />
      </Modal>

      <Modal
        open={openWorkPeriod}
        sx={modalWrapper}
        onClose={handleCloseWorkPeriod}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <SetAgreedHoursModalBody />
      </Modal>

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
          {" "}
          <Link
            sx={{ textDecoration: "none" }}
            onClick={handleOpenAccess}
            color="#38b492"
          >
            Access level
          </Link>
        </MenuItem>
        <MenuItem>
          {" "}
          <Link
            sx={{ textDecoration: "none" }}
            onClick={handleOpen}
            color="#38b492"
          >
            Archive team
          </Link>
        </MenuItem>
      </Select>
    </React.Fragment>
  );
};
