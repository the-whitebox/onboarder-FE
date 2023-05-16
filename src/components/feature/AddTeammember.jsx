import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import CloseIcon from "@mui/icons-material/Close";
import Capture from "../../assets/images/Capture.png";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import GlobalContext from "../../context/GlobalContext";
import Cookies from "js-cookie";
const formSchema = Yup.object({
  // business: Yup.array()
  //   .min(1, "Please select a business")
  //   .required("Please select a business"),
  business: Yup.string().required("Please select a business"),
  firstname: Yup.string().required("Please enter your firstname"),
  lastname: Yup.string().required("Please enter your lastname"),
  mainLocation: Yup.string().required("Please select your main location"),
  otherLocation: Yup.string().required("Please select your other location"),
  mobile: Yup.string().required("Please enter your mobile number"),
  email: Yup.string().email().required("Please enter your email"),
  accessLevel: Yup.string().required("Please select access level"),
  employmentType: Yup.string().required("Please select employment type"),
  payPeriod: Yup.string().required("Please select pay period"),
  payRates: Yup.string().required("Please select pay rates"),
  payCenter: Yup.string().required("Please select pay center"),
  payrollID: Yup.string().required("Please enter payroll ID"),
});
const initialValues = {
  // business: [],
  business: "",
  firstname: "",
  lastname: "",
  mainLocation: "",
  otherLocation: "",
  mobile: "",
  email: "",
  accessLevel: "",
  employmentType: "",
  payPeriod: "",
  payRates: "",
  payCenter: "",
  payrollID: "",
};

const style = {
  width: { xl: "700px", md: "auto", sm: "550px" },
  height: "auto",
  position: "absolute",
  top: { xl: "2%", sm: "5%" },
  left: "50%",
  transform: "translate(-50%, 0%)",
  bgcolor: "background.paper",
  borderRadius: "8px ",
  boxShadow: 24,
  py: 3,
  borderRadius: "39px",
  boxSizing: "border-box",
};

