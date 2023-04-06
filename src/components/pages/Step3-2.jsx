import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import FormLabel from "@mui/joy/FormLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import maxpilot from "../../assets/images/maxpilot-logo.png";
import Icon1 from "../../assets/icons/health-icon.png";
import Icon2 from "../../assets/icons/retail-icon.png";
import Icon3 from "../../assets/icons/services-icon.png";
import Icon4 from "../../assets/icons/charity-icon.png";
import Icon5 from "../../assets/icons/others-icon.png";
import { Avatar } from "@mui/material";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
const formSchema = Yup.object({
  business: Yup.string().required("Please enter your business name"),
  mobile: Yup.string().required("Please enter your contact number"),
  businessType: Yup.string().required("Please select your business type"),
  industry: Yup.string().required("Please select your industry"),
  employees: Yup.string().required("Please select your employees"),
});
const initialValues = {
  business: "",
  mobile: "",
  businessType: "",
  industry: "",
  employees: "",
};

const icons = [Icon1, Icon2, Icon3, Icon4, Icon5];

export default function Step3_2() {
  const url = process.env.REACT_APP_BASE_URL;
  const Navigate = useNavigate();
  const [industryData, setIndustryData] = React.useState([]);

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
      Navigate("/step3-3", {
        state: {
          business: values.business,
          mobile: values.mobile,
          businessType: values.businessType,
          industry: values.industry,
          employees: values.employees,
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

  const handleNumber = (e) => {
    setFieldValue("mobile", e);
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
      <Grid container sx={{ pb: 5 }}>
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
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ fontSize: "12px", mr: 2 }}>
                STEP 3 | COMPLETE YOUR PROFILE
              </Typography>
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
                  //   ml: 1,
                }}
              ></Box>
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
              PROVIDE US WITH SOME INFORMATION ABOUT YOUR BUSINESS?
            </Typography>
            <Typography
              sx={{
                mt: 1,
                fontSize: "12px",
                color: "#949494",
                textAlign: "center",
              }}
            >
              Your trial experience will be customized according to your
              preferences
            </Typography>
            {/* Lines */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
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
                  top: "20px",
                }}
              ></Box>
            </Box>
            <Box
              sx={{
                mt: 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                width: "100%",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  mr: 3,
                  pl: 3,
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  Your Business Name?
                </Typography>
                <input
                  className="input-fields-3"
                  placeholder="Business"
                  name="business"
                  value={values.business}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.business && touched.business ? (
                  <small style={{ color: "red", marginTop: "5px" }}>
                    {errors.business}
                  </small>
                ) : null}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  mt: { xs: 2, md: 0 },
                  pl: { md: 0, xs: 3 },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  Contact Number
                </Typography>
                <Box sx={{ marginTop: "7px" }}>
                  <PhoneInput
                    international
                    defaultCountry="PK"
                    name="mobile"
                    value={values.mobile}
                    onChange={handleNumber}
                  />
                </Box>
                {errors.mobile && touched.mobile ? (
                  <small style={{ color: "red", marginTop: "5px" }}>
                    {errors.mobile}
                  </small>
                ) : null}
              </Box>
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
                  Select your business type?
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
                aria-label="platform"
                overlay
                name="platform"
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
                      border: "1px solid #38b492",
                      bgcolor: "background.body",
                      boxShadow: "sm",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1.5,
                      p: 2,
                      width: { md: "120px", xs: "110px" },
                      height: "100px",
                    }}
                  >
                    <Radio id={idx} value={value} />
                    <Avatar
                      variant="circular"
                      size="sm"
                      //   sx={{ zIndex: "99999" }}
                      src={icons[idx]}
                    />
                    <FormLabel
                      htmlFor={value}
                      sx={{
                        fontSize: "12px",
                        fontWeight: "bold",
                        // zIndex: "99999",
                      }}
                    >
                      {value}
                    </FormLabel>
                  </Sheet>
                ))}
              </RadioGroup>
              {errors.businessType && touched.businessType ? (
                <small style={{ color: "red", marginTop: "5px" }}>
                  {errors.businessType}
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
                sx={{ background: "gray", width: "100%", height: "1px", ml: 1 }}
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
                  top: "20px",
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
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  pl: 3,
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    Select your industry
                  </Typography>
                  <select
                    className="input-fields-3"
                    placeholder="Select Industry"
                    name="industry"
                    onChange={handleIndustryChange}
                    onBlur={handleBlur}
                  >
                    <option>Select Industry</option>
                    {industryData?.map((industry, idx) => (
                      <option value={idx}>{industry["name"]}</option>
                    ))}
                  </select>
                  <Box>
                    {errors.industry && touched.industry ? (
                      <small style={{ color: "red", marginTop: "5px" }}>
                        {errors.industry}
                      </small>
                    ) : null}
                  </Box>
                </Box>
                <Box sx={{ ml: { md: 2, xs: 0 }, mt: { md: 0, xs: 2 } }}>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    How many employees you have?
                  </Typography>
                  {/* Employess Cards Here */}
                  <RadioGroup
                    aria-label="platform"
                    overlay
                    name="employees"
                    sx={{
                      flexWrap: "wrap",
                      flexDirection: "row",
                      marginTop: "10px",
                      gap: 1,
                      [`& .${radioClasses.checked}`]: {
                        [`& .${radioClasses.action}`]: {
                          inset: -1,
                          border: "1px solid gray",
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
                          //   bgcolor: "background.body",
                          borderRadius: "50%",
                        },
                      },
                    }}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    {["1-25", "26-49", "50-249", "250-749", "750+"].map(
                      (value, idx) => (
                        <Sheet
                          key={idx}
                          variant="outlined"
                          sx={{
                            borderRadius: "8px",
                            border: "1px solid gray",
                            bgcolor: "background.body",
                            boxShadow: "sm",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            flexWrap: "wrap",
                            justifyContent: "center",
                            padding: "0",
                            width: "60px",
                            height: "36px",
                          }}
                        >
                          <Radio id={idx} value={value} />
                          <FormLabel
                            htmlFor={value}
                            sx={{
                              fontSize: "12px",
                              fontWeight: "bold",
                            }}
                          >
                            {value}
                          </FormLabel>
                        </Sheet>
                      )
                    )}
                  </RadioGroup>
                  {errors.employees && touched.employees ? (
                    <small
                      style={{
                        color: "red",
                        marginTop: "5px",
                      }}
                    >
                      {errors.employees}
                    </small>
                  ) : null}
                </Box>
              </Box>

              <Button
                type="submit"
                variant="contained"
                className="all-green-btns"
                sx={{
                  mt: 5,
                  ml: 3,
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
          </Box>
        </Grid>

        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              mt: { xl: 40, lg: 20, xs: 5 },
              mr: 10,
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
                background: "#2bb491",
                borderRadius: "100%",
                mt: 1,
              }}
            ></Box>
            <Box
              sx={{
                width: "20px",
                height: "20px",
                background: "#e6f4eb",
                borderRadius: "100%",
                mt: 1,
              }}
            ></Box>
            <Box
              sx={{
                width: "20px",
                height: "20px",
                background: "#e6f4eb",
                borderRadius: "100%",
                mt: 1,
              }}
            ></Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}