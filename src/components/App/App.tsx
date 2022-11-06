import { Route, Routes } from "react-router";
import HomePage from "../../pages/HomePage/HomePage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

import { useAppSelector } from "../../redux/hooks";
import Loading from "../Loading/Loading";
import AppStyled from "./AppStyled";

function App() {
  const isLoading = useAppSelector((state) => state.ui.isLoading);

  return (
    <AppStyled>
      {isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppStyled>
  );
}

export default App;
