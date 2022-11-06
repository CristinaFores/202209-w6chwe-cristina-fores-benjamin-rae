import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

describe("Given the page HomePage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a Header component with the heading level 1 'Robotitos'", () => {
      const expectedHeading = {
        level: 1,
        name: "Robotitos",
      };

      render(<HomePage />);

      const renderedHeading = screen.queryByRole("heading", expectedHeading);

      expect(renderedHeading).toBeInTheDocument();
    });
  });
});
