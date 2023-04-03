import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "../../style/Step1.css";
import FormLabel from "@mui/joy/FormLabel";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RightSideImage from "../../assets/images/bg-image.png";
import PastIcon from "../../assets/icons/past-icon.png";
import FriendIcon from "../../assets/icons/friend-icon.png";
import RecommendIcon from "../../assets/icons/recommend-icon.png";
import BlogIcon from "../../assets/icons/blog-icon.png";
import AdIcon from "../../assets/icons/ad-icon.png";
import InternetIcon from "../../assets/icons/internet-icon.png";
import OthersIcon from "../../assets/icons/others-icon.png";
import { useLocation, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
const formSchema = Yup.object({
  payProcess: Yup.string().required("What process you prefer?"),
  hear: Yup.string().required("How did you hear about us?"),
});
const initialValues = {
  payProcess: "",
  hear: "",
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

export default function BasicModal() {
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
            employess_range: null,
            joining_purpose: location.state.purpose,
            payroll_type: location.state.payroll,
            pay_proces_improvement_duration: values.payProcess,
            how_you_hear: values.hear,
          })
          .then((response) => {
            console.log("Login Response", response);
            toast.success("You have successfully registered your business!");
            // Navigate("/people");
            setLoading(false);
          })
          .catch((error) => {
            console.log("Error", error.response);
            setLoading(false);
          });
      },
    });

  const handlePayProcessChange = (e) => {
    setFieldValue("payProcess", parseInt(e.target.id));
  };

  const handleHearChange = (e) => {
    setFieldValue("hear", parseInt(e.target.id));
  };

  return (
    <div>
      <Grid
        container
        component="main"
        sx={{
          maxHeight: "100vh",
        }}
      >
        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={0} square>
          <Box
            sx={{
              mt: 2,
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
                    overlay
                    size="lg"
                    sx={{
                      flexDirection: "row",
                      gap: 2.5,
                      mt: 2,
                      [`& .${radioClasses.checked}`]: {
                        [`& .${radioClasses.action}`]: {
                          border: "2px solid #38b492",
                        },
                      },
                      [`& .${radioClasses.action}`]: {
                        borderRadius: "15px",
                        border: "2px solid #e2e2e2",
                      },
                    }}
                    onChange={handlePayProcessChange}
                    handleBlur={handleBlur}
                  >
                    {[
                      "As soon as possible",
                      "In the near future",
                      "Just looking around",
                    ].map((value, idx) => (
                      <Sheet
                        key={value}
                        sx={{
                          borderRadius: "8px",
                          p: 2,
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          boxShadow: "sm",
                          bgcolor: "background.body",
                          width: "190px",
                          height: "40px",
                        }}
                      >
                        <Radio
                          id={idx}
                          label={`${value}`}
                          overlay
                          disableIcon
                          value={value}
                          slotProps={{
                            label: ({ checked }) => ({
                              sx: {
                                // border: "2px solid #e2e2e2",
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
                                    borderRadius: "8px",
                                    borderColor: "#38b492",
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
                {errors.payProcess && touched.payProcess ? (
                  <small style={{ color: "red" }}>{errors.payProcess}</small>
                ) : null}
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
              How did you hear about MaxPilot?
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
              {/* ////////////  Seven ---7 Cards ----here----- */}
              <RadioGroup
                aria-label="platform"
                // defaultValue="Website"
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
                      inset: -3,
                      border: "2px solid #38b492",
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
                onChange={handleHearChange}
                handleBlur={handleBlur}
              >
                {[
                  "Using MaxPilot in the past",
                  "Recommended from friend or colleague",
                  "Recommended from a business vendor",
                  "Read reviews or blog",
                  "Saw an ad about MaxPilot",
                  "Searched the internet",
                  "Other",
                ].map((value, idx) => (
                  // ----------Cards Height Changed-----------
                  <Sheet
                    key={value}
                    variant="outlined"
                    md={3}
                    sx={{
                      borderRadius: "15px",
                      border: "2px solid #e2e2e2",
                      bgcolor: "background.body",
                      boxShadow: "sm",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "center",

                      gap: 1.5,
                      p: 2,
                      width: "160px",
                      height: "130px",
                    }}
                  >
                    <Radio
                      id={idx}
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
            {errors.hear && touched.hear ? (
              <small style={{ color: "red" }}>{errors.hear}</small>
            ) : null}
            <Button
              variant="contained"
              className="all-green-btns"
              sx={{
                mt: 5,
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
                <>Create Business</>
              )}
            </Button>
          </Box>
        </Grid>
        {/* ///////      Right Side Image       /////////*/}
        {/* changes made on image position  */}
        <Grid
          item
          xs={false}
          sm={4}
          md={5}
          sx={{
            position: "fixed",
            right: "0px",
            top: "0px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <Avatar
            src={RightSideImage}
            aria-label="MaxPilot"
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
