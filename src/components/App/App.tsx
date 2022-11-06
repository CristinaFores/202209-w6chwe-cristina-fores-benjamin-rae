import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../redux/hooks";
import Header from "../Header/Header";
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
      <Header />
    </AppStyled>
  );
}

export default App;
