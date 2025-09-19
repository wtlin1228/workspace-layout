import * as React from "react";
import Paper, { type PaperProps } from "@mui/material/Paper";
import InputBase, { type InputBaseProps } from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import FilterListIcon from "@mui/icons-material/FilterList";
import IconButton from "@mui/material/IconButton";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";
import Box from "@mui/material/Box";

const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: "6px",
  padding: theme.spacing(0, 1.5),
  display: "flex",
  alignItems: "center",
  width: "100%",
  minHeight: "50px",
}));

const SearchContainer = (props: PaperProps) => {
  return <StyledPaper {...props} />;
};

const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
  color: theme.palette.grey[300],
  marginRight: theme.spacing(1),
}));

const SearchInputBase = (props: InputBaseProps) => {
  return (
    <InputBase fullWidth startAdornment={<StyledSearchIcon />} {...props} />
  );
};

const StyledPaper2 = styled(Paper)(({ theme }) => ({
  borderRadius: "6px",
  padding: theme.spacing(1),
  margin: theme.spacing(1, 0),
}));

const SearchResultContainer = (props: PaperProps) => {
  return <StyledPaper2 {...props} />;
};

export const SearchDemo = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  return (
    <Box sx={{ width: 400, height: 800 }}>
      <SearchContainer
        elevation={20}
        component="form"
        ref={(element) => {
          setAnchorEl(element);
        }}
      >
        <SearchInputBase
          id="search-kirby-planet"
          placeholder="Search Kirby Planet"
          inputProps={{ "aria-label": "search kirby planet" }}
          endAdornment={
            <IconButton>
              <FilterListIcon sx={{ color: "grey.300" }} />
            </IconButton>
          }
        />
      </SearchContainer>

      <Popper open anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <SearchResultContainer
              elevation={16}
              sx={{
                width: 400,
                minHeight: 500,
              }}
            >
              The content of the Popper.
            </SearchResultContainer>
          </Fade>
        )}
      </Popper>
    </Box>
  );
};

SearchDemo.codeString = `
import { 
  SearchContainer, // it's a Paper
  SearchInputBase, // it's an InputBase
  SearchResultContainer, // it's a Paper
} from "components/feature/workpace";

const WIDTH = 400; // can be changed

<Box sx={{ width: WIDTH }}>
  <SearchContainer
    ref={(element) => {
      setAnchorEl(element);
    }}
  >
    <SearchInputBase 
      // if you want a filter
      endAdornment={
        <IconButton>
          <FilterListIcon sx={{ color: "grey.300" }} />
        </IconButton>
      }    
    />
  </SearchContainer>

  <Popper open anchorEl={anchorEl}>
    <SearchResultContainer
      sx={{
        width: WIDTH,
      }}
    >
      The content of the Popper.
    </SearchResultContainer>
  </Popper>
</Box>
`;
