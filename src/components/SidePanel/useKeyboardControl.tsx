import * as React from "react";
import { useSidePanelContext } from "./Context";

export const useKeyboardControl = () => {
  const { isSidePanelOpen, closeSidePanel, openSidePanel } =
    useSidePanelContext();

  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.ctrlKey && (event.key === "\\" || event.code === "Backslash")) {
        event.preventDefault();
        if (isSidePanelOpen) {
          closeSidePanel();
        } else {
          openSidePanel();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isSidePanelOpen, closeSidePanel, openSidePanel]);
};
