import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
const formSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
});
const initialValues = {
  email: "",
};

const style = {
  position: "absolute",
  top: "25%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  bgcolor: "background.paper",
  borderRadius: "6px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const navigate = useNavigate();
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
            props.handleClose();
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
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h5"
            sx={{ fontWeight: "bold", fontSize: "20px" }}
          >
            So you forgot your password?
          </Typography>
          <CloseIcon
            onClick={props.handleClose}
            sx={{ cursor: "pointer" }}
          ></CloseIcon>
        </Box>
        <Typography
          id="modal-modal-description"
          sx={{
            mt: 4,
            fontSize: 14,
          }}
        >
          Alright, pop in your email address and we'll send you a link to reset
          your password.
        </Typography>

        <TextField
          sx={{
            width: "100%",
            mt: 1,
          }}
          id="emailForForgotPwd"
          label="Email"
          variant="outlined"
          name="email"
          value={values.email}
          onChange={handleChange}
          handleBlur={handleBlur}
        />
        {errors.email && touched.email ? (
          <small style={{ color: "red" }}>{errors.email}</small>
        ) : null}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button
            type="submit"
            variant="contained"
            className="all-green-btns"
            sx={{
              mt: 4,
              width: "30%",
              height: 35,
            }}
            onClick={handleSubmit}
          >
            {loading ? (
              <CircularProgress color="inherit" size={25} />
            ) : (
              <>Let's do this</>
            )}
          </Button>
        </Box>
      </Box>
    </div>
  );
}
