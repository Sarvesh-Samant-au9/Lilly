import React, { useState, useEffect } from "react";
import axios from "axios";
const Table = ({ state }) => {
  const [allInfo, setAllInfo] = useState([]);
  const getInfo = async () => {
    const { data } = await axios.get(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/covid196c95c6e.json"
    );
    setAllInfo(data);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div className="container-fluid">
      {state && allInfo.length > 0 && (
        <>
          <h3>
            Total Affected ={" "}
            {allInfo
              .filter((name) => name["State/UnionTerritory"] === state)
              .reduce((prev, next) => prev + next.Confirmed, 0)}
          </h3>
          <h3>
            Overall Affected ={" "}
            {allInfo.reduce((prev, next) => prev + next.Confirmed, 0)}
          </h3>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">State</th>
                <th scope="col">Patients</th>
              </tr>
            </thead>
            <tbody>
              {allInfo
                .filter((name) => name["State/UnionTerritory"] === state)
                .map((el, index) => (
                  <tr key={index}>
                    <td>{el.Date}</td>
                    <td>{state}</td>
                    <td>{el.Confirmed}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Table;
