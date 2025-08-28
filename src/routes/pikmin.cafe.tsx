import { createFileRoute } from "@tanstack/react-router";

import { RightPanel } from "../components/SidePanel";

export const Route = createFileRoute("/pikmin/cafe")({
  component: RouteComponent,
});

function RouteComponent() {
  return <RightPanel>Hello "/pikmin/cafe"!</RightPanel>;
}
