import Box from "@mui/material/Box";
import { createFileRoute } from "@tanstack/react-router";

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
      }}
    ></Box>
  );
}
