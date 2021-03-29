import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    hex: "#0000FF",
    mulitiplier: 500,
  },

  recovered: {
    hex: "#7DD71D",
    mulitiplier: 700,
  },

  deaths: {
    hex: "#CC1034",
    mulitiplier: 3500,
  },
};

export const sortData = (data) => {
  const sortedData = [...data];

  sortedData.sort((a, b) => b.cases - a.cases);

  return sortedData;
};

export const prettyPrintStat = (stat) =>
  stat ? `${numeral(stat).format("0.0a")}` : "0";

//Draw circles on the map
export const showDataOnMap = (data, casesType) =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      pathOptions={{
        color: casesTypeColors[casesType].hex,
        fillColor: casesTypeColors[casesType].hex,
      }}
      radius={
        Math.sqrt(country[casesType] / 10) *
        casesTypeColors[casesType].mulitiplier
      }
    >
      <Popup>
        <div className="info__container">
          <div
            className="info__flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
          <div className="info__name">{country.country}</div>
          <div className="info__confirmed">
            Cases: {numeral(country.cases).format("0,0")}
          </div>
          <div className="info__recovered">
            Recovered: {numeral(country.recovered).format("0,0")}
          </div>
          <div className="info__deaths">
            Deaths: {numeral(country.deaths).format("0,0")}
          </div>
        </div>
      </Popup>
    </Circle>
  ));