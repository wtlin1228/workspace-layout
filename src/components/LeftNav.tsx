import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useNavigate } from "@tanstack/react-router";

import KirbyImg from "../assets/icon-kirby.png";
import PikminImg from "../assets/icon-pikmin.png";
import PataponImg from "../assets/icon-patapon.png";

export function LeftNavigation() {
  const [value, setValue] = React.useState<
    "/kirby" | "/pikmin" | "/patapon" | null
  >(null);
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        px: 1,
        py: 2,
        zIndex: 9999, // to be on top of left panel
        bgcolor: "#121212",
      }}
    >
      <BottomNavigation
        sx={{
          height: "auto",
          flexDirection: "column",
          gap: 1.5,
        }}
        showLabels
        value={value}
        onChange={(_event, newValue: "/kirby" | "/pikmin" | "/patapon") => {
          setValue(newValue);
          navigate({ to: newValue });
        }}
      >
        <BottomNavigationAction
          label="Kirby"
          value="/kirby"
          icon={<img width="24" height="24" src={KirbyImg} />}
          sx={{
            width: 80,
            height: 80,
            borderRadius: 3,
            p: 2,
            border: "1px solid grey",
          }}
        />
        <BottomNavigationAction
          label="Pikmin"
          value="/pikmin"
          icon={<img width="24" height="24" src={PikminImg} />}
          sx={{
            width: 80,
            height: 80,
            borderRadius: 3,
            p: 2,
            border: "1px solid grey",
          }}
        />
        <BottomNavigationAction
          label="Patapon"
          value="/patapon"
          icon={<img width="24" height="24" src={PataponImg} />}
          sx={{
            width: 80,
            height: 80,
            borderRadius: 3,
            p: 2,
            border: "1px solid grey",
          }}
        />
      </BottomNavigation>
    </Box>
  );
}
