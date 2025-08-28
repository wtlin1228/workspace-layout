import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

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
      <Dialog onClose={handleClose} open={open} maxWidth="sm">
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
      </Dialog>
    </div>
  );
};

DialogDemo.codeString = `
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";

<Button>Open simple dialog</Button>
<Dialog>
  <DialogTitle>Dialog title</DialogTitle>
  <DialogContent>
    <DialogContentText>DialogContentText</DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button>Confirm</Button>
  </DialogActions>
</Dialog>
`;
