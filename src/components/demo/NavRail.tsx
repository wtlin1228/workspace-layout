import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RestoreIcon from "@mui/icons-material/Restore";
import Button, { type ButtonProps } from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { alpha, styled } from "@mui/material/styles";
import Typography, { type TypographyProps } from "@mui/material/Typography";

const StyledTypography = styled(Typography)({
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "100%",
});

const NavRailActionTypography = (props: TypographyProps) => {
  return <StyledTypography variant="body2" noWrap {...props} />;
};

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "selected",
})<ButtonProps & { selected?: boolean }>(
  ({ theme }) => ({
    width: 92,
    height: 68,
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(1),
    color: theme.palette.text.primary,
    "&:hover, &.Mui-selected, &.Mui-active": {
      color: theme.palette.primary.main,
    },
  }),
  {
    variants: [
      {
        props: {
          selected: true,
        },
        style: ({ theme }) => ({
          color: theme.palette.primary.main,
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        }),
      },
    ],
  }
);

const NavRailAction = (props: ButtonProps & { selected?: boolean }) => {
  return <StyledButton {...props} />;
};

export const NavRailActionDemo = () => {
  return (
    <Stack spacing={2}>
      <NavRailAction>
        <RestoreIcon />
        <NavRailActionTypography>Recents</NavRailActionTypography>
      </NavRailAction>
      <NavRailAction selected>
        <FavoriteIcon />
        <NavRailActionTypography>Favorites</NavRailActionTypography>
      </NavRailAction>
      <NavRailAction>
        <LocationOnIcon />
        <NavRailActionTypography>Nearby</NavRailActionTypography>
      </NavRailAction>
    </Stack>
  );
};

NavRailActionDemo.codeString = `
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RestoreIcon from "@mui/icons-material/Restore";
import { 
  NavRailAction,
  NavRailActionTypography,
} from "components/feature/workpace";

<NavRailAction>
  <RestoreIcon />
  <NavRailActionTypography>Recents</NavRailActionTypography>
</NavRailAction>

<NavRailAction selected>
  <FavoriteIcon />
  <NavRailActionTypography>Favorites</NavRailActionTypography>
</NavRailAction>

<NavRailAction>
  <LocationOnIcon />
  <NavRailActionTypography>Nearby</NavRailActionTypography>
</NavRailAction>
`;
