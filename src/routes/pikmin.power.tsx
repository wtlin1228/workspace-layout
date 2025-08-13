import { createFileRoute } from "@tanstack/react-router";
import { RightPanel } from "../components/SidePanel";

export const Route = createFileRoute("/pikmin/power")({
  component: RouteComponent,
});

function RouteComponent() {
  return <RightPanel>Hello "/pikmin/power"!</RightPanel>;
}
