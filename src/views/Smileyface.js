import * as d3 from "d3";

export const Smileyface = () => {
  const width = 960;
  const height = 500;
  const centerX = width / 2;
  const centerY = height / 2;
  const strokeWidth = 10;
  const eyeOffsetX = 100;
  const eyeOffsetY = 100;
  const eyeRadius = 50;
  const mouthWidth = 20;
  const mouthRadius = 140;

  const mouthArc = d3
    .arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2);
 
  return (
      <svg width={width} height={height}>
        <g transform={`translate(${centerX}, ${centerY})`}>
          <circle
            // cx={centerX}
            // cy={centerY}
            r={(centerX - strokeWidth) / 2}
            fill="yellow"
            stroke="black"
            stroke-width={strokeWidth}
          />
          <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
          <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
          <path d={mouthArc()} />
        </g>
      </svg>
  );
}
