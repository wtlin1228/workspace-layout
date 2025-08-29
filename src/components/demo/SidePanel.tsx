import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardHeader, { type CardHeaderProps } from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { PanelCardDemo, PanelCardEmptyContent1Demo } from "./PanelCard";
import Card, { type CardProps } from "@mui/material/Card";
import CardContent, { type CardContentProps } from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";

const StyledCardHeader = styled(CardHeader)({
  padding: 0,
});

const SidePanelHeader = (props: CardHeaderProps) => {
  return (
    <StyledCardHeader
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
    <Stack spacing={4}>
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

const StyledSidePanel = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
  width: 352,
}));

const SidePanel = (props: CardProps) => {
  return <StyledSidePanel {...props} />;
};

const StyledSidePanelContent = styled(CardContent)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: 0,

  "&:last-child": {
    paddingBottom: 0,
  },
}));

const SidePanelContent = (props: CardContentProps) => {
  return <StyledSidePanelContent {...props} />;
};

const SidePanel1Demo = () => {
  return (
    <SidePanel elevation={5}>
      <SidePanelHeader1Demo />
      <SidePanelContent>
        <PanelCardDemo />
      </SidePanelContent>
      <SidePanelContent>
        <PanelCardEmptyContent1Demo />
      </SidePanelContent>
    </SidePanel>
  );
};

export const SidePanelDemo = () => {
  return (
    <Stack spacing={2}>
      <SidePanel1Demo />
    </Stack>
  );
};

SidePanelDemo.codeString = `
import { 
  SidePanel, 
  SidePanelHeader,
  SidePanelContent,
  PanelCard,
} from "components/feature/workpace";

<SidePanel>
  <SidePanelHeader>{ /* ... */ }</SidePanelHeader>
  <SidePanelContent>
    <PanelCard>{ /* ... */ }</PanelCard>
  </SidePanelContent>
  <SidePanelContent>
    <PanelCard>{ /* ... */ }</PanelCard>
  </SidePanelContent>
</SidePanel>
`;
