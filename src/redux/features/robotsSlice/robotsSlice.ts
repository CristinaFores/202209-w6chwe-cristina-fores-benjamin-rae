import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { Robots, RobotsState } from "./types";

const initialState: RobotsState = {
  robotsList: [],
};

const robotSilce = createSlice({
  name: "robots",
  initialState,
  reducers: {
    loadRobots: (currentState, action: PayloadAction<Robots>): RobotsState => ({
      ...currentState,
      robotsList: [...action.payload],
    }),
    deleteRobot: (
      currentState,
      action: PayloadAction<string>
    ): RobotsState => ({
      ...currentState,
      robotsList: currentState.robotsList.filter(
        (robot) => robot._id !== action.payload
      ),
    }),
  },
});

export const { loadRobots: loadRobotsActionCreator } = robotSilce.actions;

export const robotsReducer = robotSilce.reducer;
