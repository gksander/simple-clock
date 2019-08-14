import React from 'react';
import { format as formatDate } from 'date-fns';

// SVG constants
const R = 50,
      hourTickL = 5,
      hourHandLength = 25,
      minuteHandLength = 45,
      secondHandLength = 45;

const hours = [...Array(12).keys()],
      minutes = [...Array(60).keys()];

const Clock = ({ time }) => {
  // Get the hour, minute, and second
  const [hour, minute, second] = formatDate(time, `h:m:s`).split(":");



  return (
    <svg
      viewBox="0 0 100 100"
      className="w-1/2 z-10 my-3"
    >
      <circle
        cx={R} cy={R} r={R - 1}
        style={{
          stroke: "white",
          fill: "white",
          fillOpacity: 0.1
        }}
      />
      {/* Hour indicators */}
      <g>
        {hours.map(h => (
          <line
            key={'hour-tick-' + h}
            x1={R + (R - 3) * Math.cos(h*2*Math.PI/12)}
            y1={R + (R - 3) * Math.sin(h*2*Math.PI/12)}
            x2={R + (R - 3 - hourTickL) * Math.cos(h*2*Math.PI/12)}
            y2={R + (R - 3 - hourTickL) * Math.sin(h*2*Math.PI/12)}
            style={{
              stroke: "white"
            }}
          />
        ))}
      </g>
      {/* Hour hand */}
      <line
        x1={R} y1={R}
        x2={R + hourHandLength * Math.cos(-Math.PI/2 + hour * 2*Math.PI/12)}
        y2={R + hourHandLength * Math.sin(-Math.PI/2 + hour * 2*Math.PI/12)}
        style={{
          stroke: "white"
        }}
      />
      {/* Minute hand... */}
      <line
        x1={R} y1={R}
        x2={R + minuteHandLength * Math.cos(-Math.PI/2 + minute * 2*Math.PI/60)}
        y2={R + minuteHandLength * Math.sin(-Math.PI/2 + minute * 2*Math.PI/60)}
        style={{
          stroke: "white"
        }}
      />
      {/* Second hand... */}
      <line
        x1={R + 5*Math.cos(Math.PI/2 + second * 2*Math.PI/60)}
        y1={R + 5*Math.sin(Math.PI/2 + second * 2*Math.PI/60)}
        x2={R + secondHandLength * Math.cos(-Math.PI/2 + second * 2*Math.PI/60)}
        y2={R + secondHandLength * Math.sin(-Math.PI/2 + second * 2*Math.PI/60)}
        style={{
          stroke: "red"
        }}
      />
      {/* Throw a circle in the center to cover up intersection */}
      <circle
        cx={R} cy={R}
        r={1}
        style={{
          stroke: "white",
          fill: "white"
        }}
      />
    </svg>
  );
}

export default Clock;