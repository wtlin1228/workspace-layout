import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel, { type StepLabelProps } from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import * as React from "react";

const steps = ["Step1", "Step2", "Step3"];

const WorkspaceStepLabel = (props: StepLabelProps) => {
  return (
    <StepLabel
      slotProps={{
        label: {
          sx: {
            "&.Mui-active": {
              color: (theme) => theme.palette.primary.main,
            },
          },
        },
      }}
      {...props}
    />
  );
};

export function StepperDemo() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={index}>
              <WorkspaceStepLabel>{label}</WorkspaceStepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

StepperDemo.codeString = `
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import { WorkspaceStepLabel } from "components/feature/workpace";

const steps = ["Step1", "Step2", "Step3"];

<Stepper activeStep={activeStep}>
  {steps.map((label, index) => {
    return (
      <Step key={index}>
        <WorkspaceStepLabel>{label}</WorkspaceStepLabel>
      </Step>
    );
  })}
</Stepper>
`;
