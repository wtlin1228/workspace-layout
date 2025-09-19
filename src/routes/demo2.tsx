import { createFileRoute } from "@tanstack/react-router";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { CodeBlock } from "../components/CodeBlock";
import { EmptyListItemDemo } from "../components/demo2/List";
import { SelectableContainerDemo } from "../components/demo2/SelectableContainerDemo";
import { SearchDemo } from "../components/demo2/Search";

const demos = [
  {
    id: "empty-list-item",
    title: "Empty List Item",
    component: <EmptyListItemDemo />,
    code: EmptyListItemDemo.codeString,
  },
  {
    id: "selectable-container",
    title: "Selectable Container",
    component: <SelectableContainerDemo />,
    code: SelectableContainerDemo.codeString,
  },
  {
    id: "search",
    title: "Search",
    component: <SearchDemo />,
    code: SearchDemo.codeString,
  },
];

export const Route = createFileRoute("/demo2")({
  component: Demo2,
});

function Demo2() {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ width: "100%" }}>
          {demos.map(({ id, title, component, code }, idx) => (
            <React.Fragment key={idx}>
              <Grid size={12}>
                <Box sx={{ mt: 2, mb: 4 }}>
                  <Typography
                    id={id}
                    variant="h1"
                    sx={{ textAlign: "center", fontWeight: 500 }}
                  >
                    <Link
                      href={`#${id}`}
                      underline="hover"
                      color="inherit"
                      sx={{ cursor: "pointer" }}
                    >
                      {title}
                    </Link>
                  </Typography>
                </Box>
              </Grid>
              <Grid size={6}>
                <Stack sx={{ alignItems: "center" }}>{component}</Stack>
              </Grid>
              <Grid size={6}>
                <CodeBlock codeString={code} />
              </Grid>
              <Grid size={12}>
                <Divider />
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
