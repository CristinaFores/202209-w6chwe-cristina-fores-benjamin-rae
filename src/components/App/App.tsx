import { useEffect } from "react";
import { Route, Routes } from "react-router";
import HomePage from "../../pages/HomePage/HomePage";
import useApi from "../../hooks/useApi";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import { useAppSelector } from "../../redux/hooks";
import Loading from "../Loading/Loading";
import AppStyled from "./AppStyled";

function App() {
  const isLoading = useAppSelector((state) => state.ui.isLoading);
  const { loadAllRobots } = useApi();

  useEffect(() => {
    loadAllRobots();
  }, [loadAllRobots]);

  return (
    <AppStyled>
      {isLoading && <Loading />}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </AppStyled>
  );
}

export default App;
