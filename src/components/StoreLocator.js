import { useState, useEffect } from "react";
import Header from "./Header";
import Button from "./Button";
import Map from "./Map";
import mapChooser from "../mapChooser";
// import axios from "axios";

const StoreLocator = () => {
  const [map, setMap] = useState("");
  const [location, setLocation] = useState("");
  // const [shops, setShops] = useState([]);

  const shops = [
    {
      location: "Portland",
      address: "123 Portland Dr",
    },
    {
      location: "Astoria",
      address: "123 Astoria Dr",
    },
    {
      location: "",
      address: "",
    },
  ];

  const chooseMap = (e) => {
    let valueToRender = "";

    switch (e.target.value) {
      case "Astoria":
        valueToRender = "map1";
        break;
      case "Portland":
        valueToRender = "map2";
        break;
      default:
        valueToRender = "defaultmap";
        break;
    }

    setLocation(e.target.value);
    setMap(mapChooser(valueToRender));
  };

  const storeButtons = shops.map((shop, id) => (
    <Button handleClick={chooseMap} key={id} location={shop.location} />
  ));

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get("");
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <div data-testid="StoreLocator">
        <Header />
        <div>{storeButtons}</div>
        <Map imageName={map} location={location} />
      </div>
    </>
  );
};

export default StoreLocator;
