import * as React from "react";
import Button from "@mui/material/Button";
import Dialog, { type DialogProps } from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

const WorkspaceDialog = (props: DialogProps) => {
  const isMd = props.maxWidth === "md";

  return (
    <Dialog
      slotProps={{
        paper: {
          sx: {
            py: 2,
            maxWidth: isMd ? 800 : undefined,
          },
        },
      }}
      {...props}
    />
  );
};

export const DialogDemo = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <WorkspaceDialog onClose={handleClose} open={open} maxWidth="md">
        <DialogTitle>Dialog title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            accusamus natus ipsum exercitationem iure. Voluptas minus a, iure
            ipsa ab eos. Reiciendis ea animi id cum, ipsam repudiandae molestias
            consequuntur!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Confirm</Button>
        </DialogActions>
      </WorkspaceDialog>
    </div>
  );
};

DialogDemo.codeString = `
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import { WorkspaceDialog } from "components/feature/workpace";

<Button>Open simple dialog</Button>
<WorkspaceDialog>
  <DialogTitle>Dialog title</DialogTitle>
  <DialogContent>
    <DialogContentText>DialogContentText</DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button>Confirm</Button>
  </DialogActions>
</WorkspaceDialog>
`;
