import image from "./images/defaultmap.png";
import "./css/Map.css";

const Map = (props) => {
  let imagePath = "";

  props.imageName
    ? (imagePath = `./images/${props.imageName}`)
    : (imagePath = image);

  return (
    <>
      <div className="Map" data-testid="Map">
        <img alt={props.location} src={imagePath} className="MapImg" />
      </div>
    </>
  );
};

export default Map;
