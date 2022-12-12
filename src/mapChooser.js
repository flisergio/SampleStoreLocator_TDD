const mapChooser = (valueToReturn) =>
  valueToReturn === "" || !valueToReturn
    ? "defaultmap.png"
    : `${valueToReturn}.png`;

export default mapChooser;
