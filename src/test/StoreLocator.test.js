import { fireEvent, render, screen } from "@testing-library/react";
import StoreLocator from "../components/StoreLocator.js";
// import renderer from "react-test-renderer";

describe("StoreLocator", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<StoreLocator />);
  });

  it("StoreLocator component renders successfully", () => {});

  // it("StoreLocator component renders correctly", () => {
  //   const tree = renderer.create(<StoreLocator />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // })

  // it("StoreLocator component calls axios.get", () => {

  // });

  it("StoreLocator component renders a Header component inside", () => {
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const storeLocator = screen.getByTestId("StoreLocator");
    const header = screen.getByTestId("Header");
    expect(storeLocator).toContainElement(header);
  });

  it("StoreLocator component renders 2 Button component children inside", () => {
    const storeLocator = screen.getByTestId("StoreLocator");
    const buttonsArray = screen.getAllByRole("button");
    expect(buttonsArray.length).toEqual(3);
    buttonsArray.map((button) => expect(storeLocator).toContainElement(button));
  });

  it("StoreLocator component renders a Map component inside", () => {
    const storeLocator = screen.getByTestId("StoreLocator");
    const map = screen.getByTestId("Map");
    expect(storeLocator).toContainElement(map);
  });
});

// describe("chooseMap", () => {
//   it("StoreLocator updated props.currentMap using the location passed to it", () => {
//     render(<StoreLocator />);
//     const mockEvent = { target: { value: "testLand" } };
//     fireEvent.chooseMap(mockEvent);
//   });
// });
