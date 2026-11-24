import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import {
  projectEnquiryEmbedUrl,
  projectPlaceholders,
} from "@/lib/warde-content";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("contains exactly six project entries for the requested portfolio", () => {
    expect(projectPlaceholders).toHaveLength(6);
  });

  it("uses the supplied Google Form embed URL", () => {
  expect(projectEnquiryEmbedUrl).toBe(
    "https://docs.google.com/forms/d/e/1FAIpQLSfehsj3z0FRThk2rmUoaVvO1u83Mew66rCVGy9c86Um65h_BA/viewform?embedded=true"
  );
});
});
