import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import * as React from "react";

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export function BasicBreadcrumbs() {
  return (
    <Box
      role="presentation"
      onClick={handleClick}
      sx={{ p: 2, borderBottom: "1px solid grey" }}
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography sx={{ color: "text.primary" }}>Breadcrumbs</Typography>
      </Breadcrumbs>
    </Box>
  );
}
