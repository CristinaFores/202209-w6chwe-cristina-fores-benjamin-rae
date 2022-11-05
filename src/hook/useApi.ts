import { useCallback } from "react";
import { loadRobotsActionCreator } from "../redux/features/robotsSlice/robotsSlice";
import { Robots } from "../redux/features/robotsSlice/types";

import { useAppDispatch } from "../redux/hooks";

const useApi = () => {
  const dispatch = useAppDispatch();
  const url = process.env.REACT_APP_URL_API;

  const loadAllRobot = useCallback(async () => {
    try {
      const response = await fetch(url!);
      const apiResponse: Robots = await response.json();
      dispatch(loadRobotsActionCreator(apiResponse));
    } catch (error: unknown) {
      throw new Error(`There was an error: ${(error as Error).message}`);
    }
  }, [url, dispatch]);

  return { loadAllRobot };
};

export default useApi;
