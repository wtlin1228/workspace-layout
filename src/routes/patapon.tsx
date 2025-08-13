import Box from "@mui/material/Box";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { LeftPanel } from "../components/SidePanel";

export const Route = createFileRoute("/patapon")({
  component: Patapon,
});

function Patapon() {
  return (
    <Box
      sx={{
        backgroundImage: `url("/bg-patapon2.webp")`,
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
