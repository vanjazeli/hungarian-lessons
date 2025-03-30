import { routeTree } from "@/routeTree.gen";
import {
  createHashHistory,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";

const router = createRouter({
  routeTree,
  history: createHashHistory(),
});
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export const RouteProvider = () => {
  return <RouterProvider router={router} />;
};
