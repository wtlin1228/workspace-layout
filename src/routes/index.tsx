import { createFileRoute } from "@tanstack/react-router";
import { IconButtonDemo } from "../components/demo/IconButton";
import { DialogDemo } from "../components/demo/Dialog";
import Stack from "@mui/material/Stack";
import { StepperDemo } from "../components/demo/Stepper";
import Divider from "@mui/material/Divider";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <h3>Welcome Home!</h3>

      <Stack direction="column" spacing={2} divider={<Divider />} sx={{ p: 2 }}>
        <IconButtonDemo />
        <DialogDemo />
        <StepperDemo />
      </Stack>
    </div>
  );
}
