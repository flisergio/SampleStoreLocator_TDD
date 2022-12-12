import { render, screen } from "@testing-library/react";
import App from "../src/App.js";

describe("App", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<App />);
  });

  it("App component renders without crashing", () => {});

  it("App component renders a store locator inside", () => {
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const app = screen.getByTestId("App");
    const storeLocator = screen.getByTestId("StoreLocator");
    expect(app).toContainElement(storeLocator);
  });
});
