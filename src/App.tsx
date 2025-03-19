import { Accusative, MainMenu } from "pages";
import { Route, Routes } from "react-router";
import { MainLayout } from "components";

export const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route index element={<MainMenu />} />
        <Route path="/accusative" element={<Accusative />} />
      </Routes>
    </MainLayout>
  );
};
