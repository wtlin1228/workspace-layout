import { createFileRoute } from "@tanstack/react-router";
import { IconButtonDemo } from "../components/demo/IconButton";
import { DialogDemo } from "../components/demo/Dialog";
import Stack from "@mui/material/Stack";
import { StepperDemo } from "../components/demo/Stepper";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import { SidePanelCardDemo } from "../components/demo/SidePanelCard";
import Box from "@mui/material/Box";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <h3>Welcome Home!</h3>

      <Container maxWidth="md">
        <Stack
          divider={<Divider flexItem />}
          direction="column"
          spacing={2}
          sx={{ p: 2, alignItems: "center" }}
        >
          <IconButtonDemo />
          <DialogDemo />
          <Box sx={{ width: 560 }}>
            <StepperDemo />
          </Box>
          <Box sx={{ width: 320 }}>
            <SidePanelCardDemo />
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
