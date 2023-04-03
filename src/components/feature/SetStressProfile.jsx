import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import CloseIcon from "@mui/icons-material/Close";
import "../../style/SetStress.css";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
const formSchema = Yup.object({
  stress: Yup.string().required("Please select stress profile"),
});
const initialValues = {
  stress: "",
};

const names = [
  "2 days per week",
  "24/7",
  "CA Overtime 40hrs per week",
  "Max 20 hours per week",
  "Normal 38 hours per week",
  "Standard 40 hours, 8 hours per day",
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 4,
};

export default function SetStressProfile(props) {
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
              profile: {},
              working_hours: {
                stress_level: values.stress,
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
            props.handleCloseStress();
          })
          .catch((error) => {
            toast.error("Something went wrong! Please try again");
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
          <h2>Set Stress Profile</h2>
          <CloseIcon
            onClick={props.handleCloseStress}
            sx={{ cursor: "pointer" }}
          ></CloseIcon>
        </Box>
        <Box>
          <Typography sx={{ color: "#a9a9a9" }}>2 Team members</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <InfoIcon
              sx={{
                fontSize: "large",
                color: "#38b492",
                mt: "10px",
                ml: "5px",
              }}
            />
            <Typography
              sx={{
                fontSize: "15px",
                ml: "11px",
                mt: "9px",
                color: "wblack",
              }}
            >
              Stress Profiles are scheduling rules such as minimum and maximum
              hours. Use our templates below or
            </Typography>
          </Box>
          <p className="own aTag">Create your own.</p>

          <FormControl sx={{ width: 220, mt: 3 }}>
            <Typography sx={{ pb: "10px", fontWeight: "bold" }}>
              Stress Profile
            </Typography>
            <Select
              sx={{ borderRadius: "10px" }}
              displayEmpty
              name="stress"
              value={values.stress}
              onChange={handleChange}
              handleBlur={handleBlur}
            >
              <MenuItem value="" disabled>
                <em>Select</em>
              </MenuItem>
              <MenuItem value={1}>2 days per week</MenuItem>
              <MenuItem value={2}>24/7</MenuItem>
              <MenuItem value={3}>CA Overtime 40 hrs per week</MenuItem>
              <MenuItem value={4}>Max 20 hours per week</MenuItem>
              <MenuItem value={5}>Normal 38 hours per week</MenuItem>
              <MenuItem value={6}>Standard 40 hours, 8 hours per day</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ ml: 1, mt: 1 }}>
            {errors.stress && touched.stress ? (
              <small style={{ color: "red" }}>{errors.stress}</small>
            ) : null}
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            className="all-blue-btns"
            variant="contained"
            sx={{
              borderRadius: "7px",
              width: "25%",
              height: 35,
              textTransform: "none",
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
