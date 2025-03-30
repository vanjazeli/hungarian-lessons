import { Outlet, createRootRoute } from "@tanstack/react-router";
import { AppProvider, MainLayout } from "components";

export const Route = createRootRoute({
  component: () => (
    <AppProvider>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </AppProvider>
  ),
});
