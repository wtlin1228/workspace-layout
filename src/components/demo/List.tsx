import CoffeeIcon from "@mui/icons-material/Coffee";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton, {
  type ListItemButtonProps,
} from "@mui/material/ListItemButton";
import ListItemIcon, {
  type ListItemIconProps,
} from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";

const StyleListItemIcon = styled(ListItemIcon)({
  minWidth: 32,
});

export const PanelCardListItemIcon = (props: ListItemIconProps) => {
  return <StyleListItemIcon {...props} />;
};

const StyleListItemButton = styled(ListItemButton)({
  borderRadius: "6px",
});

const PanelCardListItemButton = (props: ListItemButtonProps) => {
  return <StyleListItemButton {...props} />;
};

export const ListDemo = () => {
  return (
    <List>
      <ListItem>
        <PanelCardListItemIcon>
          <CoffeeIcon />
        </PanelCardListItemIcon>
        <ListItemText primary="ListItem" />
      </ListItem>
      <PanelCardListItemButton>
        <PanelCardListItemIcon>
          <CoffeeIcon />
        </PanelCardListItemIcon>
        <ListItemText primary="ListItemButton" />
      </PanelCardListItemButton>
      <PanelCardListItemButton selected>
        <PanelCardListItemIcon>
          <CoffeeIcon />
        </PanelCardListItemIcon>
        <ListItemText primary="ListItemButton::Selected" />
      </PanelCardListItemButton>
      <PanelCardListItemButton disabled>
        <PanelCardListItemIcon>
          <CoffeeIcon />
        </PanelCardListItemIcon>
        <ListItemText primary="ListItemButton::Disabled" />
      </PanelCardListItemButton>
    </List>
  );
};

ListDemo.codeString = `
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { 
  PanelCardListItemButton,
  PanelCardListItemIcon,
} from "components/feature/workpace";

<List>
  <ListItem>
    <PanelCardListItemIcon>
      <CoffeeIcon />
    </PanelCardListItemIcon>
    <ListItemText primary="ListItem" />
  </ListItem>
  <PanelCardListItemButton>
    <PanelCardListItemIcon>
      <CoffeeIcon />
    </PanelCardListItemIcon>
    <ListItemText primary="ListItemButton" />
  </PanelCardListItemButton>
</List>
`;
