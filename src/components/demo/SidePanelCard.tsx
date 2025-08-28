import AddIcon from "@mui/icons-material/Add";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PestControlRodentIcon from "@mui/icons-material/PestControlRodent";
import WifiTetheringOffIcon from "@mui/icons-material/WifiTetheringOff";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card, { type CardProps } from "@mui/material/Card";
import CardContent, { type CardContentProps } from "@mui/material/CardContent";
import CardHeader, { type CardHeaderProps } from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

import { SidePanelCardListItemIcon } from "./List";

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
    <SidePanelCard elevation={6}>
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
            <SidePanelCardListItemIcon>
              <CheckCircleIcon color="success" />
            </SidePanelCardListItemIcon>
            <ListItemText
              slotProps={{ primary: { variant: "body2" } }}
              primary="Toodles Galore"
            />
          </ListItem>
          <ListItem>
            <SidePanelCardListItemIcon>
              <CheckCircleIcon color="success" />
            </SidePanelCardListItemIcon>
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
            <SidePanelCardListItemIcon>
              <WifiTetheringOffIcon
                sx={(theme) => ({ color: theme.palette.grey[300] })}
              />
            </SidePanelCardListItemIcon>
            <ListItemText
              slotProps={{ primary: { variant: "body2" } }}
              primary="Goldfish"
            />
          </ListItem>
          <ListItem>
            <SidePanelCardListItemIcon>
              <WifiTetheringOffIcon
                sx={(theme) => ({ color: theme.palette.grey[300] })}
              />
            </SidePanelCardListItemIcon>
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

const StyledStack = styled(Stack)(({ theme }) => ({
  border: `1px dashed ${theme.palette.background.border}`,
  borderRadius: "6px",
  alignItems: "center",
  paddingBlock: theme.spacing(4),
  paddingInline: theme.spacing(5),
  minHeight: 144,
}));

const SidePanelCardEmptyContent = (props: {
  title: string | ReactNode;
  description: string | ReactNode;
  actions?: ReactNode;
}) => {
  return (
    <SidePanelCardContent>
      <StyledStack>
        {typeof props.title === "string" ? (
          <Typography>{props.title}</Typography>
        ) : (
          props.title
        )}
        <Box sx={{ mt: 1 }}>
          {typeof props.description === "string" ? (
            <Typography color="textDisabled" sx={{ textAlign: "center" }}>
              {props.description}
            </Typography>
          ) : (
            props.description
          )}
        </Box>
        {props.actions && <Box sx={{ mt: 2 }}>{props.actions}</Box>}
      </StyledStack>
    </SidePanelCardContent>
  );
};

export function SidePanelCardEmptyContent1Demo() {
  return (
    <SidePanelCard elevation={6}>
      <SidePanelCardHeader
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
      />
      <SidePanelCardEmptyContent
        title="No trap"
        description="Place a new mouse trap"
      />
    </SidePanelCard>
  );
}

export function SidePanelCardEmptyContent2Demo() {
  return (
    <SidePanelCard elevation={6}>
      <SidePanelCardHeader
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
      />
      <SidePanelCardEmptyContent
        title="No trap"
        description="Place a new mouse trap"
        actions={<Button>Buy a trap</Button>}
      />
    </SidePanelCard>
  );
}

export const SidePanelCardEmptyContentDemo = () => {
  return (
    <Stack spacing={2}>
      <SidePanelCardEmptyContent1Demo />
      <SidePanelCardEmptyContent2Demo />
    </Stack>
  );
};

SidePanelCardEmptyContentDemo.codeString = `
import { 
  SidePanelCard, 
  SidePanelCardHeader,
  SidePanelCardEmptyContent,
} from "components/feature/workpace";

<SidePanelCard>
  <SidePanelCardHeader { /* ... */ } />
  <SidePanelCardEmptyContent 
    title="No trap"
    description="Place a new mouse trap"
  />
</SidePanelCard>

<SidePanelCard>
  <SidePanelCardHeader { /* ... */ } />
  <SidePanelCardEmptyContent 
    title="No trap"
    description="Place a new mouse trap"
    actions={<Button>Buy a trap</Button>}
  />
</SidePanelCard>  
`;
