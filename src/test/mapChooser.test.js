import mapChooser from "../mapChooser.js";

describe("mapChooser", () => {
  it("returns portland.jpg", () => {
    const expected = "portland.png",
      actual = mapChooser("portland");

    expect(actual).toEqual(expected);
  });

  it("returns astoria.jpg", () => {
    const expected = "astoria.png",
      actual = mapChooser("astoria");

    expect(actual).toEqual(expected);
  });
    
    it("returns default when nothing is passed", () => {
      const expected = "defaultmap.png",
        actual = mapChooser("");

      expect(actual).toEqual(expected);
    });
});
