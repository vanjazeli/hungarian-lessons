import { Outlet, createRootRoute } from "@tanstack/react-router";
import { MainLayout } from "components";

export const Route = createRootRoute({
  component: () => (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ),
});
