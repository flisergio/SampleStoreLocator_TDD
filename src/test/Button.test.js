import { fireEvent, render, screen } from "@testing-library/react";
import Button from "../components/Button.js";

describe("Button", () => {
  it("Button component renders without crashing", () => {
    render(<Button />);
  });

  it("Button component renders a button inside", () => {
    render(<Button />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const buttonTestId = screen.getByTestId("Button");
    const buttonTag = screen.getByRole("button");
    expect(buttonTestId).toContainElement(buttonTag);
  });

  it("Button component calls a function passed when clicked", async () => {
    const mockCallback = jest.fn();
    render(<Button handleClick={mockCallback} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockCallback.mock.calls.length).toEqual(1);
  });
});

describe("When a location is passed to it", () => {
  let props;

  beforeEach(() => {
    props = {
      location: "Location 1",
    };

    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Button {...props} />);
  });

  it("displays a Button component location", () => {
    const buttonTestId = screen.getByTestId("Button");
    expect(buttonTestId.textContent).toEqual("Location 1");
  });
});

describe("When a location is not passed to it", () => {
  let props;

  beforeEach(() => {
    props = {
      location: undefined,
    };

    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Button {...props} />);
  });

  it("displays a Button component location", () => {
    const buttonTestId = screen.getByTestId("Button");
    expect(buttonTestId.textContent).toEqual("All Locations");
  });
});
