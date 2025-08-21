import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
          accusamus natus ipsum exercitationem iure. Voluptas minus a, iure ipsa
          ab eos. Reiciendis ea animi id cum, ipsam repudiandae molestias
          consequuntur!
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
