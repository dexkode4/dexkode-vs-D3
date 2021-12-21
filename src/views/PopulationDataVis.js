import React, { useEffect, useState } from "react";
import { scaleBand, scaleLinear, max } from "d3";
import { fetchData } from "../API";

const url =
  "https://gist.githubusercontent.com/dexkode4/882c2c5e07698c6fad450a6e75790a37/raw/c2fa4f4af3773f8c8993e23ae61afea28395c23c/un_population_2019.csv";

const width = 960;
const height = 500;

export const PopulationDataVis = () => {
  const [data, setData] = useState([]);

  const _init = async () => {
    try {
      let response = await fetchData(url);
      response = response.map((row) => ({
        ...row,
        Population: +row["2020"],
      }));
      setData(response.slice(0, 10));
    } catch (error) {
      console.error("error:", error);
    }
  };

  useEffect(() => {
    _init();
  }, []);

  const margin = {
    top: 20,
    right: 20,
    left: 200,
    bottom: 20,
  };

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yScale = scaleBand()
    .domain(data.map((d) => d.Country))
    .range([0, innerHeight]);

  const xScale = scaleLinear()
    .domain([0, max(data, (d) => d.Population)])
    .range([0, innerWidth]);

  return !!data.length ? (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        {xScale.ticks().map((tickValue) => (
          <g key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
            <line y2={innerHeight} stroke="black" />
            <text
              style={{ textAnchor: "middle" }}
              dy=".71em"
              y={innerHeight + 3}
            >
              {tickValue}
            </text>
          </g>
        ))}
        {yScale.domain().map((tickValue) => (
          <text
            key={tickValue}
            style={{ textAnchor: "end" }}
            x={-3}
            dy=".32em"
            y={yScale(tickValue) + yScale.bandwidth() / 2}
          >
            {tickValue}
          </text>
        ))}
        {data.map((d) => (
          <rect
            key={d.Country}
            x={0}
            y={yScale(d.Country)}
            width={xScale(d.Population)}
            height={yScale.bandwidth()}
          />
        ))}
      </g>
    </svg>
  ) : (
    <>Loading...</>
  );
};
