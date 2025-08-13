import type { PropsWithChildren } from "react";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useSidePanelContext } from "./Context";
import { useKeyboardControl } from "./useKeyboardControl";

/**
 * You will need to make the container as `position: relative` since LeftPanel
 * uses `position: absolute` internally.
 */
export const LeftPanel: React.FC<PropsWithChildren> = (props) => {
  // We only register the keyboard control on the left panel since we won't have
  // right panel without having a left panel.
  useKeyboardControl();

  const { isSidePanelOpen, openSidePanel, closeSidePanel } =
    useSidePanelContext();

  return (
    <>
      <Paper
        sx={{
          position: "absolute",
          left: 0,
          display: isSidePanelOpen ? "block" : "none",
          top: 0,
          borderRadius: 0,
          height: "100%",
          width: 350,
          padding: 1,
        }}
        elevation={1}
      >
        {props.children}
      </Paper>

      {isSidePanelOpen ? (
        <IconButton
          onClick={closeSidePanel}
          sx={{
            position: "absolute",
            left: 370,
            bottom: 20,
          }}
        >
          <VisibilityOffIcon />
        </IconButton>
      ) : (
        <IconButton
          onClick={openSidePanel}
          sx={{
            position: "absolute",
            left: 20,
            bottom: 20,
          }}
        >
          <VisibilityIcon />
        </IconButton>
      )}
    </>
  );
};
