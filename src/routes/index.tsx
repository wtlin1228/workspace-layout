import { createFileRoute } from "@tanstack/react-router";
import { IconButtonDemo } from "../components/demo/IconButton";
import { DialogDemo } from "../components/demo/Dialog";
import Stack from "@mui/material/Stack";
import { StepperDemo } from "../components/demo/Stepper";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import {
  SidePanelCardDemo,
  SidePanelCardEmptyDemo,
} from "../components/demo/SidePanelCard";
import Box from "@mui/material/Box";
import { CodeBlock } from "../components/CodeBlock";
import Grid from "@mui/material/Grid";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <h3>Welcome Home!</h3>

      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ width: "100%" }}>
          <Grid size={6}>
            <Stack sx={{ alignItems: "center" }}>
              <IconButtonDemo />
            </Stack>
          </Grid>
          <Grid size={6}>
            <CodeBlock codeString={IconButtonDemo.codeString} />
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>

          <Grid size={6}>
            <Stack sx={{ alignItems: "center" }}>
              <DialogDemo />
            </Stack>
          </Grid>
          <Grid size={6}>
            <CodeBlock codeString={DialogDemo.codeString} />
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>

          <Grid size={6}>
            <Stack sx={{ alignItems: "center" }}>
              <StepperDemo />
            </Stack>
          </Grid>
          <Grid size={6}>
            <CodeBlock codeString={StepperDemo.codeString} />
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>
        </Grid>

        <Box sx={{ width: 560 }}></Box>
        <Box sx={{ width: 320 }}>
          <SidePanelCardDemo />
        </Box>
        <Box sx={{ width: 320 }}>
          <SidePanelCardEmptyDemo />
        </Box>
      </Container>
    </div>
  );
}
