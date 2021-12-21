import React, { useEffect, useState } from "react";
import { csv, arc , pie} from "d3";

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;

const pieArc = arc().innerRadius(0).outerRadius(width);

export const CssColorDataVis = () => {
  const [data, setData] = useState([]);

  const url =
    "https://gist.githubusercontent.com/dexkode4/3d49a5464b4ac987c4c3a2c7e7d27cbd/raw/108d9462f45c637728146ccde6f620d43a172771/cssNamedColors.csv";

  const fetchCssColors = async () => {
    try {
      const response = await (await fetch(url)).text();
      return response;
    } catch (error) {
      console.error("error =>  ", error);
    }
  };

  const fetchCssColorsWithD3CsvUtilityFunction = async () => {
    const data = await csv(url);
    console.log(data[0]);

    setData(data);
    return data;
  };

  useEffect(() => {
    fetchCssColorsWithD3CsvUtilityFunction();
  }, []);

  return data ? (
    <div>
      {/* <svg width={width} height={height}>
        <g transform={`translate(${centerX}, ${centerY})`}>
          {data.map((color, index) => (
            <path
              key={color["RGB hex value"] + color.Keyword + index}
              fill={color["RGB hex value"]}
              d={pieArc({
                startAngle: (index / data.length) * Math.PI * 2,
                endAngle: ((index + 1) / data.length) * Math.PI * 2,
              })}
            />
          ))}
        </g>
      </svg> */}
      <svg width={width} height={height}>
        <g transform={`translate(${centerX}, ${centerY})`}>
          {pie().value(1)(data).map((color, index) => (
            <path
              key={color.data["RGB hex value"] + color.Keyword + index}
              fill={color.data["RGB hex value"]}
              d={pieArc(color)}
            />
          ))}
        </g>
      </svg>
    </div>
  ) : null;
};
