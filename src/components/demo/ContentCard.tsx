import Button from "@mui/material/Button";
import Card, { type CardProps } from "@mui/material/Card";
import CardContent, { type CardContentProps } from "@mui/material/CardContent";
import CardHeader, { type CardHeaderProps } from "@mui/material/CardHeader";
import { styled } from "@mui/material/styles";

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
          variant: "body1",
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

export const ContentCardButtonDemo = () => {
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

ContentCardButtonDemo.codeString = `
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
