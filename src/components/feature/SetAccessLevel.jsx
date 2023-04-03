import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CloseButton from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import "../../style/SetAccesslevel.css";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import GlobalContext from "../../context/GlobalContext";
const formSchema = Yup.object({
  role: Yup.string().required("Please select your role"),
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  px: 4,
  py: 4,
  borderRadius: "12px",
};

const role = [
  { id: 1, role: "System Administrator" },
  { id: 2, role: "Supervisor" },
  { id: 3, role: "Employee" },
  { id: 4, role: "Location Manager" },
  { id: 5, role: "Advisor" },
];

export default function SetAccessLevel(props) {
  const { userInfo } = React.useContext(GlobalContext);

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const url = process.env.REACT_APP_BASE_URL;
  const [loading, setLoading] = useState(false);

  const initialValues = {
    role: userInfo?.role.id,
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: formSchema,
      onSubmit: async (values, action) => {
        setLoading(true);
        await axios
          .patch(
            `${url}/people/${userId}/`,
            { role: values.role },
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
            toast.error(error.message);
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
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold" }}
            id="child-modal-title"
          >
            Set Access level
          </Typography>
          <CloseButton
            id="child-modal-title"
            sx={{ cursor: "pointer" }}
            onClick={props.handleClose}
          ></CloseButton>
        </Box>

        <Box>
          <p className="team">2 Team members </p>
          <Typography sx={{ fontWeight: "bold", ml: "8px" }}>
            Access level
          </Typography>
          <FormControl
            sx={{
              width: 250,
              height: 5,
              padding: "5px",
            }}
          >
            <Select
              size="small"
              sx={{ borderRadius: "7px" }}
              name="role"
              value={values.role}
              onChange={handleChange}
              handleBlur={handleBlur}
            >
              <MenuItem value="" disabled>
                <em>Select</em>
              </MenuItem>
              {role?.map((data) => (
                <MenuItem value={data.id}>{data.role}</MenuItem>
              ))}
            </Select>
            <Box>
              {errors.role && touched.role ? (
                <small style={{ color: "red" }}>{errors.role}</small>
              ) : null}
            </Box>
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            className="all-green-btns"
            sx={{
              borderRadius: "8px",
              width: "30%",
              height: 35,
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
              <>Update</>
            )}
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}
