import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { getRandomRobot } from "../../factories/robotsFactory";
import { mockstore } from "../../mocks/storeMock";
import RobotCard from "./RobotCard";

describe("Given a RobotCard componet", () => {
  describe("when its is rendered", () => {
    test("Then its should show an image with alt text name robot,headding level 3 and 2 buttons", () => {
      const robot = getRandomRobot();
      const { name, image, createdOn, speed, strength } = robot;
      const textButtonEdit = "Edit";
      const textButtonDelete = "Delete";

      render(
        <Provider store={mockstore}>
          <RobotCard robot={robot} />
        </Provider>
      );

      const rendertRobotName = screen.queryByRole("heading", {
        level: 3,
        name: name,
      });
      const renderImageRobot = screen.queryByRole("img", {
        name: name,
      });
      const renderButtonEdit = screen.queryByRole("button", {
        name: textButtonEdit,
      });
      const renderButtonDelete = screen.queryByRole("button", {
        name: textButtonDelete,
      });

      expect(rendertRobotName).toBeInTheDocument();
      expect(renderImageRobot).toBeInTheDocument();
      expect(renderButtonEdit).toBeInTheDocument();
      expect(renderButtonDelete).toBeInTheDocument();
    });
  });
});
