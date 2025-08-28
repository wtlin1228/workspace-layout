import * as React from "react";
import Button from "@mui/material/Button";
import Dialog, { type DialogProps } from "@mui/material/Dialog";
import DialogTitle, { type DialogTitleProps } from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions, {
  type DialogActionsProps,
} from "@mui/material/DialogActions";
import { styled } from "@mui/material/styles";

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

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  paddingBlock: theme.spacing(3),
}));

const WorkspaceDialogTitle = (props: DialogTitleProps) => {
  return <StyledDialogTitle {...props} />;
};

const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
  paddingBlock: theme.spacing(3),
  paddingInline: theme.spacing(2),
}));

const WorkspaceDialogActions = (props: DialogActionsProps) => {
  return <StyledDialogActions {...props} />;
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
        <WorkspaceDialogTitle>Dialog title</WorkspaceDialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            accusamus natus ipsum exercitationem iure. Voluptas minus a, iure
            ipsa ab eos. Reiciendis ea animi id cum, ipsam repudiandae molestias
            consequuntur!
          </DialogContentText>
        </DialogContent>
        <WorkspaceDialogActions>
          <Button onClick={handleClose}>Confirm</Button>
        </WorkspaceDialogActions>
      </WorkspaceDialog>
    </div>
  );
};

DialogDemo.codeString = `
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { 
  WorkspaceDialog, 
  WorkspaceDialogTitle,
  WorkspaceDialogActions,
} from "components/feature/workpace";

<Button>Open simple dialog</Button>
<WorkspaceDialog>
  <WorkspaceDialogTitle>
    { /* ... */ }
  </WorkspaceDialogTitle>
  <DialogContent>
    <DialogContentText>
      { /* ... */ }
    </DialogContentText>
  </DialogContent>
  <WorkspaceDialogActions>
    { /* ... */ }
  </WorkspaceDialogActions>
</WorkspaceDialog>
`;
