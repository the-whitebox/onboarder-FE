import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useTheme } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
import Capture from "../../assets/images/Capture.png";
import "../../style/Addteam.css";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
const formSchema = Yup.object({
  firstname: Yup.string().required("Please enter your firstname"),
  lastname: Yup.string().required("Please enter your lastname"),
  mobile: Yup.string().required("Please enter your mobile number"),
  email: Yup.string().email().required("Please enter your email"),
  accessLevel: Yup.string().required("Please select access level"),
});
const initialValues = {
  firstname: "",
  lastname: "",
  mobile: "",
  email: "",
  accessLevel: "",
};

const names = ["Location 1", "Location 2"];
const access = [
  "System Administrator",
  "Supervisor ",
  "Employee",
  "Location Manager",
  "Advisor",
];
const style = {
  position: "absolute",
  top: "38%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  borderRadius: "8px ",
  boxShadow: 24,
  pt: 0,
  px: 4,
  pb: 3,
};

export default function Addteammember(props) {
  const theme = useTheme();
  const token = localStorage.getItem("token");
  const url = process.env.REACT_APP_BASE_URL;
  const [loading, setLoading] = React.useState(false);
  const [inviteLink, setInviteLink] = React.useState("");
  React.useEffect(() => {
    const getIniviteLink = async () => {
      await axios
        .get(url + "/invitation_link/", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setInviteLink(response.data.invitation_link);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    getIniviteLink();
  }, []);

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: formSchema,
      onSubmit: async (values, action) => {
        setLoading(true);
        await axios
          .post(
            `${url}/people/`,
            {
              first_name: values.firstname,
              last_name: values.lastname,
              is_superuser: false,
              email: values.email,
              role: values.accessLevel,
              business: props.businessId,
              profile: {
                phone_number: values.mobile,
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
            setLoading(false);
            props.getBusiness();
            props.handleClose();
            action.resetForm();
          })
          .catch((error) => {
            console.log("Error", error.response);
            toast.error(error.response.data.non_field_errors[0]);
            setLoading(false);
          });
      },
    });

  return (
    <>
      <Box
        sx={{
          ...style,
          mt: 15,
          width: 660,
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
          <h2 className="set">Add Team member</h2>
          <CloseIcon
            onClick={props.handleClose}
            sx={{ cursor: "pointer" }}
          ></CloseIcon>
        </Box>
        <Grid sx={{ display: "flex", flexDirection: "row", pt: "20px" }}>
          <Avatar
            src={Capture}
            sx={{
              height: "150px",
              width: "150px",
            }}
            variant="rounded"
          />
          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                mt: "10px",
                pt: "20px",
              }}
            >
              Invite with a unique link
            </Typography>
            <Typography sx={{ mt: "5px", fontSize: "14px" }}>
              Don't know your team's email addresses? Share the unique link
              below to get your team onto your uRoaster workplace faster. To
              keep things secured, you will need to approve each request.
            </Typography>
          </Box>
        </Grid>

        <Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <TextField
              size="small"
              disabled
              sx={{
                mt: "10px",
                width: 350,
                ml: 18,
              }}
              value={inviteLink}
            >
              {inviteLink}
            </TextField>
            <Button
              className="all-green-btns"
              variant="contained"
              size="small"
              sx={{
                borderRadius: "5px",
                mt: "12px",
                ml: 2,
                width: "100px",
                height: "30px",
                textTransform: "capitalize",
              }}
            >
              Copy link
            </Button>
          </Box>
          <Typography style={{ color: "#38b492" }} sx={{ ml: 18, pt: "5px" }}>
            How invite links work
          </Typography>
          <Box sx={{ pt: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Typography sx={{ width: 140 }}>First name</Typography>
              <Box sx={{ width: 450 }}>
                <TextField
                  name="firstname"
                  size="small"
                  sx={{
                    font: "inherit",
                    width: "100%",
                    borderRadius: "8px",
                  }}
                  placeholder="Please input"
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.firstname && touched.firstname ? (
                  <small style={{ color: "red" }}>{errors.firstname}</small>
                ) : null}
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Typography sx={{ width: 140 }}>Last name</Typography>
              <Box sx={{ width: 450 }}>
                <TextField
                  name="lastname"
                  size="small"
                  sx={{
                    font: "inherit",
                    width: "100%",
                    borderRadius: "8px",
                  }}
                  placeholder="Please input "
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.lastname && touched.lastname ? (
                  <small style={{ color: "red" }}>{errors.lastname}</small>
                ) : null}
              </Box>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Typography sx={{ width: 140 }}>Main Location</Typography>
              <FormControl size="small">
                <Select
                  name="mainLocation"
                  sx={{
                    font: "inherit",
                    width: 450,
                    borderRadius: "8px",
                  }}
                  displayEmpty
                  label="Location"
                  input={<OutlinedInput />}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem disabled value=""></MenuItem>
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {names.map((name, idx) => (
                    <MenuItem key={name} value={idx}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Typography sx={{ width: 140 }}>Other Location</Typography>
              <FormControl size="small">
                <Select
                  name="otherLocation"
                  sx={{
                    font: "inherit",
                    width: 300,
                    borderRadius: "8px",
                  }}
                  displayEmpty
                  label="Other Location"
                  input={<OutlinedInput />}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {names.map((name, idx) => (
                    <MenuItem key={name} value={idx}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Typography sx={{ width: 140 }}>Mobile</Typography>
              <FormControl size="small">
                <Box sx={{ width: 450 }}>
                  <TextField
                    name="mobile"
                    size="small"
                    sx={{
                      font: "inherit",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    placeholder="Please input"
                    value={values.mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.mobile && touched.mobile ? (
                    <small style={{ color: "red" }}>{errors.mobile}</small>
                  ) : null}
                </Box>
              </FormControl>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Typography sx={{ width: 140 }}>Email</Typography>
              <FormControl size="small">
                <Box sx={{ width: 450 }}>
                  <TextField
                    name="email"
                    size="small"
                    sx={{
                      font: "inherit",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    placeholder="Please input"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.email && touched.email ? (
                    <small style={{ color: "red" }}>{errors.email}</small>
                  ) : null}
                </Box>
              </FormControl>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
              <Typography sx={{ width: 140 }}>Access level</Typography>
              <FormControl size="small">
                <Box sx={{ width: 450 }}>
                  <Select
                    name="accessLevel"
                    sx={{
                      font: "inherit",
                      width: "100%",
                      borderRadius: "8px",
                    }}
                    displayEmpty
                    value={values.accessLevel}
                    handleBlur={handleBlur}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    label="Access Level"
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {access.map((name, idx) => (
                      <MenuItem key={name} value={idx}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
                {errors.accessLevel && touched.accessLevel ? (
                  <small style={{ color: "red" }}>{errors.accessLevel}</small>
                ) : null}
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mr: 2,
              mt: 4,
            }}
          >
            <Checkbox
              name="inviteCheckbox"
              size="small"
              sx={{ pr: "5px", color: "rgba(95, 91, 81, 0.518)" }}
            />
            <Typography sx={{ color: "rgba(95, 91, 81, 0.518)" }}>
              Invite to use Maxpilot
            </Typography>
          </Box>
          <Button
            sx={{
              textTransform: "capitalize",
              width: 180,
              height: 35,
              mt: 4,
              borderRadius: 2,
            }}
            className="all-green-btns"
            variant="contained"
            onClick={handleSubmit}
          >
            {loading ? (
              <CircularProgress color="inherit" size={25} />
            ) : (
              <>Add Team member</>
            )}
          </Button>
        </Box>
      </Box>
    </>
  );
}
