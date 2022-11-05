import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";

import { store } from "../redux/store";
import useApi from "./useApi";

interface ProviderWrapperProps {
  children: JSX.Element | JSX.Element[];
}
const ProviderWrapper = ({ children }: ProviderWrapperProps) => {
  return <Provider store={store}>{children}</Provider>;
};

const dispatchSpy = jest.spyOn(store, "dispatch");

describe("Given the useApi custom hook", () => {
  describe("When its method loadAllRobot is invoked", () => {
    test("Then is should  call the dispatch", async () => {
      const {
        result: {
          current: { loadAllRobot },
        },
      } = renderHook(() => useApi(), {
        wrapper: ProviderWrapper,
      });

      await loadAllRobot();

      expect(dispatchSpy).toHaveBeenCalledTimes(1);
    });
  });
});
