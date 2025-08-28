import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon, {
  type ListItemIconProps,
} from "@mui/material/ListItemIcon";
import CoffeeIcon from "@mui/icons-material/Coffee";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton, {
  type ListItemButtonProps,
} from "@mui/material/ListItemButton";
import { styled } from "@mui/material/styles";

const StyleListItemIcon = styled(ListItemIcon)({
  minWidth: 32,
});

export const SidePanelCardListItemIcon = (props: ListItemIconProps) => {
  return <StyleListItemIcon {...props} />;
};

const StyleListItemButton = styled(ListItemButton)({
  borderRadius: "6px",
});

const SidePanelCardListItemButton = (props: ListItemButtonProps) => {
  return <StyleListItemButton {...props} />;
};

export const ListDemo = () => {
  return (
    <List>
      <ListItem>
        <SidePanelCardListItemIcon>
          <CoffeeIcon />
        </SidePanelCardListItemIcon>
        <ListItemText primary="ListItem" />
      </ListItem>
      <SidePanelCardListItemButton>
        <SidePanelCardListItemIcon>
          <CoffeeIcon />
        </SidePanelCardListItemIcon>
        <ListItemText primary="ListItemButton" />
      </SidePanelCardListItemButton>
      <SidePanelCardListItemButton selected>
        <SidePanelCardListItemIcon>
          <CoffeeIcon />
        </SidePanelCardListItemIcon>
        <ListItemText primary="ListItemButton::Selected" />
      </SidePanelCardListItemButton>
      <SidePanelCardListItemButton disabled>
        <SidePanelCardListItemIcon>
          <CoffeeIcon />
        </SidePanelCardListItemIcon>
        <ListItemText primary="ListItemButton::Disabled" />
      </SidePanelCardListItemButton>
    </List>
  );
};

ListDemo.codeString = `
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { 
  SidePanelCardListItemButton,
  SidePanelCardListItemIcon,
} from "components/feature/workpace";

<List>
  <ListItem>
    <SidePanelCardListItemIcon>
      <CoffeeIcon />
    </SidePanelCardListItemIcon>
    <ListItemText primary="ListItem" />
  </ListItem>
  <SidePanelCardListItemButton>
    <SidePanelCardListItemIcon>
      <CoffeeIcon />
    </SidePanelCardListItemIcon>
    <ListItemText primary="ListItemButton" />
  </SidePanelCardListItemButton>
</List>
`;
