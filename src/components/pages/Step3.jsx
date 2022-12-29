import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import "../../style/Step1.css";
import Link from "@mui/material/Link";
import FormLabel from "@mui/joy/FormLabel";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RightSideImage from "../../assets/images/bg-image.png";
import Item from "antd/es/list/Item";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PastIcon from "../../assets/icons/past-icon.png";
import FriendIcon from "../../assets/icons/friend-icon.png";
import RecommendIcon from "../../assets/icons/recommend-icon.png";
import BlogIcon from "../../assets/icons/blog-icon.png";
import AdIcon from "../../assets/icons/ad-icon.png";
import InternetIcon from "../../assets/icons/internet-icon.png";
import OthersIcon from "../../assets/icons/others-icon.png";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  bgcolor: "background.paper",
  borderRadius: "23px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const url = "http://192.168.100.149:8000/api/business/";
  const [state, setState] = React.useState({ data: "" });
  const [process, setProcess] = React.useState("");
  const [hear, setHear] = React.useState("");

  const navigate = useNavigate();
  const theme = useTheme();
  const location = useLocation();

  const createBusiness = () => {
    console.log("Inside createBusiness");
    console.log(location.state, process, hear);
    try {
      axios
        .post(url, {
          business_name: location.state.business,
          mobile_number: location.state.mobile,
          business_type: location.state.businessType,
          industry_type: location.state.industry,
          employess_range: null,
          joining_purpose: location.state.purpose,
          payroll_type: location.state.payroll,
          pay_proces_improvement_duration: process,
          how_you_hear: hear,
        })
        .then((response) => {
          console.log("Signup API was hit succesfully");

          // Navigate to Home Screen
        });
    } catch (error) {
      console.log(error.response.data);
    }

    console.log(process, hear);
    // alert(process + hear);

    navigate("/about", {
      state: {
        business: location.state.business,
        mobile: location.state.mobile,
        businessType: location.state.businesstype,
        industry: location.state.industry,
        purpose: location.state.purpose,
        payroll: location.state.payroll,
        process: process,
        hear: hear,
      },
    });
  };

  const icons = [
    PastIcon,
    FriendIcon,
    RecommendIcon,
    BlogIcon,
    AdIcon,
    InternetIcon,
    OthersIcon,
  ];

  return (
    <div>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={0} square>
          <Box
            sx={{
              mt: 7,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              className="font-loader"
              component="h2"
              variant="body1"
              sx={{
                fontWeight: "Bold",
                fontSize: "43px",
                color: "#38B492",
              }}
            >
              UROSTERS
            </Typography>
            <Typography
              className="font-loader"
              component="h2"
              variant="body1"
              sx={{
                fontWeight: "Regular",
                fontSize: "20px",
                color: "#8D8D8F",
              }}
            >
              Step 3 of 3
            </Typography>
            <Typography
              className="lora-bold"
              component="h2"
              variant="body1"
              sx={{
                fontWeight: "Bold",
                fontSize: "46px",
                color: "#332A60",
              }}
            >
              Let us get to know you
            </Typography>
            <Typography
              className="font-loader"
              component="h2"
              variant="body1"
              sx={{
                fontWeight: "Regular",
                fontSize: "20px",
                color: "#8D8D8F",
              }}
            >
              We will personalize your trial experience
            </Typography>

            <Grid
              sx={{
                mt: 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#332A60",
                  }}
                >
                  When are you looking to improve the way you process you team's
                  pay?
                </Typography>
                {/* Put 3 radio buttons here */}
                <Grid
                  item
                  md={12}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <RadioGroup
                    aria-labelledby="storage-label"
                    defaultValue="As soon as possible"
                    overlay
                    size="lg"
                    sx={{ flexDirection: "row", gap: 1.5, mt: 2 }}
                    onChange={(e) => setProcess(e.target.value)}
                  >
                    {[
                      "As soon as possible",
                      "In the near future",
                      "Just looking around",
                    ].map((value) => (
                      <Sheet
                        key={value}
                        sx={{
                          p: 2,
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "16px",
                          boxShadow: "sm",
                          bgcolor: "background.body",
                          width: "228px",
                          height: "56px",
                        }}
                      >
                        <Radio
                          label={`${value}`}
                          overlay
                          disableIcon
                          value={value}
                          slotProps={{
                            label: ({ checked }) => ({
                              sx: {
                                fontWeight: "lg",
                                fontSize: "md",
                                color: checked
                                  ? "text.primary"
                                  : "text.secondary",
                              },
                            }),
                            action: ({ checked }) => ({
                              sx: (theme) => ({
                                ...(checked && {
                                  "--variant-borderWidth": "2px",
                                  "&&": {
                                    // && to increase the specificity to win the base :hover styles
                                    borderColor:
                                      theme.vars.palette.primary[500],
                                  },
                                }),
                              }),
                            }),
                          }}
                        />
                      </Sheet>
                    ))}
                  </RadioGroup>
                </Grid>
              </Grid>
            </Grid>

            <Typography
              sx={{
                mt: 5,
                fontWeight: "bold",
                fontSize: "18px",
                color: "#332A60",
              }}
            >
              How did you hear about UROSTER?
            </Typography>
            <Grid
              item
              md={12}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <RadioGroup
                aria-label="platform"
                defaultValue="Website"
                overlay
                size="lg"
                name="platform"
                sx={{
                  mt: 2,
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "row",
                  width: "1000px",
                  md: 12,
                  lg: 12,
                  gap: 2,
                  [`& .${radioClasses.checked}`]: {
                    [`& .${radioClasses.action}`]: {
                      inset: -1,
                      border: "3px solid",
                      borderColor: "primary.500",
                    },
                  },
                  [`& .${radioClasses.radio}`]: {
                    display: "contents",
                    "& > svg": {
                      zIndex: 2,
                      position: "absolute",
                      top: "-8px",
                      right: "-8px",
                      bgcolor: "background.body",
                      borderRadius: "50%",
                    },
                  },
                }}
                onChange={(e) => setHear(e.target.value)}
              >
                {[
                  "Using UROSTER in the past",
                  "Recommended from friend or colleague",
                  "Recommended from a business vendor",
                  "Read reviews or blog",
                  "Saw an ad about UROSTER",
                  "Searched the internet",
                  "Other",
                ].map((value, idx) => (
                  <Sheet
                    key={value}
                    variant="outlined"
                    md={3}
                    sx={{
                      borderRadius: "16px",
                      bgcolor: "background.body",
                      boxShadow: "sm",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "center",

                      gap: 1.5,
                      p: 2,
                      width: "120px",
                      height: "120px",
                    }}
                  >
                    <Radio
                      id={value}
                      value={value}
                      checkedIcon={<CheckCircleRoundedIcon />}
                    />
                    <Avatar
                      variant="rounded"
                      size="sm"
                      src={icons[idx]}
                      sx={{
                        height: "33.44px",
                        width: "34.42px",
                      }}
                    />
                    <FormLabel
                      htmlFor={value}
                      sx={{
                        fontSize: "16px",
                        fontWeight: "semibold",
                        minHeight: "30px",
                        mt: 1,
                      }}
                    >
                      {value}
                    </FormLabel>
                  </Sheet>
                ))}
              </RadioGroup>
            </Grid>
            {/* </Grid> */}
            <Link to="/step2" style={{ textDecoration: "none" }}>
              <Button
                type="submit"
                variant="contained"
                className="btn-forgetPwd btn-login"
                sx={{
                  mt: 4,
                  width: "182px",
                  height: "46px",
                  borderRadius: "10px",
                  justifyContent: "center",
                }}
                onClick={createBusiness}
              >
                Create Business
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={false} sm={4} md={5} sx={{ backgroundColor: "#FFFFFF" }}>
          <Avatar
            src={RightSideImage}
            aria-label="UROOSTER"
            sx={{
              height: "100vh",
              width: "100%",
              objectFit: "Fill",
              borderRadius: "0px !important",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
