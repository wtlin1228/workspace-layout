import List from "@mui/material/List";
import ListItemButton, {
  type ListItemButtonProps,
} from "@mui/material/ListItemButton";
import type { ListItemTextProps } from "@mui/material/ListItemText";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  padding: theme.spacing(1, 1.5),
  borderRadius: "6px",
  border: `1px dashed ${theme.palette.background.border}`,
}));

const CardEmptyListItemButton = (props: ListItemButtonProps) => {
  return <StyledListItemButton {...props} />;
};

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.primary.main,
}));

const CardEmptyListItemText = (props: ListItemTextProps) => {
  return <StyledListItemText {...props} />;
};

export const EmptyListItemDemo = () => {
  return (
    <List sx={{ width: 300 }}>
      <CardEmptyListItemButton>
        <CardEmptyListItemText>Add something</CardEmptyListItemText>
      </CardEmptyListItemButton>
    </List>
  );
};

EmptyListItemDemo.codeString = `
import List from "@mui/material/List";
import { 
  EmptyListItemButton,
  EmptyListItemText,
} from "components/feature/workpace";

<List>
  <CardEmptyListItemButton>
    <CardEmptyListItemText>Add something</CardEmptyListItemText>
  </CardEmptyListItemButton>
</List>
`;
