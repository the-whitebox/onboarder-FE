import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import Select from "@mui/material/Select";
import { useTheme } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
const formSchema = Yup.object({
  payRates: Yup.array().required("Please enter pay rates"),
  mondays: Yup.string().required("Please enter mondays rates"),
  tuesdays: Yup.string().required("Please enter tuesdays rates"),
  wednesdays: Yup.string().required("Please enter wednesdays rates"),
  thursdays: Yup.string().required("Please enter thursdays rates"),
  fridays: Yup.string().required("Please enter fridays rates"),
});

const names = ["2", "3"];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 6,
};

export default function Setpayrates(props) {
  const theme = useTheme();
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const url = process.env.REACT_APP_BASE_URL + `/people/${userId}/`;
  const [loading, setLoading] = useState(false);

  const initialValues = {
    payRates: [],
    mondays: "",
    tuesdays: "",
    wednesdays: "",
    thursdays: "",
    fridays: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: formSchema,
      onSubmit: async (values, action) => {
        setLoading(true);
        await axios
          .patch(
            url,
            {
              pay_detail: {
                per_day_pay_rate: {
                  monday: values.mondays,
                  tuesday: values.tuesdays,
                  wednesday: values.wednesdays,
                  thursday: values.thursdays,
                  friday: values.fridays,
                },
              },
              pay_rate: values.payRates,
              is_superuser: false,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            console.log("Response", response);
            setLoading(false);
            props.handleClosePayrate();
          })
          .catch((error) => {
            toast.error(error.message);
            setLoading(false);
          });
      },
    });

  return (
    <React.Fragment>
      <Box sx={{ ...style, width: 400, height: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Set Pay rates</h2>
          <CloseIcon
            onClick={props.handleClosePayrate}
            sx={{ cursor: "pointer" }}
          ></CloseIcon>
        </Box>
        <Box>
          <Typography sx={{ pb: "5px" }}> 2 Team members </Typography>
          <Box
            sx={{
              bgcolor: "#d5f9f6",
              display: "flex",
              flexDirection: "row",
              pb: "5px",
            }}
          >
            <InfoIcon
              sx={{
                fontSize: "small",
                color: "Gray",
                mt: "11px",
                ml: "5px",
              }}
            />
            <Typography
              sx={{
                fontSize: "small",
                ml: "5px",
                mt: "9px",
                color: "wblack",
              }}
            >
              Pay rates help track wage costs and can be expected to ensure team
              members are paid correctly. Select from our pay rates library
              below. About pay rates
            </Typography>
          </Box>

          <FormControl size="small" sx={{ width: 300, mt: 3 }}>
            <Typography sx={{ fontWeight: "bold" }}> Pay rates </Typography>
            <Select
              sx={{ font: "inherit" }}
              multiple
              displayEmpty
              name="payRates"
              value={values.payRates}
              input={<OutlinedInput />}
              inputProps={{ "aria-label": "Without label" }}
              onChange={handleChange}
              handleBlur={handleBlur}
            >
              <MenuItem disabled value="">
                <em>Rates per Day</em>
              </MenuItem>
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box>
            {errors.payRates && touched.payRates ? (
              <small style={{ color: "red" }}>{errors.payRates}</small>
            ) : null}
          </Box>
          <Box sx={{ marginLeft: "15px" }}>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "15px",
                mt: "15px",
              }}
            >
              Mondays
            </Typography>
            <FormControl size="small" sx={{ width: 390 }} variant="outlined">
              <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={
                  <InputAdornment position="end">Rs per hour</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                name="mondays"
                value={values.mondays}
                onChange={handleChange}
                handleBlur={handleBlur}
              />
            </FormControl>
            <Box>
              {errors.mondays && touched.mondays ? (
                <small style={{ color: "red" }}>{errors.mondays}</small>
              ) : null}
            </Box>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "15px",
                mt: "15px",
              }}
            >
              Tuesdays
            </Typography>
            <FormControl size="small" sx={{ width: 390 }} variant="outlined">
              <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={
                  <InputAdornment position="end">Rs per hour</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                name="tuesdays"
                value={values.tuesdays}
                onChange={handleChange}
                handleBlur={handleBlur}
              />
            </FormControl>
            <Box>
              {errors.tuesdays && touched.tuesdays ? (
                <small style={{ color: "red" }}>{errors.tuesdays}</small>
              ) : null}
            </Box>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "15px",
                mt: "15px",
              }}
            >
              Wednesdays
            </Typography>
            <FormControl size="small" sx={{ width: 390 }} variant="outlined">
              <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={
                  <InputAdornment position="end">Rs per hour</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                name="wednesdays"
                value={values.wednesdays}
                onChange={handleChange}
                handleBlur={handleBlur}
              />
            </FormControl>
            <Box>
              {errors.wednesdays && touched.wednesdays ? (
                <small style={{ color: "red" }}>{errors.wednesdays}</small>
              ) : null}
            </Box>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "15px",
                mt: "15px",
              }}
            >
              Thursdays
            </Typography>
            <FormControl size="small" sx={{ width: 390 }} variant="outlined">
              <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={
                  <InputAdornment position="end">Rs per hour</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                name="thursdays"
                value={values.thursdays}
                onChange={handleChange}
                handleBlur={handleBlur}
              />
            </FormControl>
            <Box>
              {errors.thursdays && touched.thursdays ? (
                <small style={{ color: "red" }}>{errors.thursdays}</small>
              ) : null}
            </Box>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "15px",
                pt: "15px",
              }}
            >
              Fridays
            </Typography>
            <FormControl size="small" sx={{ width: 390 }} variant="outlined">
              <OutlinedInput
                id="outlined-adornment-weight"
                endAdornment={
                  <InputAdornment position="end">Rs per hour</InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
                name="fridays"
                value={values.fridays}
                onChange={handleChange}
                handleBlur={handleBlur}
              />
            </FormControl>
            <Box>
              {errors.fridays && touched.fridays ? (
                <small style={{ color: "red" }}>{errors.fridays}</small>
              ) : null}
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            className="all-green-btns"
            variant="contained"
            size="small"
            sx={{
              borderRadius: "6px",
              width: "30%",
              height: "40px",
              bgcolor: "#38b492",
              color: "white",
              textTransform: "none",
              mt: 6,
            }}
            onClick={handleSubmit}
          >
            {loading ? (
              <CircularProgress color="inherit" size={30} />
            ) : (
              <>Save</>
            )}
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}
