import { render, screen } from "@testing-library/react";
import Map from "../components/Map.js";

describe("Map", () => {
  it("Map component renders without crashing", () => {
    render(<Map />);
  });

  it("Map component contains an image", () => {
    render(<Map />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const mapTestId = screen.getByTestId("Map");
    const imgTag = screen.getByRole("img");
    expect(mapTestId).toContainElement(imgTag);
  });

  it("Map component displays default when no params are given", () => {
    render(<Map />);
    const imgTag = screen.getByRole("img");
    expect(imgTag.src).toContain("http://localhost/defaultmap.png");
  });

  it("Map component displays the map imageName passed to it", () => {
    const props = {
      location: undefined,
      imageName: "testmap.png",
    };
    render(<Map {...props} />);
    const imgTag = screen.getByRole("img");
    expect(imgTag.src).toContain("http://localhost/images/testmap.png");
  });
});
