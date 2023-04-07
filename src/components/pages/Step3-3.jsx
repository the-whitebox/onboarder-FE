import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import FormLabel from "@mui/joy/FormLabel";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import maxpilot from "../../assets/images/maxpilot-logo.png";
import { Avatar } from "@mui/material";
import ScheduleIcon from "../../assets/icons/schedule-icon.png";
import TrackHoursIcon from "../../assets/icons/trackHours-icon.png";
import PayIcon from "../../assets/icons/pay-icon.png";
import XeroIcon from "../../assets/icons/xero-icon.png";
import bg_image5 from "../../assets/images/bg-image5.png";
import "react-phone-number-input/style.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
const formSchema = Yup.object({
  purpose: Yup.string().required("What is the purpose to join?"),
  payroll: Yup.string().required("Please provide a payroll"),
});
const initialValues = {
  purpose: "",
  payroll: "",
};

const icons = [ScheduleIcon, TrackHoursIcon, PayIcon];

export default function Step3_3() {
  const url = process.env.REACT_APP_BASE_URL;
  const Navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = React.useState(false);

  const { errors, touched, handleBlur, setFieldValue, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: formSchema,
      onSubmit: async (values, action) => {
        setLoading(true);
        await axios
          .post(`${url}/business/`, {
            business_name: location.state.business,
            mobile_number: location.state.mobile,
            business_type: location.state.businessType,
            industry_type: location.state.industry,
            employess_range: location.state.employees,
            joining_purpose: values.purpose,
            payroll_type: values.payroll,
          })
          .then((response) => {
            if (response.status === 201) {
              Navigate("/step3-4");
              setLoading(false);
            }
          })
          .catch((error) => {
            console.log("Error", error.response);
            setLoading(false);
          });
      },
    });

  const handlePurposeChange = (e) => {
    setFieldValue("purpose", parseInt(e.target.id));
  };

  const handlePayrollChange = (e) => {
    setFieldValue("payroll", parseInt(e.target.id));
  };

  const description = [
    {
      name: "Save Time Schedule",
      des: "I want to know my teams availability, so I can create and share schedules",
    },
    {
      name: "Track hours work",
      des: "I want a record of when my team works, so I can pay them correctly",
    },
    {
      name: "Process your team's pay",
      des: "I want to be able to process pay cycle without headaches",
    },
  ];
  const payrollArr = [
    {
      name: "SOME TEXT HERE",
      des: "TEXT HERE...",
    },
  ];
  return (
    <>
      <Grid container sx={{ pb: { xs: 5, md: 0 } }}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mr: { xl: 10, lg: 10, md: 5, sm: 1, xs: 1 },
              ml: 2,
              py: 2,
            }}
          >
            <Avatar
              src={maxpilot}
              aria-label="Busy Man"
              sx={{
                width: "100px",
                height: "auto",
                padding: "0px",
                margin: "0px",
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: { md: "center", xs: "flex-end" },
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "flex-end",
              }}
            >
              <Typography
                sx={{
                  fontSize: { md: "12px", xs: "10px" },
                  mr: { md: 2, xs: 0 },
                }}
              >
                STEP 3 | COMPLETE YOUR PROFILE
              </Typography>
              <Box sx={{ display: "flex", mt: { xs: 1, md: 0 } }}>
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    background: "#e6f4eb",
                    borderRadius: "100%",
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    background: "#e6f4eb",
                    borderRadius: "100%",
                    ml: 1,
                  }}
                ></Box>
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    background: "#2bb491",
                    borderRadius: "100%",
                    ml: 1,
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ background: "gray", width: "77%", height: "1px" }}></Box>
        </Grid>
        <Grid
          item
          xl={8}
          lg={8}
          md={8}
          sm={12}
          xs={12}
          sx={{
            display: "flex",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: { md: 5, xs: 2 },
              ml: { xl: 14, lg: 14, xs: 1 },
              mr: { xs: 1 },
            }}
          >
            <Typography
              sx={{
                background: "#2bb491",
                color: "white",
                fontWeight: "bold",
                borderRadius: "30px",
                padding: "5px 20px",
                textAlign: "center",
                letterSpacing: { xs: 0, lg: 2 },
                fontSize: { md: "18px", xs: "10px" },
              }}
            >
              LET US KNOW SOME OF THE THINGS
            </Typography>
            <Typography
              sx={{
                mt: 1,
                fontSize: "12px",
                color: "#949494",
                textAlign: "center",
              }}
            >
              We will Personalize your trail Experience
            </Typography>

            {/* Lines */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                mt: 2,
              }}
            >
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  background: "#2bb491",
                  borderRadius: "100%",
                }}
              ></Box>
              <Box
                sx={{ background: "gray", width: "100%", height: "1px", ml: 1 }}
              ></Box>
            </Box>

            <Box sx={{ pl: 3, mt: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    mb: 2,
                  }}
                >
                  What's bring You to MAXpilot!
                </Typography>
                <Box
                  sx={{
                    width: "70px",
                    height: "10px",
                    background: "#2bb491",
                    borderRadius: "30px",
                  }}
                ></Box>
              </Box>
              {/*Business Type Cards Here */}
              <RadioGroup
                aria-label="purpose"
                overlay
                name="purpose"
                sx={{
                  flexWrap: "wrap",
                  flexDirection: "row",
                  gap: 2,
                  [`& .${radioClasses.checked}`]: {
                    [`& .${radioClasses.action}`]: {
                      inset: -1,
                      border: "1px solid #38b492",
                      borderRadius: "8px",
                      background: "#e6f4eb",
                      zIndex: "-1",
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
                onChange={handlePurposeChange}
                onBlur={handleBlur}
              >
                {description.map((value, idx) => (
                  <Sheet
                    key={idx}
                    variant="outlined"
                    sx={{
                      borderRadius: "8px",
                      border: "1px solid #38b492",
                      bgcolor: "background.body",
                      boxShadow: "sm",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: 1.5,
                      p: 2,
                      width: { md: "150px", xs: "100%" },
                      height: "150px",
                    }}
                  >
                    <Radio id={idx} value={value.name} />
                    <Avatar sx={{ borderRadius: 0 }} src={icons[idx]} />
                    <FormLabel htmlFor={value}>
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: "bold",
                        }}
                      >
                        {value.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                        }}
                      >
                        {value.des}
                      </Typography>
                    </FormLabel>
                  </Sheet>
                ))}
              </RadioGroup>
              {errors.purpose && touched.purpose ? (
                <small style={{ color: "red", marginTop: "5px" }}>
                  {errors.purpose}
                </small>
              ) : null}
            </Box>

            {/* Lines */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                mt: 2,
              }}
            >
              <Box
                sx={{
                  width: "20px",
                  height: "20px",
                  background: "#2bb491",
                  borderRadius: "100%",
                }}
              ></Box>
              <Box
                sx={{
                  background: "gray",
                  width: "100%",
                  height: "1px",
                  ml: 1,
                }}
              ></Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  width: "70px",
                  height: "10px",
                  background: "#2bb491",
                  borderRadius: "30px",
                  position: "absolute",
                  top: { md: "20px", xs: "40px" },
                }}
              ></Box>
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                mt: 2,
              }}
            >
              <Box sx={{ pl: 3 }}>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    Please Choose a Payroll Provide!
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#949494",
                    }}
                  >
                    We will Personalize your trail Experience
                  </Typography>
                </Box>
                {/* payroll Cards Here */}
                <RadioGroup
                  aria-label="payroll"
                  overlay
                  name="payroll"
                  sx={{
                    flexWrap: "wrap",
                    flexDirection: "row",
                    marginTop: "10px",
                    gap: 1,
                    [`& .${radioClasses.checked}`]: {
                      [`& .${radioClasses.action}`]: {
                        inset: -1,
                        border: "1px solid #2bb491",
                        borderRadius: "8px",
                        background: "#e6f4eb",
                        zIndex: "-1",
                      },
                    },
                    [`& .${radioClasses.radio}`]: {
                      display: "contents",
                      "& > svg": {
                        zIndex: 2,
                        position: "absolute",
                        top: "-8px",
                        right: "-8px",
                        borderRadius: "50%",
                      },
                    },
                  }}
                  onChange={handlePayrollChange}
                  onBlur={handleBlur}
                >
                  {payrollArr.map((value, idx) => (
                    <Sheet
                      key={idx}
                      variant="outlined"
                      sx={{
                        borderRadius: "8px",
                        border: "1px solid #2bb491",
                        bgcolor: "background.body",
                        boxShadow: "sm",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0px 20px",
                        width: "200px",
                        height: "80px",
                      }}
                    >
                      <Avatar
                        variant="rounded"
                        size="sm"
                        src={XeroIcon}
                        sx={{ mr: 1 }}
                      />
                      <Radio id={idx} value={value.name} />
                      <FormLabel htmlFor={value}>
                        <Typography
                          sx={{
                            fontSize: "15px",
                            fontWeight: "bold",
                          }}
                        >
                          {value.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "12px",
                          }}
                        >
                          {value.des}
                        </Typography>
                      </FormLabel>
                    </Sheet>
                  ))}
                </RadioGroup>
                {errors.payroll && touched.payroll ? (
                  <small
                    style={{
                      color: "red",
                      marginTop: "5px",
                    }}
                  >
                    {errors.payroll}
                  </small>
                ) : null}
              </Box>

              <Button
                type="submit"
                variant="contained"
                className="all-green-btns"
                sx={{
                  mt: 5,
                  ml: 3,
                  width: "20%",
                  height: 35,
                  borderRadius: "8px",
                  textTransform: "none",
                }}
                onClick={handleSubmit}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={25} />
                ) : (
                  <>Next</>
                )}
              </Button>
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: { md: "flex-end", xs: "center" },
                mt: { xs: 2, xl: 15 },
              }}
            >
              <Link to="/step3-2">
                <ArrowBackIosNewIcon
                  sx={{
                    border: "1px solid #2bb491",
                    borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "5px",
                    mr: 2,
                    color: "#2bb491",
                  }}
                />
              </Link>
              <Link to="/step3-4">
                <ArrowForwardIosIcon
                  sx={{
                    border: "1px solid #2bb491",
                    borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "5px",
                    color: "#2bb491",
                  }}
                />
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { md: "column", xs: "row" },
              alignItems: "flex-end",
              justifyContent: "center",
              mt: { xl: 40, lg: 20, xs: 3 },
              mr: { md: 10, xs: 0 },
            }}
          >
            <Box
              sx={{
                width: "20px",
                height: "20px",
                background: "#e6f4eb",
                borderRadius: "100%",
              }}
            ></Box>
            <Box
              sx={{
                width: "20px",
                height: "20px",
                background: "#e6f4eb",
                borderRadius: "100%",
                mt: 1,
                ml: { xs: 1, md: 0 },
              }}
            ></Box>
            <Box
              sx={{
                width: "20px",
                height: "20px",
                background: "#2bb491",
                borderRadius: "100%",
                mt: 1,
                ml: { xs: 1, md: 0 },
              }}
            ></Box>
            <Box
              sx={{
                width: "20px",
                height: "20px",
                background: "#e6f4eb",
                borderRadius: "100%",
                mt: 1,
                ml: { xs: 1, md: 0 },
              }}
            ></Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            height: { xl: "auto", md: "15vh", xs: "25vh" },
            position: { xl: "unset", xs: "relative" },
          }}
        >
          <Avatar
            src={bg_image5}
            aria-label="Busy Man"
            sx={{
              width: { xl: "400px", md: "250px", xs: "200px" },
              height: "auto",
              padding: "0px",
              margin: "0px",
              borderRadius: 0,
              position: "absolute",
              bottom: "1px",
              right: "0",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
