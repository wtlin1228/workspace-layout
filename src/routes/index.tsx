import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";

import { CodeBlock } from "../components/CodeBlock";
import { ContentCardDemo } from "../components/demo/ContentCard";
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

const demos = [
  { component: <IconButtonDemo />, code: IconButtonDemo.codeString },
  { component: <DialogDemo />, code: DialogDemo.codeString },
  { component: <StepperDemo />, code: StepperDemo.codeString },
  {
    component: (
      <Box sx={{ width: 320 }}>
        <SidePanelCardDemo />
      </Box>
    ),
    code: SidePanelCardDemo.codeString,
  },
  {
    component: (
      <Box sx={{ width: 320 }}>
        <SidePanelCardEmptyContentDemo />
      </Box>
    ),
    code: SidePanelCardEmptyContentDemo.codeString,
  },
  {
    component: (
      <Box sx={{ width: 320 }}>
        <ContentCardDemo />
      </Box>
    ),
    code: ContentCardDemo.codeString,
  },
  { component: <ListDemo />, code: ListDemo.codeString },
  { component: <SwitchDemo />, code: SwitchDemo.codeString },
  { component: <RadioDemo />, code: RadioDemo.codeString },
  { component: <SidePanelHeaderDemo />, code: SidePanelHeaderDemo.codeString },
];

function Index() {
  return (
    <div>
      <h3>Welcome Home!</h3>

      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ width: "100%" }}>
          {demos.map(({ component, code }, idx) => (
            <React.Fragment key={idx}>
              <Grid size={6}>
                <Stack sx={{ alignItems: "center" }}>{component}</Stack>
              </Grid>
              <Grid size={6}>
                <CodeBlock codeString={code} />
              </Grid>
              <Grid size={12}>
                <Divider />
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
