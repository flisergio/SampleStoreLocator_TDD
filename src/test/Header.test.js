import { render, screen } from "@testing-library/react";
import Header from "../components/Header.js";

describe("Header", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Header />);
  });

  it("Header component renders without crashing", () => {});

  it("Header component contains an image", () => {
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const headerTestId = screen.getByTestId("Header");
    const imgTag = screen.getByRole("img");
    expect(headerTestId).toContainElement(imgTag);
  });
});
