import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";

import { CodeBlock } from "../components/CodeBlock";
import { ContentCardDemo } from "../components/demo/ContentCard";
import { DialogDemo } from "../components/demo/Dialog";
import { IconButtonDemo } from "../components/demo/IconButton";
import { ListDemo } from "../components/demo/List";
import {
  PanelCardDemo,
  PanelCardEmptyContentDemo,
} from "../components/demo/PanelCard";
import { RadioDemo } from "../components/demo/Radio";
import {
  SidePanelDemo,
  SidePanelHeaderDemo,
  SidePanelScrollDemo,
} from "../components/demo/SidePanel";
import { StepperDemo } from "../components/demo/Stepper";
import { SwitchDemo } from "../components/demo/Switch";

export const Route = createFileRoute("/")({
  component: Index,
});

const demos = [
  {
    title: "Icon Button",
    component: <IconButtonDemo />,
    code: IconButtonDemo.codeString,
  },
  {
    title: "Dialog",
    component: <DialogDemo />,
    code: DialogDemo.codeString,
  },
  {
    title: "Stepper",
    component: <StepperDemo />,
    code: StepperDemo.codeString,
  },
  {
    title: "Panel Card",
    component: (
      <Box sx={{ width: 320 }}>
        <PanelCardDemo />
      </Box>
    ),
    code: PanelCardDemo.codeString,
  },
  {
    title: "Panel Card (Empty Content)",
    component: (
      <Box sx={{ width: 320 }}>
        <PanelCardEmptyContentDemo />
      </Box>
    ),
    code: PanelCardEmptyContentDemo.codeString,
  },
  {
    title: "Content Card",
    component: (
      <Box sx={{ width: 320 }}>
        <ContentCardDemo />
      </Box>
    ),
    code: ContentCardDemo.codeString,
  },
  { title: "List", component: <ListDemo />, code: ListDemo.codeString },
  { title: "Switch", component: <SwitchDemo />, code: SwitchDemo.codeString },
  { title: "Radio", component: <RadioDemo />, code: RadioDemo.codeString },
  {
    title: "Side Panel Header",
    component: <SidePanelHeaderDemo />,
    code: SidePanelHeaderDemo.codeString,
  },
  {
    title: "Side Panel",
    component: <SidePanelDemo />,
    code: SidePanelDemo.codeString,
  },
  {
    title: "Side Panel (Scroll)",
    component: (
      <Stack spacing={2}>
        <Box sx={{ height: 300 }}>
          <SidePanelScrollDemo />
        </Box>
        <Box sx={{ height: 550 }}>
          <SidePanelScrollDemo />
        </Box>
      </Stack>
    ),
    code: SidePanelScrollDemo.codeString,
  },
];

function Index() {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ width: "100%" }}>
          {demos.map(({ title, component, code }, idx) => (
            <React.Fragment key={idx}>
              <Grid size={12}>
                <Box sx={{ mt: 2, mb: 4 }}>
                  <Typography
                    variant="h1"
                    sx={{ textAlign: "center", fontWeight: 500 }}
                  >
                    {title}
                  </Typography>
                </Box>
              </Grid>
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
