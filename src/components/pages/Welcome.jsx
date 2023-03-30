import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import RightSideImage from "../../assets/images/bg-image.png";

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

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Process pay with ease",
    description:
      "Ensure staff get paid correctly based on hours worked.\nEasily export these hours to your payroll provider to process the pay.",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    description: "This is a Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    description: "This is a Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    description: "This is a Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const label = { inputProps: { "aria-label": "Checkbox" } };

export default function BasicModal() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid item xs={12} sm={8} md={7} component={Paper} elevation={0} square>
          <Box
            sx={{
              mt: 10,
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
                fontSize: "20px",
                color: "#8D8D8F",
              }}
            >
              Creating your Trial
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
              We're setting up your MaxPilot trial
            </Typography>
            <Typography
              className="font-loader"
              component="h2"
              variant="body1"
              sx={{
                fontWeight: "Bold",
                fontSize: "20px",
                color: "#8D8D8F",
              }}
            >
              We will personalize your trial experience
            </Typography>
            <Box
              sx={{
                width: "235px",
                height: "17px",
                backgroundColor: "#F46962",
                borderRadius: "12px",
                mt: 2,
              }}
            ></Box>
            <Box
              sx={{
                width: "100%",
                mt: 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Paper
                square
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  pl: 2,
                  bgcolor: "background.default",
                }}
              >
                <Typography>{images[activeStep].label}</Typography>
                <Typography>{images[activeStep].description}</Typography>
              </Paper>
              <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {images.map((step, index) => (
                  <div key={step.label}>
                    {Math.abs(activeStep - index) <= 2 ? (
                      <Box
                        component="img"
                        sx={{
                          height: 255,
                          display: "block",
                          maxWidth: 400,
                          overflow: "hidden",
                          width: "100%",
                        }}
                        src={step.imgPath}
                        alt={step.label}
                      />
                    ) : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews>
            </Box>
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
