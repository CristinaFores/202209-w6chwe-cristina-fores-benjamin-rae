import { useCallback } from "react";
import { loadRobotsActionCreator } from "../redux/features/robotsSlice/robotsSlice";
import { Robots } from "../redux/features/robotsSlice/types";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
} from "../redux/features/uiSlice/uiSlice";

import { useAppDispatch } from "../redux/hooks";

const useApi = () => {
  const dispatch = useAppDispatch();
  const url = process.env.REACT_APP_URL_API;

  const loadAllRobot = useCallback(async () => {
    dispatch(showLoadingActionCreator());
    try {
      const response = await fetch(url!);
      const apiResponse: Robots = await response.json();

      if (response.status >= 400) {
        throw new Error("Couldn't load robots");
      }

      dispatch(loadRobotsActionCreator(apiResponse));
      dispatch(hideLoadingActionCreator());
    } catch (error: unknown) {
      dispatch(hideLoadingActionCreator());

      throw new Error(`There was an error: ${(error as Error).message}`);
    }
  }, [url, dispatch]);

  return { loadAllRobot };
};

export default useApi;
