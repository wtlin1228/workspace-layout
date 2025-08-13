import React, { type PropsWithChildren } from "react";

interface SidePanelContextValue {
  isSidePanelOpen: boolean;
  openSidePanel: () => void;
  closeSidePanel: () => void;
}

const SidePanelContext = React.createContext<SidePanelContextValue | null>(
  null
);

export const useSidePanelContext = () => {
  const context = React.useContext(SidePanelContext);
  if (!context) {
    throw new Error(
      'Please use "useSidePanelContext" along with "SidePanelProvider"'
    );
  }
  return context;
};

export const SidePanelProvider: React.FC<PropsWithChildren> = (props) => {
  const [open, setOpen] = React.useState(true);

  const value = React.useMemo(
    () => ({
      isSidePanelOpen: open,
      openSidePanel: () => setOpen(true),
      closeSidePanel: () => setOpen(false),
    }),
    [open]
  );

  return (
    <SidePanelContext.Provider value={value}>
      {props.children}
    </SidePanelContext.Provider>
  );
};
