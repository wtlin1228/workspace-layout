import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
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

export function SidePanelCardDemo() {
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
      <Divider />
      <CardContent>
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

        <Divider />

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
      </CardContent>
    </Card>
  );
}
