import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Avatar,
  Select,
  MenuItem,
  Divider,
  TextField,
  Switch,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Capture from "../../assets/images/bg-image8.png";
import icon from "../../assets/icons/Path 1061.png";
import icon1 from "../../assets/icons/Group 696.png";
import icon2 from "../../assets/icons/Group 697.png";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const rows = [
  { id: 1, name: "Name", email: "Optional", phone: "Optional" },
  { id: 1, name: "Name", email: "Optional", phone: "Optional" },
  { id: 1, name: "Name", email: "Optional", phone: "Optional" },
];

function AddPeopleManually() {
  return (
    <>
      <Grid
        container
        sx={{
          justifyContent: "center",
          overflowY: "scroll",
          height: "91vh",
          pb: 10,
        }}
      >
        <Grid item xl={9} lg={9} md={10} sm={12} xs={12}>
          <Typography
            sx={{ color: "#354052", fontSize: "20px", textAlign: "center" }}
          >
            Add New Team Members
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 2,
              background: "#E6F4EB",
              py: 2,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  color: "#2BB491",
                }}
              >
                Invite with link
              </Typography>
              <Typography sx={{ mt: "5px", fontSize: "14px" }}>
                Share a link with your team to get them on to your Deputy
                workplace.
                <br /> You approve each request to keep your Deputy secure.
              </Typography>
              <Box
                sx={{
                  mt: 1,
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Button
                  className="all-green-btns"
                  variant="contained"
                  sx={{
                    color: "white",
                    textTransform: "none",
                    borderColor: "10px",
                  }}
                >
                  Generate Link
                </Button>
                <Typography sx={{ color: "#2BB491", ml: 2 }}>
                  How invite links work
                </Typography>
              </Box>
            </Box>
            <Avatar
              src={Capture}
              sx={{
                height: "150px",
                width: "150px",
                ml: 5,
              }}
              variant="rounded"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8} sx={{ mt: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src={icon}
                  sx={{ borderRadius: 0, width: "20px", height: "20px" }}
                />
                <Typography sx={{ colr: "#131523", fontSize: "20px", ml: 1 }}>
                  Add Manually
                </Typography>
              </Box>
              <Box sx={{ pl: 3, mt: 3 }}>
                <Typography
                  sx={{
                    fontSize: "12px",
                    color: "#131523",
                  }}
                >
                  These People Work at
                </Typography>
                <Select
                  name="select"
                  displayEmpty
                  size="small"
                  variant="standard"
                  disableUnderline
                  sx={{
                    "& .MuiSelect-select": {
                      p: "5px 15px 5px 15px",
                      background: "none",
                    },
                    "& .MuiSelect-icon": { right: "5px" },
                    borderRadius: "25px",
                    border: "none !important",
                    outline: "none !important",
                    background: "#e6f4eb",
                    boxSizing: "border-box",
                    mt: 1,
                    width: "250px",
                  }}
                >
                  <MenuItem>Company name</MenuItem>
                </Select>
                <Typography sx={{ fontSize: "12px", color: "#354052", mt: 3 }}>
                  Choose a location for your new people and then add as many as
                  you want by typing their names and email addresses. You can
                  always edit someone's details later, so don't worry if you
                  can't remember everything.
                </Typography>
              </Box>
              <Box
                sx={{
                  bgcolor: "#F7F7F7",
                  width: "100%",
                  height: "150px",
                  mt: 1,
                  borderRadius: "15px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  px: 3,
                  boxSizing: "border-box",
                }}
              >
                <Avatar
                  src={icon2}
                  sx={{ width: "100px", height: "100px", borderRadius: 0 }}
                />
                <Button
                  component="label"
                  sx={{
                    textTransform: "none",
                    border: "1px solid #A2A2A2",
                    bgcolor: "#FFFFFF",
                    borderRadius: "5px",
                    p: "5px 15px",
                    color: "black",
                  }}
                >
                  Import or Upload a file{" "}
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
                <Avatar
                  src={icon1}
                  sx={{ width: "100px", height: "100px", borderRadius: 0 }}
                />
              </Box>
            </Grid>
          </Box>
          <Divider sx={{ mt: 2 }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8} sx={{ mt: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Grid item xl={3} lg={3.5} md={3}>
                  Name
                </Grid>
                <Grid item xl={3} lg={3.5} md={3}>
                  Email
                </Grid>
                <Grid item xl={3} lg={3.5} md={3}>
                  Phone
                </Grid>
                <Grid item xl={2} lg={1} md={1}></Grid>
              </Box>
              {rows?.map((data) => (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 1,
                  }}
                >
                  <Grid item xl={3} lg={3.5} md={3}>
                    <TextField
                      fullWidth
                      type="text"
                      name="firstname"
                      size="small"
                      placeholder="Please input"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      sx={{
                        p: "5px 10px 2px 10px",
                        borderRadius: "25px",
                        border: "none",
                        outline: "none ",
                        background: "#e6f4eb",
                        boxSizing: "border-box",
                      }}
                      value={data.name}
                    />
                  </Grid>
                  <Grid item xl={3} lg={3.5} md={3}>
                    <TextField
                      fullWidth
                      type="text"
                      name="firstname"
                      size="small"
                      placeholder="Please input"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      sx={{
                        p: "5px 10px 2px 10px",
                        borderRadius: "25px",
                        border: "none",
                        outline: "none ",
                        background: "#e6f4eb",
                        boxSizing: "border-box",
                      }}
                      value={data.email}
                    />
                  </Grid>
                  <Grid item xl={3} lg={3.5} md={3}>
                    <TextField
                      fullWidth
                      type="text"
                      name="firstname"
                      size="small"
                      placeholder="Please input"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      sx={{
                        p: "5px 10px 2px 10px",
                        borderRadius: "25px",
                        border: "none",
                        outline: "none ",
                        background: "#e6f4eb",
                        boxSizing: "border-box",
                      }}
                      value={data.phone}
                    />
                  </Grid>
                  <Grid item xl={2} lg={1} md={1}>
                    <DeleteOutlinedIcon sx={{ cursor: "pointer" }} />
                  </Grid>
                </Box>
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} sm={12} md={8} lg={8} xl={8} sx={{ mt: 2 }}>
              <Button
                sx={{
                  bgcolor: "#f7f7f7",
                  borderRadius: "7px",
                  textTransform: "none",
                  color: "#131523",
                  fontSize: "12px",
                  width: "90%",
                  py: "10px",
                }}
              >
                Add more people{" "}
                <AddCircleOutlineOutlinedIcon
                  sx={{ cursor: "pointer", ml: 3 }}
                />
              </Button>
            </Grid>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              lg={8}
              xl={8}
              sx={{
                mt: 3,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ color: "#131523", fontSize: "12px" }}>
                Send invitation Email [?]
                <Switch defaultChecked size="small" />
              </Box>
              <Box>
                <Button
                  sx={{
                    bgcolor: "#e6f4eb",
                    borderRadius: "7px",
                    textTransform: "none",
                    color: "#2bb491",
                    fontSize: "12px",
                    p: "8px 15px",
                    mr: 2,
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  className="all-green-btns"
                  sx={{
                    bgcolor: "#2bb491",
                    borderRadius: "7px",
                    textTransform: "none",
                    color: "white",
                    fontSize: "12px",
                    p: "8px 15px",
                  }}
                >
                  Add People
                </Button>
              </Box>
            </Grid>
          </Box>
          <Divider sx={{ mt: 3, mb: 2 }} />
        </Grid>
      </Grid>
    </>
  );
}

export default AddPeopleManually;
