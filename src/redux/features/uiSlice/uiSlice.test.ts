import mockInitialUiState from "../../../mocks/mockInitialUiState";
import { uiReducer } from "./uiSlice";

describe("Given a uiReducer", () => {
  describe("When it is invoked", () => {
    describe("and it receives the initial ui state and an unknown action", () => {
      test("Then it should return a copy of the initial ui state", () => {
        const unknownAction = {
          type: "ui/unknownAction",
        };

        const newUiState = uiReducer(mockInitialUiState, unknownAction);

        expect(newUiState).toStrictEqual(mockInitialUiState);
      });
    });
  });
});
