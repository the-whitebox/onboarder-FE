import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import "../../style/Step1.css";
import Link from "@mui/material/Link";
import FormLabel from "@mui/joy/FormLabel";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RightSideImage from "../../assets/images/bg-image.png";
import Item from "antd/es/list/Item";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Icon1 from "../../assets/icons/health-icon.png";
import Icon2 from "../../assets/icons/retail-icon.png";
import Icon3 from "../../assets/icons/services-icon.png";
import Icon4 from "../../assets/icons/charity-icon.png";
import Icon5 from "../../assets/icons/others-icon.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  bgcolor: "background.paper",
  borderRadius: "23px",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const theme = useTheme();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const icons = [Icon1, Icon2, Icon3, Icon4, Icon5];

  return (
    <div>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={0} square>
          <Box
            sx={{
              mt: 7,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <Typography
              className="font-loader"
              component="h2"
              variant="body1"
              sx={{
                fontWeight: "Bold",
                fontSize: "43px",
                color: "#38B492",
              }}
            >
              UROSTERS
            </Typography>
            <Typography
              className="font-loader"
              component="h2"
              variant="body1"
              sx={{
                fontWeight: "Regular",
                fontSize: "20px",
                color: "#8D8D8F",
              }}
            >
              Step 1 of 3
            </Typography>
            <Typography
              className="lora-bold"
              component="h2"
              variant="body1"
              sx={{
                fontWeight: "Bold",
                fontSize: "46px",
                color: "#332A60",
              }}
            >
              Tell us a bit about your business
            </Typography>
            <Typography
              className="font-loader"
              component="h2"
              variant="body1"
              sx={{
                fontWeight: "Regular",
                fontSize: "20px",
                color: "#8D8D8F",
              }}
            >
              We will personalize your trial experience
            </Typography>

            <Grid
              sx={{
                mt: 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                alignItems: "center",
              }}
            >
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#332A60",
                  }}
                >
                  What is your business?
                </Typography>
                <TextField
                  id="business"
                  variant="outlined"
                  sx={{
                    width: "90%",
                  }}
                />
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "#332A60",
                  }}
                >
                  What is your mobile number?
                </Typography>
                <TextField
                  id="mobile-number"
                  variant="outlined"
                  sx={{
                    width: "90%",
                  }}
                />
              </Grid>
            </Grid>
            <Typography
              sx={{
                mt: 2,
                fontWeight: "bold",
                fontSize: "18px",
                color: "#332A60",
              }}
            >
              What best describes your business?
            </Typography>
            <Grid
              item
              md={12}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <RadioGroup
                aria-label="platform"
                defaultValue="Website"
                overlay
                name="platform"
                sx={{
                  mt: 2,
                  flexDirection: "row",
                  gap: 2,
                  [`& .${radioClasses.checked}`]: {
                    [`& .${radioClasses.action}`]: {
                      inset: -1,
                      border: "3px solid",
                      borderColor: "primary.500",
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
              >
                {[
                  "Healthcare",
                  "Retail & Hospitality",
                  "Services",
                  "Charity",
                  "Other",
                ].map((value, idx) => (
                  <Sheet
                    key={value}
                    variant="outlined"
                    sx={{
                      borderRadius: "md",
                      bgcolor: "background.body",
                      boxShadow: "sm",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1.5,
                      p: 2,
                      minWidth: 120,
                    }}
                  >
                    <Radio
                      id={value}
                      value={value}
                      checkedIcon={<CheckCircleRoundedIcon />}
                    />
                    <Avatar variant="circular" size="sm" src={icons[idx]} />
                    <FormLabel htmlFor={value} sx={{ fontSize: "10px" }}>
                      {value}
                    </FormLabel>
                  </Sheet>
                ))}
              </RadioGroup>
            </Grid>
            <Typography
              sx={{
                mt: 2,
                fontWeight: "bold",
                fontSize: "18px",
                color: "#332A60",
              }}
            >
              Select your industry
            </Typography>
            <FormControl
              fullWidth
              sx={{
                mt: 2,
              }}
              className="input-border-radius"
            >
              <InputLabel id="demo-simple-select-label">Select</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                sx={{
                  width: "50%",
                }}
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <Link to="/step2">
              <Button
                type="submit"
                variant="contained"
                className="btn-forgetPwd btn-login"
                sx={{
                  mt: 4,
                  width: "89px",
                  borderRadius: "10px",
                  justifyContent: "center",
                }}
              >
                Next
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={false} sm={4} md={5} sx={{ backgroundColor: "#FFFFFF" }}>
          <Avatar
            src={RightSideImage}
            aria-label="UROOSTER"
            sx={{
              height: "100vh",
              width: "100%",
              objectFit: "Fill",
              borderRadius: "0px !important",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
