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
import MaxPilotLogo from "../../assets/logos/maxpilot-logo.svg";
import Icon1 from "../../assets/icons/health-icon.png";
import Icon2 from "../../assets/icons/retail-icon.png";
import Icon3 from "../../assets/icons/services-icon.png";
import Icon4 from "../../assets/icons/charity-icon.png";
import Icon5 from "../../assets/icons/others-icon.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
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
  const [state, setState] = React.useState({ data: "" });
  const [business, setBusiness] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [businesstype, setBusinesstype] = React.useState("");
  const [businessId, setBusinesstypeID] = React.useState("");
  const [industry, setIndustry] = React.useState("");
  const [industryId, setIndustryID] = React.useState("");
  const [industryData, setIndustryData] = useState([]);
  const [error, setError] = React.useState(null);
  const [businessError, setBusinessError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [businessTypeError, setBusinessTypeError] = useState("");
  const [industryError, setIndustryError] = useState("");

  const token = localStorage.getItem("token");
  const url = process.env.REACT_APP_BASE_URL;
  let subIndustries = "";

  const businesses = [
    "Healthcare",
    "Retail & Hospitality",
    "Services",
    "Charity",
    "Other",
  ];

  const industries = {
    Healthcare: ["f", "g", "l"],
    "Retail & Hospitality": ["a", "b"],
    Services: ["tr", "trt", "rtt"],
    Charity: ["abc", "def"],
    Other: ["aik", "bot"],
  };

  const getIndustries = async () => {
    try {
      // debugger
      if (businesstype === "Retail & Hospitality") {
        setBusinesstype(encodeURIComponent(businesstype));
      }
      await axios
        .get(url + `/EnumsReturn/?group=${businesstype}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log("getting from api", res.data);

          setIndustryData(res.data);
          subIndustries = res.data;
          // console.log("Sub Industries data", subIndustries)
        })
        .catch((err) => console.log(err));
    } catch (error) {
      console.log("Error", error);
    }
  };

  const theme = useTheme();
  const [age, setAge] = React.useState("");

  const businessValidation = () => {
    if (business == "") {
      setBusinessError("Please enter a business name");
    } else setBusinessError("");
  };

  const mobileValidation = () => {
    if (mobile == "") {
      setMobileError("Please enter your mobile number");
    } else setMobileError("");
  };

  const businessTypeValidation = () => {
    if (businesstype == "") {
      setBusinessTypeError("Please describe your business type");
    } else setBusinessTypeError("");
  };

  const industryValidation = () => {
    if (industry == "") {
      setIndustryError("Please describe your industry");
    } else setIndustryError("");
  };

  const {
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const toStep2 = (e) => {
    if (
      business !== "" &&
      mobile !== "" &&
      businesstype !== "" &&
      industry !== ""
    ) {
      console.log("Data Found");
      setError(false);
      console.log(mobile, business, businessId, industryId);
      // alert(mobile + business + businesstype + industry);

      navigate("/step2", {
        state: {
          business: business,
          mobile: mobile,
          businesstype: businessId,
          industry: industryId,
        },
      });
    } else {
      setError(true);
      setState({ data: e.target.value });
    }
  };

  // const changeState = () => {
  //   // setState({
  //   //   data: `state/props of parent component
  //   // is send by onClick event to another component`,
  //   // });

  //   setBusiness
  // };

  useEffect(() => {
    getIndustries();
  }, [businesstype]);

  const businessTypeChange = (e) => {
    const tempid = parseInt(e.target.id) + 1;
    setBusinesstype(e.target.value);
    setBusinesstypeID(tempid);
    // console.log(tempid);

    // console.log({ industryData });
    // console.log(e.target.value)
  };
  const changeIndustry = (e) => {
    setIndustry(e.target.value);
    setIndustryID(parseInt(e.target.value) + 1);
  };

  // const industryChange = (e) => {
  //   setIndustry(e.target.value);
  // };

  const icons = [Icon1, Icon2, Icon3, Icon4, Icon5];

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
              MaxPilot
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
              Step 1 of 3
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
              Tell us a bit about your business
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
                  What is your business?
                </Typography>
                <TextField
                  id="business"
                  required="true"
                  variant="outlined"
                  {...register("Business", { required: true })}
                  onChange={(e) => setBusiness(e.target.value)}
                  sx={{
                    width: "90%",
                  }}
                />
                {errors.business?.type === "required" && "Business Required"}
                <small>
                  {businessError && (
                    <div
                      style={{
                        color: "red",
                      }}
                    >
                      {businessError}
                    </div>
                  )}
                </small>
              </Grid>

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
                  What is your mobile number?
                </Typography>
                <TextField
                  id="mobile-number"
                  variant="outlined"
                  {...register("Mobile", { required: true })}
                  sx={{
                    width: "90%",
                  }}
                  onChange={(e) => setMobile(e.target.value)}
                />
                {errors.mobile?.type === "required" && "Mobile Required"}
                <small>
                  {mobileError && (
                    <div
                      style={{
                        color: "red",
                      }}
                    >
                      {mobileError}
                    </div>
                  )}
                </small>
              </Grid>
            </Grid>
            <Typography
              sx={{
                mt: 2,
                fontWeight: "bold",
                fontSize: "18px",
                color: "#332A60",
              }}
            >
              What best describes your business?
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
                name="platform"
                sx={{
                  mt: 2,
                  flexWrap: "wrap",
                  flexDirection: "row",
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
                {...register("Business Type", { required: true })}
                onChange={businessTypeChange}
              >
                {[
                  "Health Care",
                  "Retail & Hospitality",
                  "Services",
                  "Charity",
                  "Other",
                ].map((value, idx) => (
                  <Sheet
                    key={idx}
                    variant="outlined"
                    sx={{
                      borderRadius: "md",
                      bgcolor: "background.body",
                      boxShadow: "sm",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1.5,
                      p: 2,
                      width: "120px",
                      height: "100px",
                    }}
                  >
                    <Radio
                      id={idx}
                      value={value}
                      checkedIcon={<CheckCircleRoundedIcon />}
                    />
                    <Avatar variant="circular" size="sm" src={icons[idx]} />
                    <FormLabel htmlFor={value} sx={{ fontSize: "10px" }}>
                      {value}
                    </FormLabel>
                  </Sheet>
                ))}
              </RadioGroup>
            </Grid>
            {errors.businesstype?.type === "required" &&
              "Business Type Required"}
            <small>
              {businessTypeError && (
                <div
                  style={{
                    color: "red",
                  }}
                >
                  {businessTypeError}
                </div>
              )}
            </small>
            <Typography
              sx={{
                mt: 2,
                fontWeight: "bold",
                fontSize: "18px",
                color: "#332A60",
              }}
            >
              Select your industry
            </Typography>
            <FormControl sx={{ width: "30%", mt: 2 }}>
              <InputLabel id="demo-simple-select-label">Industry</InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={industry}
                label="Industry"
                {...register("Industry", { required: true })}
                onChange={changeIndustry}
              >
                {businesstype &&
                  industryData.map((industry, idx) => (
                    <MenuItem value={idx}>{industry["name"]}</MenuItem>
                  ))}
              </Select>
            </FormControl>
            {errors.industry?.type === "required" && "Industry Required"}
            <small>
              {industryError && (
                <div
                  style={{
                    color: "red",
                  }}
                >
                  {industryError}
                </div>
              )}
            </small>

            <Button
              type="submit"
              variant="contained"
              className="btn-forgetPwd btn-login"
              sx={{
                mt: 4,
                width: "89px",
                borderRadius: "10px",
                justifyContent: "center",
              }}
              data={state.data}
              onClick={() => {
                businessValidation();
                mobileValidation();
                businessTypeValidation();
                industryValidation();
                toStep2();
              }}
            >
              Next
            </Button>
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
