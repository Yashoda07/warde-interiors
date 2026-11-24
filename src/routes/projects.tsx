
import {
  createFileRoute,
  Outlet,
  redirect,
} from "@tanstack/react-router";

import { wardePageMeta } from "@/lib/warde-seo";

export const Route = createFileRoute("/projects")({
  beforeLoad: ({ location }) => {
    if (location.pathname === "/projects") {
      throw redirect({
        to: "/",
        hash: "projects",
      });
    }
  },

  head: () =>
    wardePageMeta(
      "Residential Interior Projects | Warde Interiors",
      "Explore thoughtfully designed residential interiors by Warde Interiors.",
    ),

  component: () => <Outlet />,
});
