import { createFileRoute } from "@tanstack/react-router";

import { RightPanel } from "../components/SidePanel";

export const Route = createFileRoute("/patapon/cafe")({
  component: RouteComponent,
});

function RouteComponent() {
  return <RightPanel>Hello "/patapon/cafe"!</RightPanel>;
}
