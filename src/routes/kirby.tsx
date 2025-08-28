import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { createFileRoute, Outlet } from "@tanstack/react-router";

import { CustomLink } from "../components/CustomLink";
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
      <LeftPanel>
        <Stack spacing={1} direction="column">
          <Paper elevation={2}>
            <ListItem component="div">
              <CustomLink to="/kirby/friends">Friends</CustomLink>
            </ListItem>
          </Paper>
          <Paper elevation={2}>
            <ListItem component="div">
              <CustomLink to="/kirby/power">Power</CustomLink>
            </ListItem>
          </Paper>
          <Paper elevation={2}>
            <ListItem component="div">
              <CustomLink to="/kirby/cafe">Cafe</CustomLink>
            </ListItem>
          </Paper>
        </Stack>
      </LeftPanel>
      <Outlet />
    </Box>
  );
}
