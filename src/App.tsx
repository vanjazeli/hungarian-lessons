import { MainMenu } from "pages";
import { Route, Routes } from "react-router";

export const App = () => {
  return (
    <Routes>
      <Route index element={<MainMenu />} />
    </Routes>
  );
};
