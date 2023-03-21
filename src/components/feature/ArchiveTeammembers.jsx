import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import CloseIcon from "@mui/icons-material/Close";
import "../../style/Archiveteam.css";
import InfoIcon from "@mui/icons-material/Info";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px ",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function SyncPayroll() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const token = process.env.REACT_APP_TEMP_TOKEN;
  const url = process.env.REACT_APP_BASE_URL;
  const [businessId, setBusinessId] = useState("");
  const [listOfTeamMembers, setListOfTeamMembers] = React.useState([]);

  let b_id = "";
  let team_array = [];
  const getBusiness = async () => {
    try {
      const response = await axios
        .get(url + "/business/", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          console.log(response.data);
          const ids = response.data.map((obj) => obj.id);
          const firstId = ids[0];
          setBusinessId(firstId);
          b_id = firstId;
          // console.log("First Id: ", firstId);
        });

      // console.log({ businessId });

      const teamResponse = await axios.get(
        url + `/people/?business_id=${b_id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const teamMembers = teamResponse.data;
      // console.log({ teamMembers });
      team_array = teamMembers;
      setListOfTeamMembers(teamMembers);

      // console.log({ listOfTeamMembers });
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getBusiness();
  }, []);

  // getBusiness();

  console.log("The rows", listOfTeamMembers);
  const rows = team_array;
  // console.log("The array of Objects: ", rows);

  return (
    <React.Fragment>
      <Box sx={{ ...style, width: 550, height: 430 }}>
        <Box className="flex flex-row" sx={{ width: "500px" }}>
          <h2>Archive Team members</h2>
          <CloseIcon onClick={handleClose} sx={{ mb: 6 }}></CloseIcon>
        </Box>

        <div>
          <Typography sx={{ color: "#b4b4b4", ml: 1 }}>
            2 Team members
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <InfoIcon
              sx={{
                fontSize: "medium",
                color: "Gray",
                mt: "12px",
                ml: "12px",
              }}
            />
            <Typography
              sx={{
                ml: "5px",
                pb: "15px",
                mt: "10px",
              }}
            >
              Archiving these people will revoke their access to this
              organization and will no longer be able to login to any device but
              historical records will be retained.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ pt: 2, pb: 2, mr: 1, pl: 2, fontWeight: "bold" }}>
              AM
            </Typography>
            <Typography sx={{ pt: 2, pb: 2, ml: 4, fontWeight: "bold" }}>
              Asher Muneer
            </Typography>
            <Typography sx={{ pt: 2, pb: 2, ml: 20, color: "#a1a1a1" }}>
              Ready to Archive
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Typography sx={{ pt: 2, pb: 2, ml: 2, fontWeight: "bold" }}>
              ss
            </Typography>
            <Typography sx={{ pt: 2, pb: 2, ml: 6, fontWeight: "bold" }}>
              sss sss
            </Typography>
            <Typography sx={{ pt: 2, pb: 2, ml: 26, color: "#a1a1a1" }}>
              Ready to Archive
            </Typography>
          </Box>
        </div>

        <Button
          className="button"
          sx={{
            textTransform: "none",
            ml: 35,
            borderRadius: "7px",
            mt: 4,
            width: "210px",
          }}
        >
          Archive Team members
        </Button>
      </Box>
    </React.Fragment>
  );
}
