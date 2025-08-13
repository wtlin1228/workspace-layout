import Box from "@mui/material/Box";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { LeftPanel } from "../components/SidePanel";

export const Route = createFileRoute("/kirby")({
  component: Kirby,
});

function Kirby() {
  return (
    <Box
      sx={{
        backgroundImage: `url("/bg-kirby.webp")`,
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
