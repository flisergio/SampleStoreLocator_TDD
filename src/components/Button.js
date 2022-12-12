import "./css/Button.css";

const Button = (props) => {
  const buttonValue = props.location ? props.location : "All Locations";

  return (
    <>
      <div data-testid="Button">
        <button
          value={buttonValue}
          className="location-button"
          onClick={props.handleClick}
        >
          {buttonValue}
        </button>
      </div>
    </>
  );
};

export default Button;
