import AppsIcon from "@mui/icons-material/Apps";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RestoreIcon from "@mui/icons-material/Restore";
import Button, { type ButtonProps } from "@mui/material/Button";
import Paper, { type PaperProps } from "@mui/material/Paper";
import Stack, { type StackProps } from "@mui/material/Stack";
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
    width: "100%",
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
    <>
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
    </>
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

const StyledPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: "100%",
  padding: theme.spacing(1),
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: theme.spacing(1),
  overflowY: "auto",
}));

const NavRail = (props: PaperProps) => {
  return <StyledPaper elevation={1} {...props} />;
};

const NavRailActions = (props: StackProps) => {
  return <Stack spacing={1} {...props} />;
};

const NavRailTextButtons = (props: StackProps) => {
  return <Stack spacing={1} {...props} />;
};

const StyledTextButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

const NavRailTextButton = (props: ButtonProps) => {
  return (
    <StyledTextButton fullWidth {...props}>
      <Typography noWrap variant="body2">
        {props.children}
      </Typography>
    </StyledTextButton>
  );
};

export const NavRailDemo = () => {
  return (
    <NavRail>
      <NavRailActions>
        <NavRailAction>
          <RestoreIcon />
          <NavRailActionTypography>Recents Kirby Game</NavRailActionTypography>
        </NavRailAction>

        <NavRailAction selected>
          <FavoriteIcon />
          <NavRailActionTypography>Favorites</NavRailActionTypography>
        </NavRailAction>

        <NavRailAction>
          <LocationOnIcon />
          <NavRailActionTypography>Nearby</NavRailActionTypography>
        </NavRailAction>
      </NavRailActions>

      <NavRailTextButtons>
        <NavRailTextButton>Star Stacker</NavRailTextButton>
        <NavRailTextButton>Dream Buffet</NavRailTextButton>
        <NavRailTextButton>Gourmet Race</NavRailTextButton>
        <NavRailTextButton>Dream Land</NavRailTextButton>
        <NavRailTextButton>Air Riders</NavRailTextButton>
        <NavRailTextButton startIcon={<AppsIcon />}>More</NavRailTextButton>
      </NavRailTextButtons>
    </NavRail>
  );
};

NavRailDemo.codeString = `
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import RestoreIcon from "@mui/icons-material/Restore";
import AppsIcon from "@mui/icons-material/App";
import { 
  NavRail,
  NavRailActions,
  NavRailAction,
  NavRailActionTypography,
  NavRailTextButtons,
  NavRailTextButton,
} from "components/feature/workpace";

<NavRail>
  <NavRailActions>
    <NavRailAction>
      <RestoreIcon />
      <NavRailActionTypography>Recents Kirby Game</NavRailActionTypography>
    </NavRailAction>

    <NavRailAction selected>
      <FavoriteIcon />
      <NavRailActionTypography>Favorites</NavRailActionTypography>
    </NavRailAction>

    <NavRailAction>
      <LocationOnIcon />
      <NavRailActionTypography>Nearby</NavRailActionTypography>
    </NavRailAction>
  </NavRailActions>

  <NavRailTextButtons>
    <NavRailTextButton>Star Stacker</NavRailTextButton>
    <NavRailTextButton>Dream Buffet</NavRailTextButton>
    <NavRailTextButton>Gourmet Race</NavRailTextButton>
    <NavRailTextButton>Dream Land</NavRailTextButton>
    <NavRailTextButton>Air Riders</NavRailTextButton>
    <NavRailTextButton startIcon={<AppsIcon />}>More</NavRailTextButton>
  </NavRailTextButtons>
</NavRail>
`;
