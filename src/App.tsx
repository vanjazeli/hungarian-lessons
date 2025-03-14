import { MainContainer } from "components";
import { MainMenu } from "pages";
import { Route, Routes } from "react-router";

export const App = () => {
  return (
    <MainContainer>
      <Routes>
        <Route index element={<MainMenu />} />
      </Routes>
    </MainContainer>
  );
};
