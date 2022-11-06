import { Robots, RobotsState } from "./types";
import {
  deleteRobotActionCreator,
  loadRobotsActionCreator,
  robotsReducer,
} from "./robotsSlice";
import { getRandomRobotsList } from "../../../factories/robotsFactory";

describe("Given the  robotsReducer", () => {
  describe("When it is invoked and recieves a  intial state and a loadRobots action with a list of one robot", () => {
    test("Then should return a new state with a copy of the list the 1 robots received", () => {
      const expectListRobots: Robots = [
        {
          name: "",
          image: "",
          speed: 1,
          strength: 1,
          createdOn: "",
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

  describe("When it receives initial state with 3 robots a deleteRobot action with the first robot id", () => {
    test("Then its should return the state without the first robot", () => {
      const robotsList = getRandomRobotsList(3);
      const [robotOne] = robotsList;

      const initialState: RobotsState = {
        robotsList: robotsList,
      };
      const expectedState: RobotsState = {
        robotsList: robotsList.slice(1),
      };

      const newState = robotsReducer(
        initialState,
        deleteRobotActionCreator(robotOne._id!)
      );

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
