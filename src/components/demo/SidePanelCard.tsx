import Card, { type CardProps } from "@mui/material/Card";
import CardHeader, { type CardHeaderProps } from "@mui/material/CardHeader";
import CardContent, { type CardContentProps } from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import PestControlRodentIcon from "@mui/icons-material/PestControlRodent";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WifiTetheringOffIcon from "@mui/icons-material/WifiTetheringOff";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)({
  borderRadius: "10px",
});

const SidePanelCard = (props: CardProps) => {
  return <StyledCard {...props} />;
};

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const SidePanelCardHeader = (props: CardHeaderProps) => {
  return (
    <StyledCardHeader
      slotProps={{
        title: {
          variant: "body1",
        },
        subheader: {
          variant: "body2",
        },
      }}
      {...props}
    />
  );
};

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: theme.spacing(1),

  "&:last-child": {
    paddingBottom: theme.spacing(1),
  },
}));

const SidePanelCardContent = (props: CardContentProps) => {
  return <StyledCardContent {...props} />;
};

export function SidePanelCardDemo() {
  return (
    <SidePanelCard elevation={12}>
      <SidePanelCardHeader
        avatar={
          <PestControlRodentIcon
            sx={(theme) => ({ color: theme.palette.grey[300] })}
          />
        }
        action={
          <div>
            <IconButton aria-label="add" color="primary">
              <AddIcon />
            </IconButton>
          </div>
        }
        title="Tom & Jerry"
        subheader="Tom and associated Jerrys"
      />
      <Divider />
      <SidePanelCardContent>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="success" />
            </ListItemIcon>
            <ListItemText
              slotProps={{ primary: { variant: "body2" } }}
              primary="Toodles Galore"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="success" />
            </ListItemIcon>
            <ListItemText
              slotProps={{ primary: { variant: "body2" } }}
              primary="Jeannie and the Baby"
            />
          </ListItem>
        </List>
      </SidePanelCardContent>
      <Divider />
      <SidePanelCardContent>
        <List>
          <ListItem>
            <ListItemIcon>
              <WifiTetheringOffIcon
                sx={(theme) => ({ color: theme.palette.grey[300] })}
              />
            </ListItemIcon>
            <ListItemText
              slotProps={{ primary: { variant: "body2" } }}
              primary="Goldfish"
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <WifiTetheringOffIcon
                sx={(theme) => ({ color: theme.palette.grey[300] })}
              />
            </ListItemIcon>
            <ListItemText
              slotProps={{ primary: { variant: "body2" } }}
              primary="Mechano cat and Robot-Mouse"
            />
          </ListItem>
        </List>
      </SidePanelCardContent>
    </SidePanelCard>
  );
}

SidePanelCardDemo.codeString = `
import Divider from "@mui/material/Divider";
import { 
  SidePanelCard, 
  SidePanelCardHeader,
  SidePanelCardContent,
} from "components/feature/workpace";

<SidePanelCard>
  <SidePanelCardHeader
    avatar={ /* ... */ }
    title="Tom & Jerry"
    subheader="Tom and associated Jerrys"
    action={ /* ... */ }
  />
  <Divider />
  <SidePanelCardContent>
    <List>{ /* ... */ }</List>
  </SidePanelCardContent>
  <Divider />
  <SidePanelCardContent>
    <List>{ /* ... */ }</List>
  </SidePanelCardContent>
</SidePanelCard>
`;

export function SidePanelCardEmptyDemo() {
  return (
    <Card sx={{ borderRadius: "10px" }} elevation={12}>
      <CardHeader
        avatar={
          <PestControlRodentIcon
            sx={(theme) => ({ color: theme.palette.grey[300] })}
          />
        }
        action={
          <IconButton aria-label="add" color="primary">
            <AddIcon />
          </IconButton>
        }
        title="Tom & Jerry"
        subheader="Tom and associated Jerrys"
        slotProps={{
          title: {
            variant: "body1",
          },
        }}
      />
      <CardContent>
        <Stack
          sx={(theme) => ({
            border: `1px dashed ${theme.palette.background.border}`,
            borderRadius: "6px",
            alignItems: "center",
            px: 5,
            py: 1,
          })}
        >
          <Typography>Title</Typography>
          <Typography sx={{ mt: 0.75 }}>
            Please make sure to add location in{" "}
          </Typography>
          <Box sx={{ mt: 1.5 }}>
            <Button
              sx={(theme) => ({
                color: theme.palette.primary.light,
              })}
            >
              Go to action
            </Button>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
