import { Robots, RobotsState } from "./types";
import { loadRobotsActionCreator, robotsReducer } from "./robotsSlice";

describe("Given the  robotsReducer", () => {
  describe("When it is invoked and recieves a  intial state and a loadRobots action with a list of one robot", () => {
    test("Then should return a new state with a copy of the list the 1 robots received", () => {
      const expectListRobots: Robots = [
        {
          name: "",
          image: "",
          speed: 1,
          strength: 1,
          createdOn: 1,
        },
      ];
      const expectedState: RobotsState = {
        robotsList: expectListRobots,
      };

      const initialState: RobotsState = {
        robotsList: [],
      };

      const newStateRobots = robotsReducer(
        initialState,
        loadRobotsActionCreator(expectListRobots)
      );

      expect(newStateRobots).toStrictEqual(expectedState);
    });
  });
});
