import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

describe("Given the NotFoundPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the texts '404' and 'Page not found' and the button 'Home'", () => {
      const errorCodeText = /404/;
      const errorText = /page not found/i;
      const buttonText = /home/i;

      render(<NotFoundPage />);
      const renderedCode = screen.queryByText(errorCodeText);
      const renderedMessage = screen.queryByText(errorText);
      const renderedButton = screen.queryByRole("button", {
        name: buttonText,
      });

      expect(renderedCode).toBeInTheDocument();
      expect(renderedMessage).toBeInTheDocument();
      expect(renderedButton).toBeInTheDocument();
    });
  });
});
