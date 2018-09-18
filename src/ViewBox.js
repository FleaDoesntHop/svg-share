import React, { Component } from "react";

export default class ViewBox extends Component {
  render() {
    return (
      <div>
        <svg
          width="450px"
          height="100px"
          viewBox="0 0 450 100"
          preserveAspectRatio="xMidYMid meet"
          style={{ border: "1px solid grey" }}
        >
          <rect x="10" y="5" fill="none" stroke="blue" width="90" height="90" />
          <circle cx="170" cy="50" r="45" stroke="green" fill="none" />
          <polygon
            points="279,5 294,35 328,40 303,62 309,94 279,79 248,94 254,62 230,39 263,35"
            fill="none"
            stroke="#a6a34a"
          />
          <line x1="360" y1="6" x2="360" y2="95" stroke="black" />
          <path d="M410 95 L 440 6" stroke="brown" />
        </svg>
      </div>
    );
  }
}
