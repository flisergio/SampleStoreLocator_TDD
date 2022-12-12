import image from "./images/logo.png";
import "./css/Header.css";

const Header = () => (
  <>
    <div className="Header" data-testid="Header">
      <img alt="logo" src={image} className="HeaderImg" />
    </div>
  </>
);

export default Header;
