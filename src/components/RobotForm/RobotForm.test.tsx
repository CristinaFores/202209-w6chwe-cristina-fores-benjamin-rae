import { render, screen } from "@testing-library/react";
import RobotForm from "./RobotForm";

describe("Given a RobotForm component", () => {
  describe("When it is rendered with isNew true", () => {
    test("Then it should show inputs with labels Name, Speed, Strength and Image Url, and a button with 'Create Robot", () => {
      const nameInputLabel = /name/i;
      const speedInputLabel = /speed/i;
      const strengthInputLabel = /strength/i;
      const imageInputLabel = /image url/i;
      const buttonText = /create robot/i;

      render(<RobotForm isNew={true} />);

      const nameInput = screen.queryByRole("textbox", {
        name: nameInputLabel,
      });
      const speedInput = screen.queryByRole("spinbutton", {
        name: speedInputLabel,
      });
      const strengthInput = screen.queryByRole("spinbutton", {
        name: strengthInputLabel,
      });
      const imageInput = screen.queryByRole("textbox", {
        name: imageInputLabel,
      });
      const renderedButton = screen.queryByRole("button", {
        name: buttonText,
      });

      expect(nameInput).toBeInTheDocument();
      expect(speedInput).toBeInTheDocument();
      expect(strengthInput).toBeInTheDocument();
      expect(imageInput).toBeInTheDocument();
      expect(renderedButton).toBeInTheDocument();
    });
  });

  describe("When it is rendered with isNew false", () => {
    test("Then it should show a button with 'Edit Robot", () => {
      const buttonText = /edit robot/i;

      render(<RobotForm isNew={false} />);

      const renderedButton = screen.queryByRole("button", {
        name: buttonText,
      });

      expect(renderedButton).toBeInTheDocument();
    });
  });
});
