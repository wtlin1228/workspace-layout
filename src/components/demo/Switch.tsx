import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export const SwitchDemo = () => {
  return (
    <div>
      <FormControlLabel
        control={<Switch />}
        label="Label"
        labelPlacement="bottom"
      />
      <FormControlLabel
        control={<Switch />}
        label="Label"
        labelPlacement="end"
      />
    </div>
  );
};

SwitchDemo.codeString = `
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

<FormControlLabel control={<Switch />} label="Label" labelPlacement="bottom" />
<FormControlLabel control={<Switch />} label="Label" labelPlacement="end" />
`;
