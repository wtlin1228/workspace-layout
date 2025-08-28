import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { createRootRoute, Outlet } from "@tanstack/react-router";

import { ResponsiveAppBar } from "../components/Appbar";
import { BasicBreadcrumbs } from "../components/Breadcrumbs";
import { LeftNavigation } from "../components/LeftNav";
import { SidePanelProvider } from "../components/SidePanel";

export const Route = createRootRoute({
  component: () => (
    <>
      <ResponsiveAppBar />
      <BasicBreadcrumbs />
      <Stack direction="row" sx={{ minHeight: "calc(100vh - 57px - 68.5px)" }}>
        <LeftNavigation />
        <Box sx={{ borderLeft: "1px solid grey", pl: 1, width: "100%" }}>
          <SidePanelProvider>
            <Outlet />
          </SidePanelProvider>
        </Box>
      </Stack>
    </>
  ),
});
