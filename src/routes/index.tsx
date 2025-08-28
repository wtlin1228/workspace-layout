import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { createFileRoute } from "@tanstack/react-router";

import { CodeBlock } from "../components/CodeBlock";
import { ContentCardButtonDemo } from "../components/demo/ContentCard";
import { DialogDemo } from "../components/demo/Dialog";
import { IconButtonDemo } from "../components/demo/IconButton";
import { ListDemo } from "../components/demo/List";
import { RadioDemo } from "../components/demo/Radio";
import { SidePanelHeaderDemo } from "../components/demo/SidePanel";
import {
  SidePanelCardDemo,
  SidePanelCardEmptyContentDemo,
} from "../components/demo/SidePanelCard";
import { StepperDemo } from "../components/demo/Stepper";
import { SwitchDemo } from "../components/demo/Switch";

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
          <Grid size={6}>
            <Stack sx={{ alignItems: "center" }}>
              <Box sx={{ width: 320 }}>
                <SidePanelCardDemo />
              </Box>
            </Stack>
          </Grid>
          <Grid size={6}>
            <CodeBlock codeString={SidePanelCardDemo.codeString} />
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>
          <Grid size={6}>
            <Stack sx={{ alignItems: "center" }}>
              <Box sx={{ width: 320 }}>
                <SidePanelCardEmptyContentDemo />
              </Box>
            </Stack>
          </Grid>
          <Grid size={6}>
            <CodeBlock codeString={SidePanelCardEmptyContentDemo.codeString} />
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>
          <Grid size={6}>
            <Stack sx={{ alignItems: "center" }}>
              <Box sx={{ width: 320 }}>
                <ContentCardButtonDemo />
              </Box>
            </Stack>
          </Grid>
          <Grid size={6}>
            <CodeBlock codeString={ContentCardButtonDemo.codeString} />
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>
          <Grid size={6}>
            <Stack sx={{ alignItems: "center" }}>
              <ListDemo />
            </Stack>
          </Grid>
          <Grid size={6}>
            <CodeBlock codeString={ListDemo.codeString} />
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>
          <Grid size={6}>
            <Stack sx={{ alignItems: "center" }}>
              <SwitchDemo />
            </Stack>
          </Grid>
          <Grid size={6}>
            <CodeBlock codeString={SwitchDemo.codeString} />
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>
          <Grid size={6}>
            <Stack sx={{ alignItems: "center" }}>
              <RadioDemo />
            </Stack>
          </Grid>
          <Grid size={6}>
            <CodeBlock codeString={RadioDemo.codeString} />
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>
          <Grid size={6}>
            <Stack sx={{ alignItems: "center" }}>
              <SidePanelHeaderDemo />
            </Stack>
          </Grid>
          <Grid size={6}>
            <CodeBlock codeString={SidePanelHeaderDemo.codeString} />
          </Grid>
          <Grid size={12}>
            <Divider />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
