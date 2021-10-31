import { SVGMap } from "react-svg-map";
import "react-svg-map/lib/index.css";
import India from "@svg-maps/india";
import React, { useState, useEffect } from "react";
import TabsInfo from "../Tabs/TabsInfo";
import axios from "axios";

const Map = () => {
  const [stateName, setStateName] = useState();
  const [getAllInfo, setAllInfo] = useState([]);
  const getTotalInfo = async () => {
    const { data } = await axios.get(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/covid196c95c6e.json"
    );
    setAllInfo(data);
  };
  useEffect(() => {
    getTotalInfo();
  }, []);

  const onLocationClick = (event) => {
    setStateName(event.target.getAttribute("name"));
    console.log("Name", event.target.getAttribute("name"));
  };
  return (
    <div className="container-fluid">
      <SVGMap map={India} onLocationClick={onLocationClick} />
      <h3 className="text-center display-2">{stateName}</h3>
      <TabsInfo state={stateName} allInfo={getAllInfo} />
    </div>
  );
};

export default Map;
