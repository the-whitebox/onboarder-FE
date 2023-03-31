import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import "../../style/Step1.css";
import FormLabel from "@mui/joy/FormLabel";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RightSideImage from "../../assets/images/bg-image.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Icon1 from "../../assets/icons/health-icon.png";
import Icon2 from "../../assets/icons/retail-icon.png";
import Icon3 from "../../assets/icons/services-icon.png";
import Icon4 from "../../assets/icons/charity-icon.png";
import Icon5 from "../../assets/icons/others-icon.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
const formSchema = Yup.object({
  business: Yup.string().required("Please enter your username"),
  mobile: Yup.string().required("Please enter your mobile number"),
  businessType: Yup.string().required("Please select your business type"),
  industry: Yup.string().required("Please select your industry"),
});
const initialValues = {
  business: "",
  mobile: "",
  businessType: "",
  industry: "",
};
const icons = [Icon1, Icon2, Icon3, Icon4, Icon5];

export default function BasicModal() {
  const url = process.env.REACT_APP_BASE_URL;
  const Navigate = useNavigate();
  const [industryData, setIndustryData] = useState([]);

  const {
    values,
    errors,
    touched,
    setFieldValue,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: formSchema,
    onSubmit: (values, action) => {
      Navigate("/step2", {
        state: {
          business: values.business,
          mobile: values.mobile,
          businessType: values.businessType,
          industry: values.industry,
        },
      });
    },
  });

  const handleBusinessTypeChange = (e) => {
    setFieldValue("businessType", parseInt(e.target.id));
    getIndustries(parseInt(e.target.id));
  };

  const handleIndustryChange = (e) => {
    setFieldValue("industry", parseInt(e.target.id));
  };

  const getIndustries = async (id) => {
    await axios
      .get(`${url}/enums/${id}/`)
      .then((response) => {
        setIndustryData([response.data]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Grid
        container
        component="main"
        sx={{
          height: "100vh",
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
                color: "#38b492",
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

            <Box
              sx={{
                mt: 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Box
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
                    mb: 1,
                  }}
                >
                  What is your business?
                </Typography>
                <TextField
                  id="business"
                  variant="outlined"
                  sx={{
                    width: "90%",
                  }}
                  name="business"
                  value={values.business}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.business && touched.business ? (
                  <small style={{ color: "red" }}>{errors.business}</small>
                ) : null}
              </Box>

              <Box
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
                    mb: 1,
                  }}
                >
                  What is your mobile number?
                </Typography>
                <TextField
                  id="mobile-number"
                  variant="outlined"
                  sx={{
                    width: "90%",
                  }}
                  name="mobile"
                  value={values.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.mobile && touched.mobile ? (
                  <small style={{ color: "red" }}>{errors.mobile}</small>
                ) : null}
              </Box>
            </Box>
            <Typography
              sx={{
                mt: 4,
                fontWeight: "bold",
                fontSize: "18px",
                color: "#332A60",
                mb: 1,
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
              {/* Cards Here */}
              <RadioGroup
                aria-label="platform"
                overlay
                name="platform"
                sx={{
                  flexWrap: "wrap",
                  flexDirection: "row",
                  gap: 2,
                  [`& .${radioClasses.checked}`]: {
                    [`& .${radioClasses.action}`]: {
                      inset: -2,
                      border: "2px solid #38b492",
                      borderRadius: "8px",
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
                onChange={handleBusinessTypeChange}
                onBlur={handleBlur}
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
                      borderRadius: "8px",
                      border: "2px solid #e2e2e2",
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
            {errors.businessType && touched.businessType ? (
              <small style={{ color: "red" }}>{errors.businessType}</small>
            ) : null}
            <Typography
              sx={{
                mt: 4,
                fontWeight: "bold",
                fontSize: "18px",
                color: "#332A60",
                mb: 1,
              }}
            >
              Select your industry
            </Typography>
            <FormControl sx={{ width: { lg: "30%", sm: "70%" } }}>
              <InputLabel id="demo-simple-select-label">Select</InputLabel>

              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Industry"
                name="industry"
                onChange={handleIndustryChange}
                onBlur={handleBlur}
              >
                {industryData?.map((industry, idx) => (
                  <MenuItem value={idx}>{industry["name"]}</MenuItem>
                ))}
              </Select>
            </FormControl>
            {errors.industry && touched.industry ? (
              <small style={{ color: "red" }}>{errors.industry}</small>
            ) : null}

            <Button
              type="submit"
              variant="contained"
              className="all-green-btns"
              sx={{
                mt: 5,
                width: "10%",
                height: 35,
                borderRadius: "8px",
                textTransform: "none",
              }}
              onClick={handleSubmit}
            >
              Next
            </Button>
          </Box>
        </Grid>

        {/* ------right side image of step1-------------- */}
        {/* ------Position Changed On Right Side Image ---------*/}

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
            aria-label="UROOSTER"
            sx={{
              marginRight: "12px",
              height: "100vh",
              width: "100%",
              objectFit: "fill",
              borderRadius: "0px !important",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
