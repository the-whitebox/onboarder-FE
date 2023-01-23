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
import ScheduleIcon from "../../assets/icons/schedule-icon.png";
import TrackHoursIcon from "../../assets/icons/trackHours-icon.png";
import PayIcon from "../../assets/icons/pay-icon.png";
import XeroIcon from "../../assets/icons/xero-icon.png";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";

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

export default function BasicModal(props) {
  const [state, setState] = React.useState({ data: "" });
  const [purpose, setPurpose] = React.useState("");
  const [payroll, setPayroll] = React.useState("");
  const [error, setError] = React.useState(null);
  const [purposeError, setPurposeError] = useState("");
  const [payrollError, setPayrollError] = useState("");

  const navigate = useNavigate();

  const theme = useTheme();
  const location = useLocation();

  const purposeValidation = () => {
    if (purpose == "") {
      setPurposeError("What is the purpose to join?");
    } else setPurposeError("");
  };

  const payrollValidation = () => {
    if (payroll == "") {
      setPayrollError("Please provide a payroll");
    } else setPayrollError("");
  };

  const {
    register,
    formState: { errors },
  } = useForm();

  const toStep3 = (e) => {
    e.preventDefault();
    console.log("to step", purpose, payroll);
    if (purpose !== "" && payroll !== "") {
      console.log("Data Found");
      setError(false);
      console.log(purpose, payroll);

      // alert(payroll + purpose);

      navigate("/step3", {
        state: {
          business: location.state.business,
          mobile: location.state.mobile,
          businessType: location.state.businesstype,
          industry: location.state.industry,
          purpose: purpose,
          payroll: payroll,
        },
      });
    } else {
      setError(true);
      setState({ data: e.target.value });
    }
  };

  const icons = [ScheduleIcon, TrackHoursIcon, PayIcon];
  const description = [
    "I want to know my teams availability, so I can create and share schedules",
    "I want a record of when my team works, so I can pay them correctly",
    "I want to be able to process pay cycle without headaches",
  ];

  // console.log(props);

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
              Step 2 of 3
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
                  What brings you to UROSTERS?
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
                    aria-label="platform"
                    defaultValue="Website"
                    overlay
                    name="platform"
                    sx={{
                      mt: 2,
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
                    {...register("Purpose", { required: true })}
                    onChange={(e) => setPurpose(e.target.value)}
                  >
                    {[
                      "Save time scheduling",
                      "Track hours worked",
                      "Process your team's pay",
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
                          alignItems: "flex-start",
                          justifyContent: "center",
                          gap: 1.5,
                          p: 2,
                          width: "223px",
                          height: "220px",
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
                          sx={{ height: "30px", width: "30px" }}
                        />
                        <FormLabel
                          htmlFor={value}
                          sx={{
                            fontSize: "16px",
                            fontWeight: "bold",

                            mt: 1,
                          }}
                        >
                          {value}
                        </FormLabel>
                        <Typography
                          sx={{
                            fontWeight: "Regular",
                            fontSize: "15px",
                            color: "#8D8D8F",
                            mt: 1,
                          }}
                        >
                          {description[idx]}
                        </Typography>
                      </Sheet>
                    ))}
                  </RadioGroup>
                </Grid>
                {errors.purpose?.type === "required" && "Purpose Required"}
                <small>
                  {purposeError && (
                    <div
                      style={{
                        color: "red",
                      }}
                    >
                      {purposeError}
                    </div>
                  )}
                </small>
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
              What payroll provider do you use?
            </Typography>
            <Typography
              className="font-loader"
              component="h2"
              variant="body1"
              sx={{
                fontWeight: "Regular",
                fontSize: "18px",
                color: "#8D8D8F",
                mt: 1,
              }}
            >
              We'll send you some tips on how you can integrate your payroll
              provide with UROSTERS
            </Typography>
            <RadioGroup
              aria-labelledby="storage-label"
              // defaultValue="XERO"
              overlay
              size="lg"
              sx={{
                flexDirection: "row",
                gap: 1.5,
                mt: 2,
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
              {...register("Payroll", { required: true })}
              onChange={(e) => setPayroll(e.target.value)}
            >
              {["XERO"].map((value, idx) => (
                <Sheet
                  key={idx}
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "md",
                    boxShadow: "sm",
                    bgcolor: "background.body",
                  }}
                >
                  <Avatar
                    variant="rounded"
                    size="sm"
                    src={XeroIcon}
                    sx={{ mr: 1 }}
                  />
                  <Radio
                    id={value}
                    label={`${value}`}
                    overlay
                    disableIcon
                    value={value}
                    checkedIcon={<CheckCircleRoundedIcon />}
                    // slotProps={{
                    //   label: ({ checked }) => ({
                    //     sx: {
                    //       fontWeight: "lg",
                    //       fontSize: "md",
                    //       color: checked ? "text.primary" : "text.secondary",
                    //     },
                    //   }),

                    // action: ({ checked }) => ({
                    //   sx: (theme) => ({
                    //     ...(checked && {
                    //       "--variant-borderWidth": "2px",
                    //       "&&": {
                    //         // && to increase the specificity to win the base :hover styles
                    //         borderColor: theme.vars.palette.primary[500],
                    //       },
                    //     }),
                    //   }),
                    // }),
                    // }}
                  />
                </Sheet>
              ))}
            </RadioGroup>
            {errors.payroll?.type === "required" && "Payroll Required"}
            <small>
              {payrollError && (
                <div
                  style={{
                    color: "red",
                  }}
                >
                  {payrollError}
                </div>
              )}
            </small>
            <Link to="/step3" style={{ textDecoration: "none" }}>
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
                onClick={(e) => {
                  purposeValidation();
                  payrollValidation();
                  toStep3(e);
                }}
              >
                Next
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
