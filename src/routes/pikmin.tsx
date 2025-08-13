import Box from "@mui/material/Box";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { LeftPanel } from "../components/SidePanel";

export const Route = createFileRoute("/pikmin")({
  component: Pikmin,
});

function Pikmin() {
  return (
    <Box
      sx={{
        backgroundImage: `url("/bg-pikmin.jpg")`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "100%",
        position: "relative",
      }}
    >
      <LeftPanel>Left Panel</LeftPanel>
      <Outlet />
    </Box>
  );
}