export default function Addteammember(props) {
  const { userInfo } = React.useContext(GlobalContext);
  const token = Cookies.get("token");
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
              business: [values.business],
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
            toast.success("Team member added successfully");
            setLoading(false);
            props.getBusiness();
            props.handleCloseAddTeam();
            action.resetForm();
          })
          .catch((error) => {
            toast.error(error.response.data.email[0]);
            setLoading(false);
          });
      },
    });

  return (
    <>
      <Box sx={style}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 3,
          }}
        >
          <Typography
            sx={{ color: "#131523", fontSize: "24px", fontWeight: "bold" }}
          >
            Add Team members
          </Typography>
          <CloseIcon
            onClick={props.handleCloseAddTeam}
            sx={{
              cursor: "pointer",
              background: "#2BB491",
              color: "white",
              borderRadius: "100%",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 2,
            background: "#E6F4EB",
            px: 3,
            py: 1,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "20px",
                color: "#2BB491",
              }}
            >
              Invite with a unique link
            </Typography>
            <Typography sx={{ mt: "5px", fontSize: "14px" }}>
              Don’t know your team’s email addresses? Share the unique link
              below to get your Team onto your MAXpilot Workplace faster. To
              keep things secured, you will need to Approve each request.
            </Typography>
            <Box
              sx={{
                mt: 1,
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <Button
                className="all-green-btns"
                variant="contained"
                sx={{
                  color: "white",
                  textTransform: "none",
                  borderColor: "10px",
                }}
              >
                Generate Link
              </Button>
              <Typography sx={{ color: "#2BB491", ml: 2 }}>
                How invite links work
              </Typography>
            </Box>
          </Box>
          <Avatar
            src={Capture}
            sx={{
              height: "150px",
              width: "150px",
            }}
            variant="rounded"
          />
        </Box>
        <Box sx={{ px: { sm: 5, xl: 8 }, mt: 5 }}>
          <Grid container sx={{ display: "flex", alignItems: "center" }}>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography>Business</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <Select
                fullWidth
                name="business"
                // multiple
                displayEmpty
                size="small"
                variant="standard"
                disableUnderline
                sx={{
                  "& .MuiSelect-select": {
                    p: "5px 15px 5px 15px",
                    background: "none",
                  },
                  "& .MuiSelect-select:focus": {
                    background: "none",
                  },
                  "& .MuiSelect-icon": { right: "5px" },
                  borderRadius: "25px",
                  border: "none !important",
                  outline: "none !important",
                  background: "#e6f4eb",
                  boxSizing: "border-box",
                }}
                value={values.business}
                handleBlur={handleBlur}
                onChange={handleChange}
                // renderValue={(selected) => {
                //   if (selected.length === 0) {
                //     return <>Select</>;
                //   }

                //   return selected.join(", ");
                // }}
              >
                <MenuItem value="" disabled>
                  Select
                </MenuItem>
                {userInfo?.business.map((data, index) => (
                  <MenuItem key={index} value={data.id}>
                    {data.business_name}
                  </MenuItem>
                ))}
              </Select>
              {errors.business && touched.business ? (
                <small style={{ color: "red" }}>{errors.business}</small>
              ) : null}
            </Grid>
          </Grid>

          <Grid container sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography>First Name</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <TextField
                fullWidth
                type="text"
                name="firstname"
                size="small"
                placeholder="Please input"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  p: "5px 10px 2px 10px",
                  borderRadius: "25px",
                  border: "none",
                  outline: "none ",
                  background: "#e6f4eb",
                  boxSizing: "border-box",
                }}
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.firstname && touched.firstname ? (
                <small style={{ color: "red" }}>{errors.firstname}</small>
              ) : null}
            </Grid>
          </Grid>

          <Grid container sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography>Last Name</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <TextField
                fullWidth
                type="text"
                name="lastname"
                size="small"
                placeholder="Please input"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  p: "5px 10px 2px 10px",
                  borderRadius: "25px",
                  border: "none",
                  outline: "none ",
                  background: "#e6f4eb",
                  boxSizing: "border-box",
                }}
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.lastname && touched.lastname ? (
                <small style={{ color: "red" }}>{errors.lastname}</small>
              ) : null}
            </Grid>
          </Grid>

          <Grid container sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography>Main Location</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <Select
                fullWidth
                name="mainLocation"
                displayEmpty
                size="small"
                variant="standard"
                disableUnderline
                sx={{
                  "& .MuiSelect-select": {
                    p: "5px 15px 5px 15px",
                    background: "none",
                  },
                  "& .MuiSelect-select:focus": {
                    background: "none",
                  },
                  "& .MuiSelect-icon": { right: "5px" },
                  borderRadius: "25px",
                  border: "none !important",
                  outline: "none !important",
                  background: "#e6f4eb",
                  boxSizing: "border-box",
                }}
                value={values.mainLocation}
                handleBlur={handleBlur}
                onChange={handleChange}
              >
                <MenuItem value="" disabled>
                  Select
                </MenuItem>
                {[
                  { id: 1, name: "value 1" },
                  { id: 2, name: "value 2" },
                ].map((data, index) => (
                  <MenuItem key={index} value={data.id}>
                    {data.name}
                  </MenuItem>
                ))}
              </Select>
              {errors.mainLocation && touched.mainLocation ? (
                <small style={{ color: "red" }}>{errors.mainLocation}</small>
              ) : null}
            </Grid>
          </Grid>

          <Grid container sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography>Other Location</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={5}>
              <Select
                fullWidth
                name="otherLocation"
                displayEmpty
                size="small"
                variant="standard"
                disableUnderline
                sx={{
                  "& .MuiSelect-select": {
                    p: "5px 15px 5px 15px",
                    background: "none",
                    // width: "100px",
                  },
                  "& .MuiSelect-select:focus": {
                    background: "none",
                  },
                  "& .MuiSelect-icon": { right: "5px" },
                  borderRadius: "25px",
                  border: "none !important",
                  outline: "none !important",
                  background: "#e6f4eb",
                  boxSizing: "border-box",
                }}
                value={values.otherLocation}
                handleBlur={handleBlur}
                onChange={handleChange}
              >
                <MenuItem value="" disabled>
                  Select
                </MenuItem>
                {[
                  { id: 1, name: "value 1" },
                  { id: 2, name: "value 2" },
                ].map((data, index) => (
                  <MenuItem key={index} value={data.id}>
                    {data.name}
                  </MenuItem>
                ))}
              </Select>
              {errors.otherLocation && touched.otherLocation ? (
                <small style={{ color: "red" }}>{errors.otherLocation}</small>
              ) : null}
            </Grid>
          </Grid>

          <Grid container sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography>Mobile</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <TextField
                fullWidth
                type="text"
                name="mobile"
                size="small"
                placeholder="Please input"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  p: "5px 10px 2px 10px",
                  borderRadius: "25px",
                  border: "none",
                  outline: "none ",
                  background: "#e6f4eb",
                  boxSizing: "border-box",
                }}
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.mobile && touched.mobile ? (
                <small style={{ color: "red" }}>{errors.mobile}</small>
              ) : null}
            </Grid>
          </Grid>

          <Grid container sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography>Email</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <TextField
                fullWidth
                type="text"
                name="email"
                size="small"
                placeholder="Please input"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  p: "5px 10px 2px 10px",
                  borderRadius: "25px",
                  border: "none",
                  outline: "none ",
                  background: "#e6f4eb",
                  boxSizing: "border-box",
                }}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <small style={{ color: "red" }}>{errors.email}</small>
              ) : null}
            </Grid>
          </Grid>

          <Grid container sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography>Access Level</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <Select
                fullWidth
                name="accessLevel"
                displayEmpty
                size="small"
                variant="standard"
                disableUnderline
                sx={{
                  "& .MuiSelect-select": {
                    p: "5px 15px 5px 15px",
                    background: "none",
                  },
                  "& .MuiSelect-select:focus": {
                    background: "none",
                  },
                  "& .MuiSelect-icon": { right: "5px" },
                  borderRadius: "25px",
                  border: "none !important",
                  outline: "none !important",
                  background: "#e6f4eb",
                  boxSizing: "border-box",
                }}
                value={values.accessLevel}
                handleBlur={handleBlur}
                onChange={handleChange}
              >
                <MenuItem value="" disabled>
                  Select
                </MenuItem>
                {[
                  { id: 1, name: "System Administrator" },
                  { id: 2, name: "Supervisor" },
                  { id: 3, name: "Employee" },
                  { id: 4, name: "Location Manager" },
                  { id: 5, name: "Advisor" },
                ].map((data, index) => (
                  <MenuItem key={index} value={data.id}>
                    {data.name}
                  </MenuItem>
                ))}
              </Select>
              {errors.accessLevel && touched.accessLevel ? (
                <small style={{ color: "red" }}>{errors.accessLevel}</small>
              ) : null}
            </Grid>
          </Grid>

          <Typography
            sx={{
              color: "#131523",
              textAlign: "center",
              mt: 5,
              fontWeight: 700,
              fontSize: "20px",
            }}
          >
            Employment Details
          </Typography>

          <Grid container sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography>Employment Type</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <Select
                fullWidth
                name="employmentType"
                displayEmpty
                size="small"
                variant="standard"
                disableUnderline
                sx={{
                  "& .MuiSelect-select": {
                    p: "5px 15px 5px 15px",
                    background: "none",
                  },
                  "& .MuiSelect-select:focus": {
                    background: "none",
                  },
                  "& .MuiSelect-icon": { right: "5px" },
                  borderRadius: "25px",
                  border: "none !important",
                  outline: "none !important",
                  background: "#e6f4eb",
                  boxSizing: "border-box",
                }}
                value={values.employmentType}
                handleBlur={handleBlur}
                onChange={handleChange}
              >
                <MenuItem value="" disabled>
                  Select
                </MenuItem>
                {[
                  { id: 1, name: "value 1" },
                  { id: 2, name: "value 2" },
                ].map((data, index) => (
                  <MenuItem key={index} value={data.id}>
                    {data.name}
                  </MenuItem>
                ))}
              </Select>
              {errors.employmentType && touched.employmentType ? (
                <small style={{ color: "red" }}>{errors.employmentType}</small>
              ) : null}
            </Grid>
          </Grid>

          <Grid container sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography>Pay Period</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <Select
                fullWidth
                name="payPeriod"
                displayEmpty
                size="small"
                variant="standard"
                disableUnderline
                sx={{
                  "& .MuiSelect-select": {
                    p: "5px 15px 5px 15px",
                    background: "none",
                  },
                  "& .MuiSelect-select:focus": {
                    background: "none",
                  },
                  "& .MuiSelect-icon": { right: "5px" },
                  borderRadius: "25px",
                  border: "none !important",
                  outline: "none !important",
                  background: "#e6f4eb",
                  boxSizing: "border-box",
                }}
                value={values.payPeriod}
                handleBlur={handleBlur}
                onChange={handleChange}
              >
                <MenuItem value="" disabled>
                  Select
                </MenuItem>
                {[
                  { id: 1, name: "value 1" },
                  { id: 2, name: "value 2" },
                ].map((data, index) => (
                  <MenuItem key={index} value={data.id}>
                    {data.name}
                  </MenuItem>
                ))}
              </Select>
              {errors.payPeriod && touched.payPeriod ? (
                <small style={{ color: "red" }}>{errors.payPeriod}</small>
              ) : null}
            </Grid>
          </Grid>

          <Grid container sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography>Pay Rates</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <Select
                fullWidth
                name="payRates"
                displayEmpty
                size="small"
                variant="standard"
                disableUnderline
                sx={{
                  "& .MuiSelect-select": {
                    p: "5px 15px 5px 15px",
                    background: "none",
                  },
                  "& .MuiSelect-select:focus": {
                    background: "none",
                  },
                  "& .MuiSelect-icon": { right: "5px" },
                  borderRadius: "25px",
                  border: "none !important",
                  outline: "none !important",
                  background: "#e6f4eb",
                  boxSizing: "border-box",
                }}
                value={values.payRates}
                handleBlur={handleBlur}
                onChange={handleChange}
              >
                <MenuItem value="" disabled>
                  Select
                </MenuItem>
                {[
                  { id: 1, name: "value 1" },
                  { id: 2, name: "value 2" },
                ].map((data, index) => (
                  <MenuItem key={index} value={data.id}>
                    {data.name}
                  </MenuItem>
                ))}
              </Select>
              {errors.payRates && touched.payRates ? (
                <small style={{ color: "red" }}>{errors.payRates}</small>
              ) : null}
            </Grid>
          </Grid>

          <Grid container sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography>Pay Center</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <Select
                fullWidth
                name="payCenter"
                displayEmpty
                size="small"
                variant="standard"
                disableUnderline
                sx={{
                  "& .MuiSelect-select": {
                    p: "5px 15px 5px 15px",
                    background: "none",
                  },
                  "& .MuiSelect-select:focus": {
                    background: "none",
                  },
                  "& .MuiSelect-icon": { right: "5px" },
                  borderRadius: "25px",
                  border: "none !important",
                  outline: "none !important",
                  background: "#e6f4eb",
                  boxSizing: "border-box",
                }}
                value={values.payCenter}
                handleBlur={handleBlur}
                onChange={handleChange}
              >
                <MenuItem value="" disabled>
                  Select
                </MenuItem>
                {[
                  { id: 1, name: "value 1" },
                  { id: 2, name: "value 2" },
                ].map((data, index) => (
                  <MenuItem key={index} value={data.id}>
                    {data.name}
                  </MenuItem>
                ))}
              </Select>
              {errors.payCenter && touched.payCenter ? (
                <small style={{ color: "red" }}>{errors.payCenter}</small>
              ) : null}
            </Grid>
          </Grid>

          <Grid container sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <Typography>Payroll ID</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <TextField
                fullWidth
                type="text"
                name="payrollID"
                size="small"
                placeholder="Please input"
                variant="standard"
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  p: "5px 10px 2px 10px",
                  borderRadius: "25px",
                  border: "none",
                  outline: "none ",
                  background: "#e6f4eb",
                  boxSizing: "border-box",
                }}
                value={values.payrollID}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.payrollID && touched.payrollID ? (
                <small style={{ color: "red" }}>{errors.payrollID}</small>
              ) : null}
            </Grid>
          </Grid>

          <Grid container>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
                  sx={{
                    pr: "5px",
                    color: "#2BB491",
                    "&.Mui-checked": {
                      color: "#2BB491",
                    },
                  }}
                />
                <Typography sx={{ color: "rgba(95, 91, 81, 0.518)" }}>
                  Invite to use MAXpilot
                </Typography>
              </Box>
              <Button
                sx={{
                  textTransform: "capitalize",
                  width: "30%",
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
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
