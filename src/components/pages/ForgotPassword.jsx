import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "@mui/material";
const formSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
});
const initialValues = {
  email: "",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xl: "450px", lg: "450px", md: "450px", sm: "400px", xs: "310px" },
  borderRadius: "30px",
  boxShadow: 24,
  py: 2,
  px: 2,
  background: "#2bb491",
  border: "1px solid white",
};

export default function ForgotPassword(props) {
  const url = process.env.REACT_APP_BASE_URL;
  const [loading, setLoading] = React.useState(false);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: formSchema,
      onSubmit: async (values, action) => {
        setLoading(true);
        await axios
          .post(`${url}/auth/password/reset/`, {
            email: values.email,
          })
          .then((response) => {
            console.log("Login Response", response);
            toast.success(response.data.detail);
            setLoading(false);
          })
          .catch((error) => {
            toast.error("Something went wrong! Please try again");
            setLoading(false);
          });
      },
    });

  return (
    <div>
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <CloseIcon
            onClick={props.handleClose}
            sx={{
              cursor: "pointer",
              background: "white",
              color: "#2bb491",
              borderRadius: "100%",
              fontSize: "20px",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "white", fontSize: "20px", mt: 10 }}>
            <span style={{ fontWeight: "bold" }}>MAX</span>Pilot
          </Typography>
          <Typography sx={{ color: "white", mt: 1 }}>
            Recover your Previous Login ID
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ position: "relative" }}>
              <input
                type="text"
                className="input-fields"
                placeholder="@Enter Your MAXpilot email ID"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Box sx={{ position: "absolute", top: "25px", right: "15px" }}>
                {loading ? (
                  <CircularProgress color="inherit" size={25} />
                ) : (
                  <ArrowCircleRightIcon
                    onClick={handleSubmit}
                    sx={{ color: "#555555", cursor: "pointer" }}
                  />
                )}
              </Box>
            </Box>
            {errors.email && touched.email ? (
              <small style={{ color: "#FF0000" }}>{errors.email}</small>
            ) : null}
          </Box>
          <MarkEmailReadOutlinedIcon
            sx={{ fontSize: "40px", color: "white", mt: 1 }}
          />
          <Typography sx={{ color: "white", fontSize: "12px", mt: 1 }}>
            Verification email has been sent to your mail address
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mt: 15 }}>
            <RefreshOutlinedIcon sx={{ fontSize: "20px", color: "white" }} />
            <Typography sx={{ color: "white", fontSize: "12px" }}>
              Don"t receive any mail,
            </Typography>
            <Link
              sx={{
                color: "white",
                fontSize: "12px",
                ml: "3px",
                cursor: "pointer",
              }}
            >
              Resend Recovery mail
            </Link>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
