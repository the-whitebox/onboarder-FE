import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "../../style/SetAgreedhours.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
const formSchema = Yup.object({
  workPeriod: Yup.string().required("Please enter work period length"),
  netWorkPeriod: Yup.string().required("Please enter start day"),
  hours: Yup.string().required("Please enter hours per work period"),
});
const initialValues = {
  workPeriod: "",
  netWorkPeriod: "",
  hours: "",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function SetAgreedhours(props) {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const url = process.env.REACT_APP_BASE_URL;
  const [loading, setLoading] = React.useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: formSchema,
      onSubmit: async (values, action) => {
        setLoading(true);
        await axios
          .post(
            `${url}/people/${userId}/`,
            {
              is_superuser: false,
              working_hours: {
                hours_per_work_period: values.hours,
                work_period: {
                  next_work_period_day: values.netWorkPeriod,
                  work_period_length: values.workPeriod,
                },
              },
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
            props.handleClose();
          })
          .catch((error) => {
            toast.error("Something went wrong! Please try again");
            setLoading(false);
          });
      },
    });

  return (
    <React.Fragment>
      <Box
        sx={{
          ...style,
          width: 490,
          height: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Set agreed hours</h2>
          <CloseIcon
            onClick={props.handleClose}
            sx={{ cursor: "pointer" }}
          ></CloseIcon>
        </Box>
        <div>
          <Typography
            sx={{
              pt: "10px",
              fontWeight: "bold",
              color: "rgba(95, 91, 81, 0.518)",
            }}
          >
            2 Team members
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              mt: "20px",
              pb: "20px",
            }}
          >
            Work period
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", ml: "20px", pb: "15px" }}
          >
            Create a new work period
          </Typography>
          <Typography sx={{ ml: "20px", pb: "30px" }}>
            Saving this template will allow it to be used across any team member
            profile.
          </Typography>
          <Typography
            sx={{
              fontWeight: "Bold",
              fontSize: "large",
              ml: "20px",
              pb: "10px",
            }}
          >
            Work period length
          </Typography>

          <FormControl>
            <RadioGroup
              sx={{
                display: "flex",
                flexDirection: "row",
                ml: "20px",
                gap: 3,
              }}
              aria-labelledby="demo-radio-buttons-group-label"
              name="workPeriod"
              value={values.workPeriod}
              onChange={handleChange}
              handleBlur={handleBlur}
            >
              <FormControlLabel value={1} control={<Radio />} label="Weekly" />
              <FormControlLabel
                value={2}
                control={<Radio />}
                label="2-Weekly"
              />
              <FormControlLabel
                value={4}
                control={<Radio />}
                label="4-Weekly"
              />
            </RadioGroup>
          </FormControl>
          <Box sx={{ ml: 3, mt: 1, mb: 1 }}>
            {errors.workPeriod && touched.workPeriod ? (
              <small style={{ color: "red" }}>{errors.workPeriod}</small>
            ) : null}
          </Box>
          <Typography
            sx={{
              ml: "20px",
              fontWeight: "Bold",
              fontSize: "large",
              pb: "10px",
            }}
          >
            Next Work period starts on
          </Typography>

          <FormControl>
            <RadioGroup
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: 2,

                ml: "20px",
              }}
              aria-labelledby="demo-radio-buttons-group-label"
              name="netWorkPeriod"
              value={values.netWorkPeriod}
              onChange={handleChange}
              handleBlur={handleBlur}
            >
              <FormControlLabel value={1} control={<Radio />} label="Mon" />
              <FormControlLabel value={2} control={<Radio />} label="Tue" />
              <FormControlLabel value={3} control={<Radio />} label="Wed" />
              <FormControlLabel value={4} control={<Radio />} label="Thu" />
              <FormControlLabel value={5} control={<Radio />} label="Fri" />
              <FormControlLabel value={6} control={<Radio />} label="Sat" />
              <FormControlLabel value={7} control={<Radio />} label="Sun" />
            </RadioGroup>
          </FormControl>
          <Box sx={{ ml: 3, mt: 1 }}>
            {errors.netWorkPeriod && touched.netWorkPeriod ? (
              <small style={{ color: "red" }}>{errors.netWorkPeriod}</small>
            ) : null}
          </Box>
          <Typography
            sx={{ fontWeight: "bold", pt: "15px", pb: "20px", ml: 3 }}
          >
            Hours per Work period
          </Typography>
          <FormControl
            size="small"
            sx={{ ml: 3, width: 160 }}
            variant="outlined"
          >
            <OutlinedInput
              id="outlined-adornment-weight"
              endAdornment={
                <InputAdornment position="end">Hours</InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              name="hours"
              value={values.hours}
              onChange={handleChange}
              handleBlur={handleBlur}
            />
          </FormControl>
        </div>
        <Box sx={{ ml: 3, mt: 1 }}>
          {errors.hours && touched.hours ? (
            <small style={{ color: "red" }}>{errors.hours}</small>
          ) : null}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            className="all-green-btns"
            variant="contained"
            sx={{
              borderRadius: "5px",
              width: "20%",
              height: 35,
              textTransform: "none",
              mt: 3,
            }}
            onClick={handleSubmit}
          >
            {loading ? (
              <CircularProgress color="inherit" size={25} />
            ) : (
              <>Save</>
            )}
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}
