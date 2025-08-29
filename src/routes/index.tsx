import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";

import { CodeBlock } from "../components/CodeBlock";
import { ContentCardDemo } from "../components/demo/ContentCard";
import { DialogDemo } from "../components/demo/Dialog";
import { IconButtonDemo } from "../components/demo/IconButton";
import { ListDemo } from "../components/demo/List";
import { NavRailActionDemo, NavRailDemo } from "../components/demo/NavRail";
import {
  PanelCardDemo,
  PanelCardEmptyContentDemo,
  PanelCardSelectedDemo,
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
    id: "icon-button",
    title: "Icon Button",
    component: <IconButtonDemo />,
    code: IconButtonDemo.codeString,
  },
  {
    id: "dialog",
    title: "Dialog",
    component: <DialogDemo />,
    code: DialogDemo.codeString,
  },
  {
    id: "stepper",
    title: "Stepper",
    component: <StepperDemo />,
    code: StepperDemo.codeString,
  },
  {
    id: "panel-card",
    title: "Panel Card",
    component: (
      <Box sx={{ width: 320 }}>
        <PanelCardDemo />
      </Box>
    ),
    code: PanelCardDemo.codeString,
  },
  {
    id: "panel-card-empty",
    title: "Panel Card (Empty Content)",
    component: (
      <Box sx={{ width: 320 }}>
        <PanelCardEmptyContentDemo />
      </Box>
    ),
    code: PanelCardEmptyContentDemo.codeString,
  },
  {
    id: "panel-card-selected",
    title: "Panel Card (Selected)",
    component: (
      <Box sx={{ width: 320 }}>
        <PanelCardSelectedDemo />
      </Box>
    ),
    code: PanelCardSelectedDemo.codeString,
  },
  {
    id: "content-card",
    title: "Content Card",
    component: (
      <Box sx={{ width: 320 }}>
        <ContentCardDemo />
      </Box>
    ),
    code: ContentCardDemo.codeString,
  },
  {
    id: "list",
    title: "List",
    component: <ListDemo />,
    code: ListDemo.codeString,
  },
  {
    id: "switch",
    title: "Switch",
    component: <SwitchDemo />,
    code: SwitchDemo.codeString,
  },
  {
    id: "radio",
    title: "Radio",
    component: <RadioDemo />,
    code: RadioDemo.codeString,
  },
  {
    id: "side-panel-header",
    title: "Side Panel Header",
    component: <SidePanelHeaderDemo />,
    code: SidePanelHeaderDemo.codeString,
  },
  {
    id: "side-panel",
    title: "Side Panel",
    component: <SidePanelDemo />,
    code: SidePanelDemo.codeString,
  },
  {
    id: "side-panel-scroll",
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
  {
    id: "nav-rail-action",
    title: "Nav Rail Action",
    component: (
      <Stack spacing={2} sx={{ width: 104 }}>
        <NavRailActionDemo />
      </Stack>
    ),
    code: NavRailActionDemo.codeString,
  },
  {
    id: "nav-rail",
    title: "Nav Rail",
    component: (
      <Stack spacing={2}>
        <Box sx={{ height: 650 }}>
          <NavRailDemo />
        </Box>

        <Box sx={{ height: 300 }}>
          <NavRailDemo />
        </Box>
      </Stack>
    ),
    code: NavRailDemo.codeString,
  },
];

function Index() {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ width: "100%" }}>
          {demos.map(({ id, title, component, code }, idx) => (
            <React.Fragment key={idx}>
              <Grid size={12}>
                <Box sx={{ mt: 2, mb: 4 }}>
                  <Typography
                    id={id}
                    variant="h1"
                    sx={{ textAlign: "center", fontWeight: 500 }}
                  >
                    <Link
                      href={`#${id}`}
                      underline="hover"
                      color="inherit"
                      sx={{ cursor: "pointer" }}
                    >
                      {title}
                    </Link>
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
