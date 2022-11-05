import React, { useEffect } from "react";
import useApi from "./hook/useApi";
import { useAppDispatch } from "./redux/hooks";

function App() {
  const { loadAllRobot } = useApi();
  const dispatch = useAppDispatch();

  useEffect(() => {
    loadAllRobot();
  }, [loadAllRobot, dispatch]);

  return <div></div>;
}

export default App;
