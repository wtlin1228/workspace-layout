import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import Button from "@mui/material/Button";
import Card, { type CardProps } from "@mui/material/Card";
import CardContent, { type CardContentProps } from "@mui/material/CardContent";
import CardHeader, { type CardHeaderProps } from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const StyledCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(2),
}));

const ContentCard = (props: CardProps) => {
  return <StyledCard {...props} />;
};

const StyledCardHeader = styled(CardHeader)({
  padding: 0,
});

const ContentCardHeader = (props: CardHeaderProps) => {
  return (
    <StyledCardHeader
      slotProps={{
        title: {
          variant: "subtitle2",
        },
        subheader: {
          variant: "body2",
        },
      }}
      {...props}
    />
  );
};

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: 0,
  marginBlockStart: theme.spacing(2),

  "&:last-child": {
    paddingBottom: 0,
  },
}));

const ContentCardContent = (props: CardContentProps) => {
  return <StyledCardContent {...props} />;
};

const ContentCardButtonDemo = () => {
  return (
    <ContentCard elevation={6}>
      <ContentCardHeader title="Kirby" subheader="Forgotten land" />
      <ContentCardContent>
        <Button variant="contained" fullWidth>
          Star-Crossed World
        </Button>
      </ContentCardContent>
    </ContentCard>
  );
};

const ContentCardTextDemo = () => {
  return (
    <ContentCard elevation={6}>
      <ContentCardHeader
        title={
          <Stack direction="row" sx={{ alignItems: "center" }} spacing={0.5}>
            <Typography variant="body1">Kirby</Typography>
            <Tooltip title="Pink monster">
              <IconButton>
                <InfoOutlineIcon />
              </IconButton>
            </Tooltip>
          </Stack>
        }
        action={
          <IconButton>
            <ArrowForwardIcon />
          </IconButton>
        }
      />
      <ContentCardContent>
        <Typography variant="body2" color="textSecondary">
          Kirby is an action-platform video game series developed by HAL
          Laboratory and published by Nintendo. The series centers around the
          adventures of Kirby as he fights to protect and save his home on the
          distant Planet Popstar from a variety of threats.
        </Typography>
      </ContentCardContent>
    </ContentCard>
  );
};

export const ContentCardDemo = () => {
  return (
    <Stack spacing={2}>
      <ContentCardButtonDemo />
      <ContentCardTextDemo />
    </Stack>
  );
};

ContentCardDemo.codeString = `
import Button from "@mui/material/Button";
import { 
  ContentCard, 
  ContentCardHeader,
  ContentCardContent,
} from "components/feature/workpace";

<ContentCard>
  <ContentCardHeader 
    title="Kirby" 
    subheader="Forgotten land" 
  />
  <ContentCardContent>
    <Button variant="contained" fullWidth>
      Star-Crossed World
    </Button>
  </ContentCardContent>
</ContentCard>
`;
