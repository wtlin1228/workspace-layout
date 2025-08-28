import { createFileRoute } from "@tanstack/react-router";

import { RightPanel } from "../components/SidePanel";

export const Route = createFileRoute("/patapon/friends")({
  component: RouteComponent,
});

function RouteComponent() {
  return <RightPanel>Hello "/patapon/friends"!</RightPanel>;
}
