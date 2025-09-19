import type { PaperProps } from "@mui/material/Paper";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { alpha, styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import KirbyIcon from "../../assets/icon-kirby.png";

const StyledBox = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "selected",
})<PaperProps & { selected?: boolean }>(
  ({ theme }) => ({
    width: "100%",
    height: "100%",
    display: "grid",
    placeContent: "center",
    borderRadius: "6px",
    cursor: "pointer",

    ":hover": {
      backgroundColor: alpha(
        theme.palette.primary.main,
        theme.palette.action.hoverOpacity
      ),
    },
  }),
  {
    variants: [
      {
        props: {
          selected: true,
        },
        style: ({ theme }) => ({
          border: `2px solid ${theme.palette.primary.main}`,
          color: theme.palette.primary.light,
        }),
      },
    ],
  }
);

const SelectableContainer = (props: PaperProps & { selected?: boolean }) => {
  return <StyledBox {...props} />;
};

export const SelectableContainerDemo = () => {
  return (
    <Stack spacing={2}>
      <SelectableContainer sx={{ width: 200, height: 100 }} elevation={6}>
        <Typography>Kirby</Typography>
      </SelectableContainer>

      <SelectableContainer
        sx={{ width: 200, height: 100 }}
        elevation={6}
        selected
      >
        <Typography>Kirby</Typography>
      </SelectableContainer>

      <SelectableContainer sx={{ width: 200, height: 100 }} elevation={6}>
        <img width="64" height="64" src={KirbyIcon} />
      </SelectableContainer>

      <SelectableContainer
        sx={{ width: 200, height: 100 }}
        elevation={6}
        selected
      >
        <img width="64" height="64" src={KirbyIcon} />
      </SelectableContainer>
    </Stack>
  );
};

SelectableContainerDemo.codeString = `
import { 
  SelectableContainer,
} from "components/feature/workpace";

<SelectableContainer
  sx={{
    width={/* default is '100%' */}
    height={/* default is '100%' */}
  }}
  selected={}
>
  {...}
</SelectableContainer>
`;
