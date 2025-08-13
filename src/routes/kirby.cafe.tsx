import { createFileRoute } from "@tanstack/react-router";
import { RightPanel } from "../components/SidePanel";

export const Route = createFileRoute("/kirby/cafe")({
  component: RouteComponent,
});

function RouteComponent() {
  return <RightPanel>Hello "/kirby/cafe"!</RightPanel>;
}
