import Box from "@mui/material/Box";
import { createFileRoute } from "@tanstack/react-router";

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
      }}
    ></Box>
  );
}
