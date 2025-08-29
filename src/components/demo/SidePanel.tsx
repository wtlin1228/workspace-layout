import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardHeader, { type CardHeaderProps } from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const SidePanelHeader = (props: CardHeaderProps) => {
  return (
    <CardHeader
      slotProps={{
        avatar: { sx: { mr: 1 } },
        title: { variant: "subtitle1" },
        subheader: { variant: "body2", sx: { mt: 1.5 } },
      }}
      {...props}
    />
  );
};

const SidePanelHeader1Demo = () => {
  return (
    <SidePanelHeader
      title="Layout"
      subheader="Workspace modeling and spatial relationships"
      action={
        <IconButton color="primary">
          <AddIcon />
        </IconButton>
      }
    />
  );
};

const SidePanelHeader2Demo = () => {
  return (
    <SidePanelHeader
      title="Layout"
      subheader="Workspace modeling and spatial relationships"
    />
  );
};

const SidePanelHeader3Demo = () => {
  return (
    <SidePanelHeader
      title="Layout"
      action={
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
    />
  );
};

const SidePanelHeader4Demo = () => {
  return (
    <SidePanelHeader
      avatar={
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
      }
      title="Layout"
      subheader="Workspace modeling and spatial relationships"
    />
  );
};

const SidePanelHeader5Demo = () => {
  return (
    <SidePanelHeader
      title={
        <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
          <Typography variant="body1">Layout</Typography>
          <Tooltip title="Tooltip">
            <IconButton>
              <InfoOutlineIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      }
    />
  );
};

const SidePanelHeader6Demo = () => {
  return (
    <SidePanelHeader
      title={
        <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
          <Typography variant="body1">Layout</Typography>
          <Tooltip title="Tooltip">
            <IconButton>
              <InfoOutlineIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      }
      action={
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
    />
  );
};

export const SidePanelHeaderDemo = () => {
  return (
    <Stack>
      <SidePanelHeader1Demo />
      <SidePanelHeader2Demo />
      <SidePanelHeader3Demo />
      <SidePanelHeader4Demo />
      <SidePanelHeader5Demo />
      <SidePanelHeader6Demo />
    </Stack>
  );
};

SidePanelHeaderDemo.codeString = `
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import { SidePanelHeader } from "components/feature/workpace";

<SidePanelHeader
  avatar={
    <IconButton>
      <ArrowBackIcon />
    </IconButton>
  }
  title="Layout"
  subheader="Workspace modeling and spatial relationships"
/>

import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { SidePanelHeader } from "components/feature/workpace";

<SidePanelHeader
  title={
    <Stack direction="row" sx={{ alignItems: "center" }} spacing={1}>
      <Typography variant="body1">Layout</Typography>
      <Tooltip title="Tooltip">
        <IconButton>
          <InfoOutlineIcon />
        </IconButton>
      </Tooltip>
    </Stack>
  }
  action={
    <IconButton>
      <MoreVertIcon />
    </IconButton>
  }
/>
`;
