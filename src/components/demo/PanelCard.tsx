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

import { PanelCardListItemIcon } from "./List";
import CardActionArea from "@mui/material/CardActionArea";

const StyledCard = styled(Card)({
  borderRadius: "10px",
});

const PanelCard = (props: CardProps) => {
  return <StyledCard {...props} />;
};

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
  padding: theme.spacing(1),
}));

const PanelCardHeader = (props: CardHeaderProps) => {
  return (
    <StyledCardHeader
      slotProps={{
        title: {
          variant: "body1",
        },
        subheader: {
          variant: "body2",
        },
        action: {
          sx: {
            alignSelf: "center",
          },
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

const PanelCardContent = (props: CardContentProps) => {
  return <StyledCardContent {...props} />;
};

export function PanelCardDemo() {
  return (
    <PanelCard elevation={6}>
      <PanelCardHeader
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
      <PanelCardContent>
        <List>
          <ListItem>
            <PanelCardListItemIcon>
              <CheckCircleIcon color="success" />
            </PanelCardListItemIcon>
            <ListItemText
              slotProps={{ primary: { variant: "body2" } }}
              primary="Toodles Galore"
            />
          </ListItem>
          <ListItem>
            <PanelCardListItemIcon>
              <CheckCircleIcon color="success" />
            </PanelCardListItemIcon>
            <ListItemText
              slotProps={{ primary: { variant: "body2" } }}
              primary="Jeannie and the Baby"
            />
          </ListItem>
        </List>
      </PanelCardContent>
      <Divider />
      <PanelCardContent>
        <List>
          <ListItem>
            <PanelCardListItemIcon>
              <WifiTetheringOffIcon
                sx={(theme) => ({ color: theme.palette.grey[300] })}
              />
            </PanelCardListItemIcon>
            <ListItemText
              slotProps={{ primary: { variant: "body2" } }}
              primary="Goldfish"
            />
          </ListItem>
          <ListItem>
            <PanelCardListItemIcon>
              <WifiTetheringOffIcon
                sx={(theme) => ({ color: theme.palette.grey[300] })}
              />
            </PanelCardListItemIcon>
            <ListItemText
              slotProps={{ primary: { variant: "body2" } }}
              primary="Mechano cat and Robot-Mouse"
            />
          </ListItem>
        </List>
      </PanelCardContent>
    </PanelCard>
  );
}

PanelCardDemo.codeString = `
import Divider from "@mui/material/Divider";
import { 
  PanelCard, 
  PanelCardHeader,
  PanelCardContent,
} from "components/feature/workpace";

<PanelCard>
  <PanelCardHeader
    avatar={ /* ... */ }
    title="Tom & Jerry"
    subheader="Tom and associated Jerrys"
    action={ /* ... */ }
  />
  <Divider />
  <PanelCardContent>
    <List>{ /* ... */ }</List>
  </PanelCardContent>
  <Divider />
  <PanelCardContent>
    <List>{ /* ... */ }</List>
  </PanelCardContent>
</PanelCard>
`;

const StyledStack = styled(Stack)(({ theme }) => ({
  border: `1px dashed ${theme.palette.background.border}`,
  borderRadius: "6px",
  alignItems: "center",
  paddingBlock: theme.spacing(4),
  paddingInline: theme.spacing(5),
  minHeight: 144,
}));

const PanelCardEmptyContent = (props: {
  title: string | ReactNode;
  description: string | ReactNode;
  actions?: ReactNode;
}) => {
  return (
    <PanelCardContent>
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
    </PanelCardContent>
  );
};

export function PanelCardEmptyContent1Demo() {
  return (
    <PanelCard elevation={6}>
      <PanelCardHeader
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
      <PanelCardEmptyContent
        title="No trap"
        description="Place a new mouse trap"
      />
    </PanelCard>
  );
}

export function PanelCardEmptyContent2Demo() {
  return (
    <PanelCard elevation={6}>
      <PanelCardHeader
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
      <PanelCardEmptyContent
        title="No trap"
        description="Place a new mouse trap"
        actions={<Button>Buy a trap</Button>}
      />
    </PanelCard>
  );
}

export const PanelCardEmptyContentDemo = () => {
  return (
    <Stack spacing={2}>
      <PanelCardEmptyContent1Demo />
      <PanelCardEmptyContent2Demo />
    </Stack>
  );
};

PanelCardEmptyContentDemo.codeString = `
import { 
  PanelCard, 
  PanelCardHeader,
  PanelCardEmptyContent,
} from "components/feature/workpace";

<PanelCard>
  <PanelCardHeader { /* ... */ } />
  <PanelCardEmptyContent 
    title="No trap"
    description="Place a new mouse trap"
  />
</PanelCard>

<PanelCard>
  <PanelCardHeader { /* ... */ } />
  <PanelCardEmptyContent 
    title="No trap"
    description="Place a new mouse trap"
    actions={<Button>Buy a trap</Button>}
  />
</PanelCard>  
`;

export const PanelCardSelectedDemo = () => {
  return (
    <PanelCard>
      <CardActionArea data-active>
        <PanelCardHeader
          avatar={
            <PestControlRodentIcon
              sx={(theme) => ({ color: theme.palette.grey[300] })}
            />
          }
          action={
            <Stack sx={{ p: 1 }}>
              <AddIcon color="primary" />
            </Stack>
          }
          title="Tom & Jerry"
          subheader="Tom and associated Jerrys"
        />
      </CardActionArea>
    </PanelCard>
  );
};

PanelCardSelectedDemo.codeString = `

`;
