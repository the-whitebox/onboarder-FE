import * as React from "react";
import SetAccessLevelModalBody from "../feature/SetAccessLevel";
import ArchiveTeamMemberModalBody from "../feature/ArchiveTeammembers";
import SetAgreedHoursModalBody from "../feature/SetAgreedhours";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const modalWrapper = {
  overflow: "auto",
  display: "flex",
};

export default function BulkActions(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openAccess, setOpenAccess] = React.useState(false);
  const handleOpenAccess = () => setOpenAccess(true);
  const handleCloseAccess = () => setOpenAccess(false);

  const [openArchive, setOpenArchive] = React.useState(false);
  const handleOpenArchive = () => setOpenArchive(true);
  const handleCloseArchive = () => setOpenArchive(false);

  const [openWorkPeriod, setOpenWorkPeriod] = React.useState(false);
  const handleOpenWorkPeriod = () => setOpenWorkPeriod(true);
  const handleCloseWorkPeriod = () => setOpenWorkPeriod(false);

  return (
    <React.Fragment>
      <Modal
        open={openAccess}
        onClose={handleCloseAccess}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <SetAccessLevelModalBody
          selectedTeamMembers={props.selectedTeamMembers}
          handleClose={handleCloseAccess}
        />
      </Modal>

      <Modal
        open={openArchive}
        onClose={handleCloseArchive}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ArchiveTeamMemberModalBody
          selectedTeamMembers={props.selectedTeamMembers}
          handleClose={handleCloseArchive}
        />
      </Modal>

      <Modal
        open={openWorkPeriod}
        sx={modalWrapper}
        onClose={handleCloseWorkPeriod}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <SetAgreedHoursModalBody
          selectedTeamMembers={props.selectedTeamMembers}
          handleClose={handleCloseWorkPeriod}
        />
      </Modal>

      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "black", textTransform: "none" }}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Bulk actions
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleOpenWorkPeriod}>Agreed Hours</MenuItem>
        <MenuItem onClick={handleOpenAccess}>Access Level</MenuItem>
        <MenuItem onClick={handleOpenArchive}>Archive Team</MenuItem>
      </Menu>
    </React.Fragment>
  );
}
