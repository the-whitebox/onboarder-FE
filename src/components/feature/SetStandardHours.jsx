import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InfoIcon from "@mui/icons-material/Info";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
const formSchema = Yup.object({
  hours: Yup.string().required("Please enter hours per work period"),
});
const initialValues = {
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
  px: 4,
  pt: 2,
  pb: 4,
};

export default function SetStandardHours(props) {
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
              hours_per_work_period: values.hours,
              is_superuser: false,
              profile: {},
              working_hours: {},
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
            props.handleCloseHours();
          })
          .catch((error) => {
            toast.error("Something went wrong! Please try again");
            setLoading(false);
          });
      },
    });

  return (
    <React.Fragment>
      <Box sx={{ ...style, width: 350, height: "auto" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Set Standard Hours</h2>
          <CloseIcon
            onClick={props.handleCloseHours}
            sx={{ cursor: "pointer" }}
          ></CloseIcon>
        </Box>
        <Box>
          <Typography sx={{ mt: "2px", color: "darkgray", ml: "2px" }}>
            2 Team members
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              mt: "5px",
            }}
          >
            <InfoIcon
              sx={{
                fontSize: "small",
                color: "#38b492",
                ml: "12px",
              }}
            />
            <Typography
              sx={{
                fontSize: "small",
                ml: "5px",
                color: "gray",
              }}
            >
              Number of hours payable for a 'Day of leave'
            </Typography>
          </Box>
          <Typography
            component="h5"
            sx={{ fontWeight: "bold", mt: 2, mb: 1, ml: "12px" }}
          >
            Hours
          </Typography>
          <TextField
            size="small"
            sx={{ width: "95%", ml: "12px" }}
            name="hours"
            value={values.hours}
            onChange={handleChange}
            handleBlur={handleBlur}
          />
          <Box sx={{ ml: "12px", mt: 1 }}>
            {errors.hours && touched.hours ? (
              <small style={{ color: "red" }}>{errors.hours}</small>
            ) : null}
          </Box>

          <Typography sx={{ fontSize: "12px", ml: "10px", mt: "10px" }}>
            Not applicable to 2 Team members selected as they do not a pay rate
            assigned to their profile
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            className="all-blue-btns"
            variant="contained"
            sx={{
              mt: "32px",
              borderRadius: "6px",
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
