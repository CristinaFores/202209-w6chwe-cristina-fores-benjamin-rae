import { useAppSelector } from "../../redux/hooks";
import Loading from "../Loading/Loading";
import AppStyled from "./AppStyled";

function App() {
  const isLoading = useAppSelector((state) => state.ui.isLoading);

  return <AppStyled>{isLoading && <Loading />}</AppStyled>;
}

export default App;
