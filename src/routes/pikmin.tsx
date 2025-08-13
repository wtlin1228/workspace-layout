import Box from "@mui/material/Box";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { LeftPanel } from "../components/SidePanel";
import ListItem from "@mui/material/ListItem";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { CustomLink } from "../components/CustomLink";

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
      <LeftPanel>
        <Stack spacing={1} direction="column">
          <Paper elevation={2}>
            <ListItem component="div">
              <CustomLink to="/pikmin/friends">Friends</CustomLink>
            </ListItem>
          </Paper>
          <Paper elevation={2}>
            <ListItem component="div">
              <CustomLink to="/pikmin/power">Power</CustomLink>
            </ListItem>
          </Paper>
          <Paper elevation={2}>
            <ListItem component="div">
              <CustomLink to="/pikmin/cafe">Cafe</CustomLink>
            </ListItem>
          </Paper>
        </Stack>
      </LeftPanel>
      <Outlet />
    </Box>
  );
}
