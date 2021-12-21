import React, {useCallback, useState} from 'react'
import * as d3 from "d3";



export const MouseTracker = () => {
  const width = 960;
  const height = 500;
  const circleX = width / 2;
  const circleY = height / 2;
  const circleRadius = 30;

  const initialMousePosition = {x: width / 2, y: height / 2}

  const [pos, setPos] = useState(initialMousePosition)

  const _handleMouseMove = useCallback((event) => {
      const { clientX, clientY} = event;
        console.log({clientX, clientY});
        setPos({x: clientX, y: clientY})
  },[setPos])
 
  return (
      <svg width={width} height={height} onMouseMove={_handleMouseMove}>
          <circle cx={pos.x} cy={pos.y} r={circleRadius} />
      </svg>
  );
}
