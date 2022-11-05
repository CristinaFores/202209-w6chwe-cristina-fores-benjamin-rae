import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Robots } from "../../types/Robot";

interface RobotsStatus {
  robosList: Robots;
}

const initialState: RobotsStatus = {
  robosList: [],
};

const robotSilce = createSlice({
  name: "robots",
  initialState,
  reducers: {
    loadRobots: (
      currentState,
      action: PayloadAction<Robots>
    ): RobotsStatus => ({
      ...currentState,
      robosList: [...initialState.robosList, action.payload],
    }),
  },
});

export const { loadRobots: loadRobotsActionCreator } = robotSilce.actions;

export const robotsReducer = robotSilce.reducer;
