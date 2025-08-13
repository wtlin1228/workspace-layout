import Box from "@mui/material/Box";
import { createFileRoute } from "@tanstack/react-router";

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
      }}
    ></Box>
  );
}
