import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

export const IconButtonDemo = () => {
  return (
    <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
      <div>
        <IconButton size="small">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div>
        <IconButton size="medium">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div>
        <IconButton size="large">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div>
        <IconButton size="large" color="success">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div>
        <IconButton size="large" color="warning">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div>
        <IconButton size="large" color="error">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </div>
    </Stack>
  );
};

IconButtonDemo.codeString = `
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

<IconButton>
  <DeleteIcon/>
</IconButton>
`;
