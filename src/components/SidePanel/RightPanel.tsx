import Paper from "@mui/material/Paper";
import type { PropsWithChildren } from "react";

import { useSidePanelContext } from "./Context";

/**
 * You will need to make the container as `position: relative` since RightPanel
 * uses `position: absolute` internally.
 *
 * RightPanel is expected to be used along with LeftPanel
 */
export const RightPanel: React.FC<PropsWithChildren> = (props) => {
  const { isSidePanelOpen } = useSidePanelContext();

  return (
    <>
      <Paper
        sx={{
          position: "absolute",
          right: 0,
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
    </>
  );
};
